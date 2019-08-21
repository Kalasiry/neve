!function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n,r,o,i,a,c="object",u=function(t){return t&&t.Math==Math&&t},l=u(typeof globalThis==c&&globalThis)||u(typeof window==c&&window)||u(typeof self==c&&self)||u(typeof t==c&&t)||Function("return this")(),f=function(t){try{return!!t()}catch(t){return!0}},s=!f(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),d={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,g={f:p&&!d.call({1:2},1)?function(t){var e=p(this,t);return!!e&&e.enumerable}:d},h=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},b={}.toString,m=function(t){return b.call(t).slice(8,-1)},v="".split,y=f(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==m(t)?v.call(t,""):Object(t)}:Object,w=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},S=function(t){return y(w(t))},x=function(t){return"object"==typeof t?null!==t:"function"==typeof t},O=function(t,e){if(!x(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!x(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!x(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!x(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},k={}.hasOwnProperty,E=function(t,e){return k.call(t,e)},F=l.document,L=x(F)&&x(F.createElement),j=!s&&!f(function(){return 7!=Object.defineProperty((t="div",L?F.createElement(t):{}),"a",{get:function(){return 7}}).a;var t}),N=Object.getOwnPropertyDescriptor,P={f:s?N:function(t,e){if(t=S(t),e=O(e,!0),j)try{return N(t,e)}catch(t){}if(E(t,e))return h(!g.f.call(t,e),t[e])}},M=function(t){if(!x(t))throw TypeError(String(t)+" is not an object");return t},T=Object.defineProperty,z={f:s?T:function(t,e,n){if(M(t),e=O(e,!0),M(n),j)try{return T(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},C=s?function(t,e,n){return z.f(t,e,h(1,n))}:function(t,e,n){return t[e]=n,t},G=function(e,n){try{C(l,e,n)}catch(t){l[e]=n}return n},H=e(function(t){var e="__core-js_shared__",n=l[e]||G(e,{});(t.exports=function(t,e){return n[t]||(n[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),I=H("native-function-to-string",Function.toString),R=l.WeakMap,q="function"==typeof R&&/native code/.test(I.call(R)),A=0,D=Math.random(),V=H("keys"),W={},U=l.WeakMap;if(q){var J=new U,K=J.get,Y=J.has,B=J.set;n=function(t,e){return B.call(J,t,e),e},r=function(t){return K.call(J,t)||{}},o=function(t){return Y.call(J,t)}}else{var Q=V[i="state"]||(V[i]=(a=i,"Symbol("+String(void 0===a?"":a)+")_"+(++A+D).toString(36)));W[Q]=!0,n=function(t,e){return C(t,Q,e),e},r=function(t){return E(t,Q)?t[Q]:{}},o=function(t){return E(t,Q)}}var X={set:n,get:r,has:o,enforce:function(t){return o(t)?r(t):n(t,{})},getterFor:function(n){return function(t){var e;if(!x(t)||(e=r(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return e}}},Z=e(function(t){var e=X.get,c=X.enforce,u=String(I).split("toString");H("inspectSource",function(t){return I.call(t)}),(t.exports=function(t,e,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof e||E(n,"name")||C(n,"name",e),c(n).source=u.join("string"==typeof e?e:"")),t!==l?(o?!a&&t[e]&&(i=!0):delete t[e],i?t[e]=n:C(t,e,n)):i?t[e]=n:G(e,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&e(this).source||I.call(this)})}),$=l,tt=function(t){return"function"==typeof t?t:void 0},et=Math.ceil,nt=Math.floor,rt=function(t){return isNaN(t=+t)?0:(0<t?nt:et)(t)},ot=Math.min,it=Math.max,at=Math.min,ct=function(l){return function(t,e,n){var r,o,i,a,c=S(t),u=0<(r=c.length)?ot(rt(r),9007199254740991):0,f=(o=u,(i=rt(n))<0?it(i+o,0):at(i,o));if(l&&e!=e){for(;f<u;)if((a=c[f++])!=a)return!0}else for(;f<u;f++)if((l||f in c)&&c[f]===e)return l||f||0;return!l&&-1}},ut={includes:ct(!0),indexOf:ct(!1)}.indexOf,ft=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),lt={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=S(t),o=0,i=[];for(n in r)!E(W,n)&&E(r,n)&&i.push(n);for(;e.length>o;)E(r,n=e[o++])&&(~ut(i,n)||i.push(n));return i}(t,ft)}},st={f:Object.getOwnPropertySymbols},dt=function(t,e){return arguments.length<2?tt($[t])||tt(l[t]):$[t]&&$[t][e]||l[t]&&l[t][e]}("Reflect","ownKeys")||function(t){var e=lt.f(M(t)),n=st.f;return n?e.concat(n(t)):e},pt=function(t,e){for(var n=dt(e),r=z.f,o=P.f,i=0;i<n.length;i++){var a=n[i];E(t,a)||r(t,a,o(e,a))}},gt=/#|\.prototype\./,ht=function(t,e){var n=mt[bt(t)];return n==yt||n!=vt&&("function"==typeof e?f(e):!!e)},bt=ht.normalize=function(t){return String(t).replace(gt,".").toLowerCase()},mt=ht.data={},vt=ht.NATIVE="N",yt=ht.POLYFILL="P",wt=ht,St=P.f,xt=function(t,e){var n,r,o,i,a,c=t.target,u=t.global,f=t.stat;if(n=u?l:f?l[c]||G(c,{}):(l[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=St(n,r))&&a.value:n[r],!wt(u?r:c+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;pt(i,o)}(t.sham||o&&o.sham)&&C(i,"sham",!0),Z(n,r,i,t)}},_t="".repeat||function(t){var e=String(w(this)),n="",r=rt(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;0<r;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n},Ot=1..toFixed,kt=Math.floor,Et=function(t,e,n){return 0===e?n:e%2==1?Et(t,e-1,n*t):Et(t*t,e/2,n)};xt({target:"Number",proto:!0,forced:Ot&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!f(function(){Ot.call({})})},{toFixed:function(t){var e,n,r,o,i=function(t){if("number"!=typeof t&&"Number"!=m(t))throw TypeError("Incorrect invocation");return+t}(this),a=rt(t),c=[0,0,0,0,0,0],u="",f="0",l=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*c[n],c[n]=r%1e7,r=kt(r/1e7)},s=function(t){for(var e=6,n=0;0<=--e;)n+=c[e],c[e]=kt(n/t),n=n%t*1e7},d=function(){for(var t=6,e="";0<=--t;)if(""!==e||0===t||0!==c[t]){var n=String(c[t]);e=""===e?n:e+_t.call("0",7-n.length)+n}return e};if(a<0||20<a)throw RangeError("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||1e21<=i)return String(i);if(i<0&&(u="-",i=-i),1e-21<i)if(n=(e=function(t){for(var e=0,n=t;4096<=n;)e+=12,n/=4096;for(;2<=n;)e+=1,n/=2;return e}(i*Et(2,69,1))-69)<0?i*Et(2,-e,1):i/Et(2,e,1),n*=4503599627370496,0<(e=52-e)){for(l(0,n),r=a;7<=r;)l(1e7,0),r-=7;for(l(Et(10,r,1),0),r=e-1;23<=r;)s(1<<23),r-=23;s(1<<r),l(1,1),s(2),f=d()}else l(0,n),l(1<<-e,0),f=d()+_t.call("0",a);return f=0<a?u+((o=f.length)<=a?"0."+_t.call("0",a-o)+f:f.slice(0,o-a)+"."+f.slice(o-a)):u+f}});var Ft,Lt=/"/g;xt({target:"String",proto:!0,forced:(Ft="fixed",f(function(){var t=""[Ft]('"');return t!==t.toLowerCase()||3<t.split('"').length}))},{fixed:function(){return t="tt",n=e="",r=String(w(this)),o="<"+t,""!==e&&(o+=" "+e+'="'+String(n).replace(Lt,"&quot;")+'"'),o+">"+r+"</"+t+">";var t,e,n,r,o}});function jt(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n=document.querySelector("#"+t+"-css-style");n||((n=document.createElement("style")).setAttribute("id",t+"-css-style"),n.setAttribute("type","text/css"),document.querySelector("head").appendChild(n)),n.innerHTML=e}window.addEventListener("load",function(){document.addEventListener("header_builder_panel_changed",function(t){return"hfg_header_layout_partial"===t.detail.partial_id?(window.HFG.init(),console.log("Reinitialize HFG with sidebar."),!1):"nav-icon_partial"===t.detail.partial_id?(window.HFG.init(!0),console.log("Reinitialize HFG with skip."),!1):void 0}),document.addEventListener("customize_control_sidebar",function(t){"open"===t.detail&&window.HFG.toggleMenuSidebar(!0),"close"===t.detail&&window.HFG.toggleMenuSidebar(!1)}.bind(this)),document.addEventListener("customize_section_opened",function(t){"header_sidebar"===t.detail&&window.HFG.toggleMenuSidebar(!0)}.bind(this)),_.each(neveHFGPreview,function(t,a){_.each(t,function(o,i){wp.customize(i,function(t){t.bind(function(t){var e="";switch(a){case"neve_background_control":if("color"===t.type)return e+="body "+o.selector+"{background-image: none !important;}",e+="body "+o.selector+"{background-color: "+t.colorValue+" !important; }",e+=o.selector+":before{ content: none !important; }",jt(i,e),!1;e+=o.selector+"{",e+=t.imageUrl?'background-image: url("'+t.imageUrl+'") !important;':"background-image: none !important;",e+=!0===t.fixed?"background-attachment: fixed !important;":"background-attachment: initial !important;",e+="background-position:"+(100*t.focusPoint.x).toFixed(2)+"% "+(100*t.focusPoint.y).toFixed(2)+"% !important;",e+="background-size: cover !important;",e+='position: absolute; top: 0; bottom: 0; width: 100%; content:"";',e+="}",e+=o.selector+':before { content: "";position: absolute; top: 0; bottom: 0; width: 100%;background-color: '+t.overlayColorValue+" !important;opacity: "+t.overlayOpacity/100+"!important;}",e+=o.selector+"{ background-color: transparent !important; }",jt(i,e);break;case"\\Neve\\Customizer\\Controls\\Radio_Image":var n=document.querySelectorAll(o.selector);!function(t,e){var n=e.split(" ");if(t instanceof NodeList)for(var r=0;r<t.length;r++)for(var o=0;o<n.length;o++)t[r].classList.remove(n[o]);else if(t instanceof Node||t instanceof Element)for(var i=0;i<n.length;i++)t.classList.remove(n[i])}(n,"dark-mode light-mode"),function(t,e){if(t instanceof NodeList)for(var n=0;n<t.length;n++)t[n].classList.add(e);else(t instanceof Node||t instanceof Element)&&t.classList.add(e)}(n,t);break;case"\\Neve\\Customizer\\Controls\\Range":var r=JSON.parse(t);0<r.mobile&&(e+="@media (max-width: 576px) { body "+o.selector+"{ "+o.additional.prop+":"+r.mobile+o.additional.unit+";}}"),0<r.tablet&&(e+="@media (min-width: 576px) { body "+o.selector+"{ "+o.additional.prop+":"+r.tablet+o.additional.unit+";}}"),0<r.desktop&&(e+="@media (min-width: 961px) { body "+o.selector+"{ "+o.additional.prop+":"+r.desktop+o.additional.unit+";}}"),jt(i,e)}})})})})})}();
