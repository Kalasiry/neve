<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      27/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

use Neve\Core\Styles\Css_Vars;

/**
 * Class Template_Parts
 *
 * @package Neve\Views
 */
class Template_Parts extends Base_View {
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_blog_post_template_part_content', array( $this, 'render_post' ) );
		add_filter( 'excerpt_more', array( $this, 'link_excerpt_more' ) );
		add_filter( 'the_content_more_link', array( $this, 'link_excerpt_more' ) );
	}

	/**
	 * Render the post.
	 */
	public function render_post() {
		$args = array(
			'post_id'    => 'post-' . get_the_ID(),
			'post_class' => $this->post_class(),
			'content'    => $this->get_article_inner_content(),
		);

		$this->get_view( 'archive-post', $args );
	}

	/**
	 * Echo the post class.
	 */
	protected function post_class() {
		$class  = join( ' ', get_post_class() );
		$layout = $this->get_layout();
		$class .= ' layout-' . $layout;
		if ( in_array( $layout, [ 'grid', 'covers' ], true ) ) {
			$class .= ' ' . $this->get_grid_columns_class();
		} else {
			$class .= ' col-12 nv-non-grid-article';
		}
		return $class;
	}

	/**
	 * Get the order of elements for the element card.
	 *
	 * @return array
	 */
	static function get_elements_order() {
		$components = [ 'thumbnail', 'title-meta', 'excerpt', ];
		$default_order = [
			[ 'id' => 'thumbnail', 'visible' => true ],
			[ 'id' => 'title-meta', 'visible' => true ],
			[ 'id' => 'excerpt', 'visible' => true ],
		];
		$order = get_theme_mod( 'neve_post_content_ordering', wp_json_encode( $default_order ) );
		$order = json_decode( $order, true );
		return neve_maybe_normalize_ordering( $order, $components );
	}

	/**
	 * Render inner content for <article>
	 *
	 * @return string
	 */
	private function get_article_inner_content() {
		$markup = '';

		$layout = $this->get_layout();
		$order  = $this::get_elements_order();

		if ( in_array( $layout, [ 'alternative', 'default' ] ) ) {
			$markup .= $this->get_post_thumbnail();
			$markup .= '<div class="non-grid-content ' . esc_attr( $layout ) . '-layout-content">';
			$markup .= $this->get_ordered_content_parts( $order, true );
			$markup .= '</div>';

			return $markup;
		}

		if ( $layout === 'covers' ) {
			$style         = '';
			if ( in_array( ['id' => 'thumbnail' ], $order, true ) ) {
				$thumb  = get_the_post_thumbnail_url();
				$style .= ! empty( $thumb ) ? 'background-image: url(' . esc_url( $thumb ) . ')' : '';
			}
			$markup .= '<div class="cover-post nv-post-thumbnail-wrap" style="' . esc_attr( $style ) . '">';
			$markup .= '<div class="inner">';
			$markup .= $this->get_ordered_content_parts( $order, true );
			$markup .= '</div>';
			$markup .= '</div>';

			return $markup;
		}

		return $this->get_ordered_content_parts( $order );
	}

	/**
	 * Render the post thumbnail.
	 *
	 * @return string
	 */
	private function get_post_thumbnail() {
		if ( ! has_post_thumbnail() ) {
			return '';
		}

		global $neve_thumbnail_skip_lazy_added;

		/** This filter is documented in header-footer-grid/templates/components/component-logo.php */
		$should_add_skip_lazy = apply_filters( 'neve_skip_lazy', true );
		$image_class          = '';
		if ( $should_add_skip_lazy && ! isset( $neve_thumbnail_skip_lazy_added ) ) {
			$image_class                    = 'skip-lazy';
			$neve_thumbnail_skip_lazy_added = true;
		}

		$markup = '<div class="nv-post-thumbnail-wrap">';

		$markup .= '<a href="' . esc_url( get_the_permalink() ) . '" rel="bookmark" title="' . the_title_attribute(
			array(
				'echo' => false,
			)
		) . '">';

		$markup .= get_the_post_thumbnail(
			get_the_ID(),
			'neve-blog',
			array( 'class' => $image_class )
		);
		$markup .= '</a>';
		$markup .= '</div>';

		return apply_filters( 'neve_blog_post_thumbnail_markup', $markup );
	}

	/**
	 * Get the posts layout.
	 *
	 * @return string
	 */
	private function get_layout() {
		$layout = get_theme_mod( 'neve_blog_archive_layout', 'grid' );

		if ( $layout !== 'default' ) {
			return $layout;
		}

		if ( get_theme_mod( 'neve_blog_list_alternative_layout', false ) === true ) {
			$layout = 'alternative';
		}

		return $layout;
	}

	/**
	 * Render title.
	 *
	 * @return string
	 */
	private function get_title() {
		$tag = neve_is_new_skin() ? 'h3' : 'h2';

		$markup = '';

		$markup .= '<' . $tag . ' class="blog-entry-title entry-title">';
		$markup .= '<a href="' . esc_url( get_the_permalink() ) . '" rel="bookmark">';
		$markup .= get_the_title();
		$markup .= '</a>';
		$markup .= '</' . $tag . '>';

		return $markup;
	}

	/**
	 * Get meta order value.
	 *
	 * @return array
	 */
	static function get_meta_order() {
		$components = [ 'author', 'category', 'date', 'comments' ];
		$default_meta_order = wp_json_encode(
			[
				[ 'id' => 'author', 'visible' => true ],
				[ 'id' => 'date', 'visible' => true ],
				[ 'id' => 'comments', 'visible' => true ],
				[ 'id' => 'category', 'visible' => false ],
			]
		);
		$meta_order = get_theme_mod( 'neve_post_meta_ordering', $default_meta_order );
		$meta_order = json_decode( $meta_order, true );

		return neve_maybe_normalize_ordering( $meta_order, $components );
	}

	/**
	 * Render meta.
	 *
	 * @return string
	 */
	private function get_meta() {

		$meta_order = self::get_meta_order();

		ob_start();
		do_action( 'neve_post_meta_archive', $meta_order );
		$meta = ob_get_clean();

		return $meta;
	}

	/**
	 * Render excerpt.
	 *
	 * @return string
	 */
	private function get_excerpt() {
		ob_start();
		do_action( 'neve_excerpt_archive', 'index' );
		$excerpt = ob_get_clean();

		return $excerpt;
	}

	/**
	 * Get grid columns class.
	 *
	 * @return string
	 */
	private function get_grid_columns_class() {
		if ( neve_is_new_skin() ) {
			return '';
		}

		$classes    = '';
		$columns    = get_theme_mod(
			'neve_grid_layout',
			wp_json_encode(
				[
					'desktop' => 1,
					'tablet'  => 1,
					'mobile'  => 1,
				]
			)
		);
		$columns    = json_decode( $columns, true );
		$device_map = [
			'desktop' => 'md',
			'tablet'  => 'sm',
			'mobile'  => '',
		];

		foreach ( $columns as $device => $column_number ) {
			if ( $column_number === 0 || empty( $column_number ) ) {
				$column_number = 1;
			}
			$classes .= ' col-' . ( $device !== 'mobile' ? $device_map[ $device ] . '-' : '' ) . ( 12 / absint( $column_number ) );
		}

		return $classes;
	}

	/**
	 * Change link excerpt more.
	 *
	 * @param string $moretag read more tag.
	 *
	 * @return string
	 */
	public function link_excerpt_more( $moretag ) {

		$new_moretag = '&hellip;&nbsp;';

		if ( $moretag !== ' [&hellip;]' ) {
			$new_moretag = '';
		}

		$read_more_args = apply_filters(
			'neve_read_more_args',
			array(
				'text'    => esc_html__( 'Read More', 'neve' ) . ' &raquo;',
				'classes' => '',
			)
		);

		$markup  = '<a href="' . esc_url( get_the_permalink() ) . '"';
		$markup .= ' class="' . esc_attr( $read_more_args['classes'] ) . '"';
		$markup .= ' rel="bookmark">';
		$markup .= esc_html( $read_more_args['text'] );
		$markup .= '<span class="screen-reader-text">' . get_the_title() . '</span>';
		$markup .= '</a>';

		if ( ! empty( $read_more_args['classes'] ) ) {
			$style  = neve_is_new_skin() ? '' : 'padding: 10px 0 0;';
			$markup = '<div class="read-more-wrapper" style="' . esc_attr( $style ) . '">' . $markup . '</div>';
		}

		$new_moretag .= $markup;

		return $new_moretag;
	}

	/**
	 * Get ordered content parts.
	 *
	 * @param array $order Elements order.
	 * @param bool $exclude_thumbnail exclude thumbnail from order.
	 *
	 * @return string
	 */
	private function get_ordered_content_parts( $order, $exclude_thumbnail = false ) {
		$markup        = '';
		foreach ( $order as $content_bit ) {
			if ( $content_bit['visible'] === false ) {
				continue;
			}
			switch ( $content_bit['id'] ) {
				case 'thumbnail':
					if ( $exclude_thumbnail ) {
						break;
					}
					$markup .= $this->get_post_thumbnail();
					break;
				case 'title':
					$markup .= $this->get_title();
					break;
				case 'meta':
					$markup .= $this->get_meta();
					break;
				case 'title-meta':
					$markup .= $this->get_title();
					$markup .= $this->get_meta();
					break;
				case 'excerpt':
					$markup .= $this->get_excerpt();
					$markup .= wp_link_pages(
						array(
							'before'      => '<div class="post-pages-links"><span>' . apply_filters( 'neve_page_link_before', esc_html__( 'Pages:', 'neve' ) ) . '</span>',
							'after'       => '</div>',
							'link_before' => '<span class="page-link">',
							'link_after'  => '</span>',
							'echo'        => false,
						)
					);
					break;
				default:
					break;
			}
		}

		return $markup;
	}
}
