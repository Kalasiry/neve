.hamburger {
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
}

.hamburger .hamburger-inner,
.hamburger .hamburger-inner::before,
.hamburger .hamburger-inner::after {
  background-color: currentColor;
}

.hamburger-box {
  width: 15px;
  height: 12px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -1px;
}

.hamburger-inner, .hamburger-inner:before, .hamburger-inner:after {
  width: 15px;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner:before, .hamburger-inner:after {
  content: "";
  display: block;
}

.hamburger-inner:before {
  top: -5px;
}

.hamburger-inner:after {
  bottom: -5px;
}

/*
 * Arrow
 */
.hamburger--arrow.is-active .hamburger-inner:before {
  transform: translate3d(-3px, 0, 0) rotate(-45deg) scale(0.7, 1);
}

.hamburger--arrow.is-active .hamburger-inner:after {
  transform: translate3d(-3px, 0, 0) rotate(45deg) scale(0.7, 1);
}

/*# sourceMappingURL=arrow.php.map */