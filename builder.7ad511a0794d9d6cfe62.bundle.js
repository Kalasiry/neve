(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1603:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(7),__webpack_require__(495),__webpack_require__(46),__webpack_require__(26),__webpack_require__(21);var react=__webpack_require__(1),build_module_button=(__webpack_require__(33),__webpack_require__(496),__webpack_require__(58),__webpack_require__(19),__webpack_require__(6),__webpack_require__(12),__webpack_require__(11),__webpack_require__(20),__webpack_require__(17),__webpack_require__(15),__webpack_require__(18),__webpack_require__(14),__webpack_require__(8),__webpack_require__(22),__webpack_require__(68)),svg=__webpack_require__(69),library_cog=Object(react.createElement)(svg.b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(react.createElement)(svg.a,{fillRule:"evenodd",d:"M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",clipRule:"evenodd"})),build_module=__webpack_require__(4),classnames=__webpack_require__(9),classnames_default=__webpack_require__.n(classnames),dist=(__webpack_require__(53),__webpack_require__(36),__webpack_require__(37),__webpack_require__(38),__webpack_require__(1597)),build_module_icon=(__webpack_require__(77),__webpack_require__(86),__webpack_require__(87),__webpack_require__(41),__webpack_require__(96)),drag_handle=__webpack_require__(1601),library_settings=Object(react.createElement)(svg.b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(react.createElement)(svg.a,{d:"M17 4h-2v4.5h2V7h3V5.5h-3V4zM4 5.5h9V7H4V5.5zm16 5.75h-9v1.5h9v-1.5zm-16 0h3V10h2v4.25H7v-1.5H4v-1.5zM9 17H4v1.5h5V17zm4 0h7v1.5h-7V20h-2v-4.25h2V17z"})),close_small=Object(react.createElement)(svg.b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(react.createElement)(svg.a,{d:"M13 11.9l3.3-3.4-1.1-1-3.2 3.3-3.2-3.3-1.1 1 3.3 3.4-3.5 3.6 1 1L12 13l3.5 3.5 1-1z"})),BuilderContext=__webpack_require__(493),jsx_runtime=__webpack_require__(0),BuilderItem_BuilderItem=function BuilderItem(props){var componentId=props.componentId,currentSection=props.currentSection,slot=props.slot,row=props.row,index=props.index,_useContext=Object(react.useContext)(BuilderContext.a),actions=_useContext.actions,builder=_useContext.builder,itemDetails=window.NeveReactCustomize.HFG[builder].items[componentId];if(!itemDetails)return null;var name=itemDetails.name,section=itemDetails.section,removeItem=actions.removeItem,updateSidebarItems=actions.updateSidebarItems,isBlockWidget=section&&section.includes("neve_sidebar-widgets"),isActive=currentSection===section,itemSection=window.wp.customize.section(section),focusItemSection=function focusItemSection(){itemSection.focus()},itemClasses=classnames_default()("builder-item",{active:isActive});return Object(jsx_runtime.jsxs)("div",{className:itemClasses,children:[Object(jsx_runtime.jsx)(build_module_icon.a,{className:"handle",icon:drag_handle.a,size:15}),Object(jsx_runtime.jsx)("span",{className:"name",children:name}),Object(jsx_runtime.jsxs)("div",{className:"actions",children:[Object(jsx_runtime.jsx)(build_module_button.a,{icon:library_cog,iconSize:18,className:"settings",onClick:isBlockWidget?function focusItemWidget(){var newSection=section.replace("neve_","");window.wp.customize.section(newSection).focus()}:focusItemSection,label:Object(build_module.a)("Item Settings","neve"),showTooltip:!1}),isBlockWidget&&Object(jsx_runtime.jsx)(build_module_button.a,{icon:library_settings,iconSize:18,className:"settings",onClick:focusItemSection,label:Object(build_module.a)("Widget Settings","neve"),showTooltip:!1}),Object(jsx_runtime.jsx)(build_module_button.a,{iconSize:18,icon:close_small,className:"remove",onClick:function remove(){removeItem(row,slot,index),itemSection.expanded(!1),updateSidebarItems()},label:Object(build_module.a)("Remove Item","neve"),showTooltip:!1})]})]})};BuilderItem_BuilderItem.displayName="BuilderItem";var components_BuilderItem=BuilderItem_BuilderItem,popover=__webpack_require__(340),library_plus=Object(react.createElement)(svg.b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(react.createElement)(svg.a,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"})),library_search=Object(react.createElement)(svg.b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(react.createElement)(svg.a,{d:"M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"})),library_close=__webpack_require__(1567);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Slot_Slot=function Slot(_ref){var items=_ref.items,slotId=_ref.slotId,rowId=_ref.rowId,className=_ref.className,_useContext=Object(react.useContext)(BuilderContext.a),currentSection=_useContext.currentSection,builder=_useContext.builder,actions=_useContext.actions,dragging=_useContext.dragging,sidebarItems=_useContext.sidebarItems,updateLayout=actions.updateLayout,onDragStart=actions.onDragStart,updateSidebarItems=actions.updateSidebarItems,_useState2=_slicedToArray(Object(react.useState)(!1),2),popupOpen=_useState2[0],setPopupOpen=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(""),2),searchQuery=_useState4[0],setSearchQuery=_useState4[1],slotClasses=classnames_default()("droppable-wrap",slotId,className,{"has-popover":popupOpen,overflowed:items.length>=3&&"sidebar"!==rowId}),allItems=window.NeveReactCustomize.HFG[builder].items;return Object(jsx_runtime.jsxs)("div",{className:slotClasses,children:[Object(jsx_runtime.jsx)(dist.ReactSortable,{animation:60,className:"droppable",onStart:onDragStart,group:builder,list:items,setList:function setList(newState){var nextState=newState.map((function(item){return{id:item.id}}));updateLayout(rowId,slotId,nextState)},children:items&&items.length>0&&items.map((function(item,index){return Object(jsx_runtime.jsx)(components_BuilderItem,{row:rowId,slot:slotId,index:index,componentId:item.id,currentSection:currentSection},index)}))}),!dragging&&Object(jsx_runtime.jsx)(build_module_button.a,{className:"open-popover",isPrimary:!0,icon:library_plus,onClick:function onClick(){setPopupOpen(!popupOpen)}}),popupOpen&&Object(jsx_runtime.jsxs)(popover.a,{position:"top center",noArrow:!1,className:"items-popover",onFocusOutside:function onFocusOutside(){setPopupOpen(!1)},children:[Object(jsx_runtime.jsxs)("div",{className:"popover-header",children:[Object(jsx_runtime.jsx)(build_module_icon.a,{icon:library_search}),Object(jsx_runtime.jsx)("input",{onChange:function runSearch(e){setSearchQuery(e.target.value.toLowerCase())},disabled:sidebarItems.length<1,type:"search",placeholder:Object(build_module.a)("Search for a component…","neve")}),Object(jsx_runtime.jsx)(build_module_button.a,{isLink:!0,icon:library_close.a,onClick:function onClick(){setPopupOpen(!1)}})]}),Object(jsx_runtime.jsxs)("div",{className:"items-popover-content",children:[sidebarItems.length<1&&Object(jsx_runtime.jsx)("div",{className:"no-components",children:Object(jsx_runtime.jsx)("span",{children:"All available components are used inside the builder"})}),sidebarItems.length>0&&Object(jsx_runtime.jsx)("div",{className:"items-popover-list",children:sidebarItems.filter((function(item){return allItems[item.id].name.toLowerCase().indexOf(searchQuery)>-1||item.id.toString().indexOf(searchQuery)>-1})).map((function(item,index){var id=item.id;return id?Object(jsx_runtime.jsx)(build_module_button.a,{className:"popover-item",icon:allItems[id].icon,onClick:function onClick(){!function addItemToSlot(itemId){var itemSection=window.NeveReactCustomize.HFG[builder].items[itemId].section;window.wp.customize.section(itemSection).focus();var nextItems=_toConsumableArray(items);nextItems.push({id:itemId}),updateLayout(rowId,slotId,nextItems),setPopupOpen(!1),updateSidebarItems()}(id.toString())},children:Object(jsx_runtime.jsx)("span",{className:"name",children:allItems[id].name})},"".concat(id,"-").concat(index)):null}))})]})]})]})};Slot_Slot.displayName="Slot";var components_Slot=Slot_Slot;function Row_slicedToArray(arr,i){return function Row_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Row_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function Row_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Row_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Row_arrayLikeToArray(o,minLen)}(arr,i)||function Row_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Row_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Row_Row=function Row(_ref){var items=_ref.items,rowId=_ref.rowId,_useContext=Object(react.useContext)(BuilderContext.a),actions=_useContext.actions,dragging=_useContext.dragging,builder=_useContext.builder,hasColumns=_useContext.hasColumns,previewSidebar=_useContext.previewSidebar,updateLayout=actions.updateLayout,togglePreviewSidebar=actions.togglePreviewSidebar,slots=["left","c-left","center","c-right","right"],section="hfg_".concat(builder,"_layout_").concat(rowId),columnsSetting="".concat(section,"_columns_number"),columnsLayoutSetting="".concat(section,"_columns_layout"),_useState2=Row_slicedToArray(Object(react.useState)(0),2),columns=_useState2[0],setColumns=_useState2[1],_useState4=Row_slicedToArray(Object(react.useState)("equal"),2),colLayout=_useState4[0],setColLayout=_useState4[1],_useState6=Row_slicedToArray(Object(react.useState)(!1),2),currentRow=_useState6[0],setCurrentRow=_useState6[1],focusRowSection=function focusRowSection(){"sidebar"===rowId&&toggleThemeSidebar(!0),window.wp.customize.section(section).focus()};Object(react.useEffect)((function(){bindRowSettingsButton(),hasColumns&&bindColumnsSync()}),[]);var bindRowSettingsButton=function bindRowSettingsButton(){window.wp.customize.state("expandedSection").bind((function(expandedSection){if(!expandedSection||expandedSection.id!==section)return setCurrentRow(!1),!1;expandedSection.id===section&&setCurrentRow(!0)}))},bindColumnsSync=function bindColumnsSync(){var colNumber=window.wp.customize.control(columnsSetting).setting.get();setColumns(parseInt(colNumber)),setColLayout(window.wp.customize.control(columnsLayoutSetting).setting.get());window.wp.customize.control(columnsSetting,(function(control){control.setting.bind((function(nextValue){!function syncColNumber(nextValue){var parsedColNumber=parseInt(nextValue);slots.forEach((function(slot,index){index+1>parsedColNumber&&updateLayout(rowId,slot,[])})),setColumns(parsedColNumber)}(nextValue)}))})),window.wp.customize.control(columnsLayoutSetting,(function(control){control.setting.bind((function(nextValue){setColLayout(nextValue)}))}))};Object(react.useEffect)((function(){"sidebar"===rowId&&(window.wp.customize.previewer.bind("neve-toggle-navbar",(function(e){var status=e.status;togglePreviewSidebar(status)})),window.wp.customize.previewer.bind("ready",(function(){togglePreviewSidebar(!1)})))}),[]);var toggleThemeSidebar=function toggleThemeSidebar(status){window.wp.customize.previewer.send(status?"header_sidebar_open":"header_sidebar_close"),togglePreviewSidebar(status)};if("sidebar"===rowId){var hasItems=items&&items.length>0,rowClasses=classnames_default()("row",rowId,{"has-items":hasItems});return Object(jsx_runtime.jsxs)("div",{className:rowClasses,children:[Object(jsx_runtime.jsxs)("div",{className:"sidebar-actions",children:[Object(jsx_runtime.jsx)(build_module_button.a,{icon:library_cog,iconSize:18,className:"row-settings",label:Object(build_module.a)("Row Setting","neve"),onClick:focusRowSection,isPrimary:currentRow}),hasItems&&Object(jsx_runtime.jsx)(build_module_button.a,{onClick:function onClick(){toggleThemeSidebar(!previewSidebar)},icon:previewSidebar?"hidden":"visibility",className:"row-settings",isPrimary:previewSidebar,label:Object(build_module.a)("Toggle Sidebar","neve")})]}),Object(jsx_runtime.jsx)("div",{className:"row-inner",children:Object(jsx_runtime.jsx)(components_Slot,{slotId:rowId,rowId:rowId,items:items})})]})}var centerItemsClass=items.center&&items.center.length>0||hasColumns?"has-center":"no-center",centerWrapClass=classnames_default()("slots-wrap","slots-center-wrap",{expanded:dragging});return Object(jsx_runtime.jsxs)("div",{className:"row ".concat(rowId," ").concat(centerItemsClass),children:[Object(jsx_runtime.jsx)(build_module_button.a,{icon:library_cog,iconSize:18,className:"row-settings",onClick:focusRowSection,isPrimary:currentRow}),Object(jsx_runtime.jsxs)("div",{className:"inner-row",children:[!hasColumns&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("div",{className:"slots-wrap slots-left-wrap",children:["left","c-left"].map((function(slotId,index){return Object(jsx_runtime.jsx)(components_Slot,{rowId:rowId,slotId:slotId,items:items[slotId]||[]},index)}))}),Object(jsx_runtime.jsx)("div",{className:centerWrapClass,children:Object(jsx_runtime.jsx)(components_Slot,{rowId:rowId,slotId:"center",items:items.center||[]})}),Object(jsx_runtime.jsx)("div",{className:"slots-wrap slots-right-wrap",children:["c-right","right"].map((function(slotId,index){return Object(jsx_runtime.jsx)(components_Slot,{rowId:rowId,slotId:slotId,items:items[slotId]||[]},index)}))})]}),hasColumns&&Object(jsx_runtime.jsx)("div",{className:"slots-wrap column-slots-wrap col-".concat(columns," ").concat(colLayout),children:slots.map((function(slotId,index){var slotClasses=classnames_default()({hide:index>=columns,last:index===columns-1,single:0===index&&1===columns});return Object(jsx_runtime.jsx)(components_Slot,{rowId:rowId,slotId:slotId,items:items[slotId]||[],className:slotClasses},index)}))})]})]})};Row_Row.displayName="Row";var indoc,offset,output,stack,components_Row=Row_Row;function arrayLikeToArray_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function unsupportedIterableToArray_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return arrayLikeToArray_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?arrayLikeToArray_arrayLikeToArray(o,minLen):void 0}}function slicedToArray_slicedToArray(arr,i){return function arrayWithHoles_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function iterableToArrayLimit_iterableToArrayLimit(arr,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||unsupportedIterableToArray_unsupportedIterableToArray(arr,i)||function nonIterableRest_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function toConsumableArray_toConsumableArray(arr){return function arrayWithoutHoles_arrayWithoutHoles(arr){if(Array.isArray(arr))return arrayLikeToArray_arrayLikeToArray(arr)}(arr)||function iterableToArray_iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||unsupportedIterableToArray_unsupportedIterableToArray(arr)||function nonIterableSpread_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var tokenizer=/<(\/)?(\w+)\s*(\/)?>/g;function createFrame(element,tokenStart,tokenLength,prevOffset,leadingTextStart){return{element:element,tokenStart:tokenStart,tokenLength:tokenLength,prevOffset:prevOffset,leadingTextStart:leadingTextStart,children:[]}}var create_interpolate_element_isValidConversionMap=function isValidConversionMap(conversionMap){var isObject="object"===_typeof(conversionMap),values=isObject&&Object.values(conversionMap);return isObject&&values.length&&values.every((function(element){return Object(react.isValidElement)(element)}))};function proceed(conversionMap){var next=function nextToken(){var matches=tokenizer.exec(indoc);if(null===matches)return["no-more-tokens"];var startedAt=matches.index,_matches=slicedToArray_slicedToArray(matches,4),match=_matches[0],isClosing=_matches[1],name=_matches[2],isSelfClosed=_matches[3],length=match.length;if(isSelfClosed)return["self-closed",name,startedAt,length];if(isClosing)return["closer",name,startedAt,length];return["opener",name,startedAt,length]}(),_next=slicedToArray_slicedToArray(next,4),tokenType=_next[0],name=_next[1],startOffset=_next[2],tokenLength=_next[3],stackDepth=stack.length,leadingTextStart=startOffset>offset?offset:null;if(!conversionMap[name])return addText(),!1;switch(tokenType){case"no-more-tokens":if(0!==stackDepth){var _stack$pop=stack.pop(),stackLeadingText=_stack$pop.leadingTextStart,tokenStart=_stack$pop.tokenStart;output.push(indoc.substr(stackLeadingText,tokenStart))}return addText(),!1;case"self-closed":return 0===stackDepth?(null!==leadingTextStart&&output.push(indoc.substr(leadingTextStart,startOffset-leadingTextStart)),output.push(conversionMap[name]),offset=startOffset+tokenLength,!0):(addChild(createFrame(conversionMap[name],startOffset,tokenLength)),offset=startOffset+tokenLength,!0);case"opener":return stack.push(createFrame(conversionMap[name],startOffset,tokenLength,startOffset+tokenLength,leadingTextStart)),offset=startOffset+tokenLength,!0;case"closer":if(1===stackDepth)return function closeOuterElement(endOffset){var _stack$pop2=stack.pop(),element=_stack$pop2.element,leadingTextStart=_stack$pop2.leadingTextStart,prevOffset=_stack$pop2.prevOffset,tokenStart=_stack$pop2.tokenStart,children=_stack$pop2.children,text=endOffset?indoc.substr(prevOffset,endOffset-prevOffset):indoc.substr(prevOffset);text&&children.push(text);null!==leadingTextStart&&output.push(indoc.substr(leadingTextStart,tokenStart-leadingTextStart));output.push(react.cloneElement.apply(void 0,[element,null].concat(toConsumableArray_toConsumableArray(children))))}(startOffset),offset=startOffset+tokenLength,!0;var stackTop=stack.pop(),text=indoc.substr(stackTop.prevOffset,startOffset-stackTop.prevOffset);stackTop.children.push(text),stackTop.prevOffset=startOffset+tokenLength;var frame=createFrame(stackTop.element,stackTop.tokenStart,stackTop.tokenLength,startOffset+tokenLength);return frame.children=stackTop.children,addChild(frame),offset=startOffset+tokenLength,!0;default:return addText(),!1}}function addText(){var length=indoc.length-offset;0!==length&&output.push(indoc.substr(offset,length))}function addChild(frame){var element=frame.element,tokenStart=frame.tokenStart,tokenLength=frame.tokenLength,prevOffset=frame.prevOffset,children=frame.children,parent=stack[stack.length-1],text=indoc.substr(parent.prevOffset,tokenStart-parent.prevOffset);text&&parent.children.push(text),parent.children.push(react.cloneElement.apply(void 0,[element,null].concat(toConsumableArray_toConsumableArray(children)))),parent.prevOffset=prevOffset||tokenStart+tokenLength}var create_interpolate_element=function createInterpolateElement(interpolatedString,conversionMap){if(indoc=interpolatedString,offset=0,output=[],stack=[],tokenizer.lastIndex=0,!create_interpolate_element_isValidConversionMap(conversionMap))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are WPElements");do{}while(proceed(conversionMap));return react.createElement.apply(void 0,[react.Fragment,null].concat(toConsumableArray_toConsumableArray(output)))},modal=__webpack_require__(1590),library_info=Object(react.createElement)(svg.b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(react.createElement)(svg.a,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}));function BuilderHeaderNotification_slicedToArray(arr,i){return function BuilderHeaderNotification_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function BuilderHeaderNotification_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function BuilderHeaderNotification_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return BuilderHeaderNotification_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return BuilderHeaderNotification_arrayLikeToArray(o,minLen)}(arr,i)||function BuilderHeaderNotification_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function BuilderHeaderNotification_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var BuilderHeaderNotification_BuilderHeaderNotification=function BuilderHeaderNotification(_ref){var builder=_ref.builder,builderName=_ref.builderName,_useState2=BuilderHeaderNotification_slicedToArray(Object(react.useState)(!1),2),modalVisible=_useState2[0],setModalVisible=_useState2[1],_useState4=BuilderHeaderNotification_slicedToArray(Object(react.useState)(null),2),currentHeaderName=_useState4[0],setCurrentHeaderName=_useState4[1],toggleModal=function toggleModal(){setModalVisible(!modalVisible)},focusConditionalSelector=function focusConditionalSelector(){window.wp.customize.control("neve_header_conditional_selector").focus()};Object(react.useEffect)((function(){document.addEventListener("nv-change-conditional-header",(function(e){setCurrentHeaderName(e.detail)}))}),[]);var _window$NeveReactCust=window.NeveReactCustomize,dashUpdatesMessage=_window$NeveReactCust.dashUpdatesMessage,instructionalVid=_window$NeveReactCust.instructionalVid,incompatiblePro=_window$NeveReactCust.hideConditionalHeaderSelector;Object(react.useEffect)((function(){if(incompatiblePro&&"header"===builder&&!window.wp.customize.control("neve_header_conditional_selector")){var transparentControl=window.wp.customize.control("neve_transparent_header");if(transparentControl){var sectionToNotify=transparentControl.params.section;window.wp.customize.section(sectionToNotify).notifications.add(new window.wp.customize.Notification("neve-incompatible-conditional",{type:"warning",message:dashUpdatesMessage}))}}}));return Object(jsx_runtime.jsxs)("span",{className:"builder-instructions",children:[function renderInstruction(){return"header"===builder&&currentHeaderName?Object(jsx_runtime.jsx)("p",{children:void 0!==create_interpolate_element&&create_interpolate_element(Object(build_module.c)(Object(build_module.a)("You are customizing the <Button>%1$s</Button> Header","neve"),currentHeaderName||Object(build_module.a)("")),{Button:Object(jsx_runtime.jsx)(build_module_button.a,{isLink:!0,onClick:focusConditionalSelector,children:"#dumptext"})})}):Object(jsx_runtime.jsxs)("p",{children:[Object(jsx_runtime.jsx)("strong",{children:Object(build_module.c)(Object(build_module.a)("%1$s Builder","neve"),builderName)+":"}),Object(build_module.a)("Click on any empty space to add components, or existing components to adjust settings.","neve")]})}(),Object(jsx_runtime.jsx)(build_module_button.a,{style:{padding:0},isLink:!0,icon:library_info,iconSize:20,onClick:toggleModal}),modalVisible&&Object(jsx_runtime.jsx)(modal.a,{title:"",className:"neve-ui-modal-wrap",onRequestClose:toggleModal,shouldCloseOnClickOutside:!0,isDismissible:!0,children:Object(jsx_runtime.jsx)("video",{style:{margin:"0 auto",display:"block"},autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:Object(jsx_runtime.jsx)("source",{src:instructionalVid,type:"video/mp4"})})})]})};BuilderHeaderNotification_BuilderHeaderNotification.displayName="BuilderHeaderNotification";var components_BuilderHeaderNotification=BuilderHeaderNotification_BuilderHeaderNotification,ResponsiveSwitches_ResponsiveSwitches=function ResponsiveSwitches(_ref){var device=_ref.device,_useContext=Object(react.useContext)(BuilderContext.a),actions=_useContext.actions,builder=_useContext.builder,setDevice=actions.setDevice,buttons=[{title:Object(build_module.a)("Desktop","neve"),icon:"desktop",slug:"desktop"},{title:Object(build_module.a)("Mobile","neve"),icon:"smartphone",slug:"mobile"}],_window$NeveReactCust=window.NeveReactCustomize.HFG[builder],devices=_window$NeveReactCust.devices,builderName=_window$NeveReactCust.title,shownButtons=buttons.filter((function(_ref2){var slug=_ref2.slug;return Object.keys(devices).includes(slug)}));return Object(jsx_runtime.jsxs)("div",{className:"builder-header",children:[Object(jsx_runtime.jsx)("div",{className:"responsive-switches",children:shownButtons.map((function(button,index){var title=button.title,icon=button.icon,slug=button.slug,buttonClasses=classnames_default()("device-switcher",{active:slug===device});return Object(jsx_runtime.jsx)(build_module_button.a,{className:buttonClasses,icon:icon,onClick:function onClick(){return function switchDevice(nextDevice){if(device===nextDevice)return!1;window.wp.customize.previewedDevice(nextDevice),setDevice(nextDevice)}(slug)},children:title},index)}))}),Object(jsx_runtime.jsx)(components_BuilderHeaderNotification,{builder:builder,builderName:builderName})]})};ResponsiveSwitches_ResponsiveSwitches.displayName="ResponsiveSwitches";var components_ResponsiveSwitches=ResponsiveSwitches_ResponsiveSwitches,Builder_Builder=function Builder(_ref){var value=_ref.value,hidden=_ref.hidden,portalMount=_ref.portalMount,_useContext=Object(react.useContext)(BuilderContext.a),device=_useContext.device,builder=_useContext.builder,hasColumns=_useContext.hasColumns,rows=window.NeveReactCustomize.HFG[builder].rows,items=Object.assign({},value[device]),preview=document.querySelector("#customize-preview");Object(react.useEffect)((function(){return function(){null!==preview&&(preview.style.maxHeight="",preview.style.marginTop="")}}),[]);var adaptPreviewHeight=function adaptPreviewHeight(){var scroll=arguments.length>0&&void 0!==arguments[0]&&arguments[0],builderNode=(null==portalMount?void 0:portalMount.querySelector(".neve-builder"))||null;if(null!==builderNode&&null!==preview){if(hidden)return preview.style.maxHeight="",void(preview.style.marginTop="");var height=builderNode.offsetHeight;preview.style.maxHeight="calc(100vh - ".concat(height,"px)"),preview.style.marginTop="0",scroll&&("footer"!==builder?setTimeout((function(){window.wp.customize.previewer.send("scroll",0)}),150):setTimeout((function(){window.wp.customize.previewer.send("scroll",1e8)}),150))}};Object(react.useEffect)((function(){setTimeout((function(){adaptPreviewHeight(!0)}),100)}),[hidden]),Object(react.useEffect)((function(){window.wp.customize.previewer.bind("selective-refresh-setting-validities",(function(){adaptPreviewHeight()}))}),[]);var builderClasses=classnames_default()("neve-builder",{hide:hidden,"columns-builder":hasColumns});return Object(jsx_runtime.jsxs)("div",{className:builderClasses,children:[Object(jsx_runtime.jsx)(components_ResponsiveSwitches,{device:device}),Object(jsx_runtime.jsxs)("div",{className:"rows-wrapper",children:[rows.sidebar&&"desktop"!==device&&Object(jsx_runtime.jsx)("div",{className:"vertical-rows",children:Object(jsx_runtime.jsx)(components_Row,{rowId:"sidebar",items:items.sidebar})}),Object(jsx_runtime.jsx)("div",{className:"horizontal-rows",children:Object.keys(rows).map((function(rowId,rowIndex){return"sidebar"===rowId?null:Object(jsx_runtime.jsx)(components_Row,{rowId:rowId,items:items[rowId]||[]},rowIndex)}))})]})]})};Builder_Builder.displayName="Builder";__webpack_exports__.default=Builder_Builder}}]);
//# sourceMappingURL=builder.7ad511a0794d9d6cfe62.bundle.js.map