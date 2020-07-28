!function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}function n(t){return t&&t.Math==Math&&t}function f(t){try{return!!t()}catch(t){return!0}}function o(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}function v(t){return m.call(t).slice(8,-1)}function s(t){if(null==t)throw TypeError("Can't call method on "+t);return t}function u(t){return w(s(t))}function h(t){return"object"==typeof t?null!==t:"function"==typeof t}function i(t,e){if(!h(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!h(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!h(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!h(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}function l(t,e){return y.call(t,e)}function O(t){if(!h(t))throw TypeError(String(t)+" is not an object");return t}function d(e,n){try{k(p,e,n)}catch(t){p[e]=n}return n}var p=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),a=!f(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),r={}.propertyIsEnumerable,c=Object.getOwnPropertyDescriptor,g={f:c&&!r.call({1:2},1)?function(t){var e=c(this,t);return!!e&&e.enumerable}:r},m={}.toString,b="".split,w=f(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==v(t)?b.call(t,""):Object(t)}:Object,y={}.hasOwnProperty,x=p.document,S=h(x)&&h(x.createElement),C=!a&&!f(function(){return 7!=Object.defineProperty((t="div",S?x.createElement(t):{}),"a",{get:function(){return 7}}).a;var t}),E=Object.getOwnPropertyDescriptor,R={f:a?E:function(t,e){if(t=u(t),e=i(e,!0),C)try{return E(t,e)}catch(t){}if(l(t,e))return o(!g.f.call(t,e),t[e])}},P=Object.defineProperty,j={f:a?P:function(t,e,n){if(O(t),e=i(e,!0),O(n),C)try{return P(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},k=a?function(t,e,n){return j.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t},A="__core-js_shared__",z=p[A]||d(A,{}),T=Function.toString;"function"!=typeof z.inspectSource&&(z.inspectSource=function(t){return T.call(t)});function I(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++q+G).toString(36)}var L,N,U,F,M=z.inspectSource,W=p.WeakMap,$="function"==typeof W&&/native code/.test(M(W)),H=e(function(t){(t.exports=function(t,e){return z[t]||(z[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})}),q=0,G=Math.random(),D=H("keys"),Q={},B=p.WeakMap;if($){var K=new B,V=K.get,Y=K.has,J=K.set;L=function(t,e){return J.call(K,t,e),e},N=function(t){return V.call(K,t)||{}},U=function(t){return Y.call(K,t)}}else{var X=D[F="state"]||(D[F]=I(F));Q[X]=!0,L=function(t,e){return k(t,X,e),e},N=function(t){return l(t,X)?t[X]:{}},U=function(t){return l(t,X)}}function Z(t){return"function"==typeof t?t:void 0}function tt(t,e){return arguments.length<2?Z(gt[t])||Z(p[t]):gt[t]&&gt[t][e]||p[t]&&p[t][e]}function et(t){return isNaN(t=+t)?0:(0<t?bt:mt)(t)}function nt(t){return 0<t?yt(et(t),9007199254740991):0}function rt(l){return function(t,e,n){var r,o,i,a=u(t),c=nt(a.length),s=(r=c,(o=et(n))<0?_t(o+r,0):wt(o,r));if(l&&e!=e){for(;s<c;)if((i=a[s++])!=i)return!0}else for(;s<c;s++)if((l||s in a)&&a[s]===e)return l||s||0;return!l&&-1}}function ot(t,e){var n,r=u(t),o=0,i=[];for(n in r)!l(Q,n)&&l(r,n)&&i.push(n);for(;e.length>o;)l(r,n=e[o++])&&(~xt(i,n)||i.push(n));return i}function it(t,e){for(var n=Pt(e),r=j.f,o=R.f,i=0;i<n.length;i++){var a=n[i];l(t,a)||r(t,a,o(e,a))}}function at(t,e){var n=kt[Ot(t)];return n==zt||n!=At&&("function"==typeof e?f(e):!!e)}function ct(t,e){var n,r,o,i,a,c=t.target,s=t.global,l=t.stat;if(n=s?p:l?p[c]||d(c,{}):(p[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=It(n,r))&&a.value:n[r],!Tt(s?r:c+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;it(i,o)}(t.sham||o&&o.sham)&&k(i,"sham",!0),ht(n,r,i,t)}}function st(t){return Object(s(t))}function lt(t,e,n){var r=i(e);r in t?j.f(t,r,o(0,n)):t[r]=n}function ut(t){return l(Ft,t)||(Nt&&l(Mt,t)?Ft[t]=Mt[t]:Ft[t]=Wt("Symbol."+t)),Ft[t]}function ft(t,e){var n;return Lt(t)&&("function"==typeof(n=t.constructor)&&(n===Array||Lt(n.prototype))||h(n)&&null===(n=n[$t]))&&(n=void 0),new(void 0===n?Array:n)(0===e?0:e)}var dt,pt,vt={set:L,get:N,has:U,enforce:function(t){return U(t)?N(t):L(t,{})},getterFor:function(n){return function(t){var e;if(!h(t)||(e=N(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return e}}},ht=e(function(t){var e=vt.get,c=vt.enforce,s=String(String).split("String");(t.exports=function(t,e,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof e||l(n,"name")||k(n,"name",e),c(n).source=s.join("string"==typeof e?e:"")),t!==p?(o?!a&&t[e]&&(i=!0):delete t[e],i?t[e]=n:k(t,e,n)):i?t[e]=n:d(e,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&e(this).source||M(this)})}),gt=p,mt=Math.ceil,bt=Math.floor,yt=Math.min,_t=Math.max,wt=Math.min,xt={includes:rt(!0),indexOf:rt(!1)}.indexOf,St=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ct=St.concat("length","prototype"),Et={f:Object.getOwnPropertyNames||function(t){return ot(t,Ct)}},Rt={f:Object.getOwnPropertySymbols},Pt=tt("Reflect","ownKeys")||function(t){var e=Et.f(O(t)),n=Rt.f;return n?e.concat(n(t)):e},jt=/#|\.prototype\./,Ot=at.normalize=function(t){return String(t).replace(jt,".").toLowerCase()},kt=at.data={},At=at.NATIVE="N",zt=at.POLYFILL="P",Tt=at,It=R.f,Lt=Array.isArray||function(t){return"Array"==v(t)},Nt=!!Object.getOwnPropertySymbols&&!f(function(){return!String(Symbol())}),Ut=Nt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ft=H("wks"),Mt=p.Symbol,Wt=Ut?Mt:Mt&&Mt.withoutSetter||I,$t=ut("species"),Ht=tt("navigator","userAgent")||"",qt=p.process,Gt=qt&&qt.versions,Dt=Gt&&Gt.v8;Dt?pt=(dt=Dt.split("."))[0]+dt[1]:Ht&&(!(dt=Ht.match(/Edge\/(\d+)/))||74<=dt[1])&&(dt=Ht.match(/Chrome\/(\d+)/))&&(pt=dt[1]);function Qt(e){return 51<=Kt||!f(function(){var t=[];return(t.constructor={})[Vt]=function(){return{foo:1}},1!==t[e](Boolean).foo})}function Bt(t){if(h(t)){var e=t[Yt];return void 0!==e?!!e:Lt(t)}}var Kt=pt&&+pt,Vt=ut("species"),Yt=ut("isConcatSpreadable"),Jt=9007199254740991,Xt="Maximum allowed index exceeded",Zt=51<=Kt||!f(function(){var t=[];return t[Yt]=!1,t.concat()[0]!==t}),te=Qt("concat");ct({target:"Array",proto:!0,forced:!Zt||!te},{concat:function(t){var e,n,r,o,i,a=st(this),c=ft(a,0),s=0;for(e=-1,r=arguments.length;e<r;e++)if(Bt(i=-1===e?a:arguments[e])){if(o=nt(i.length),Jt<s+o)throw TypeError(Xt);for(n=0;n<o;n++,s++)n in i&&lt(c,s,i[n])}else{if(Jt<=s)throw TypeError(Xt);lt(c,s++,i)}return c.length=s,c}});var ee,ne,re=[].join,oe=w!=Object,ie=(ee=",",!!(ne=[]["join"])&&f(function(){ne.call(null,ee||function(){throw 1},1)}));ct({target:"Array",proto:!0,forced:oe||!ie},{join:function(t){return re.call(u(this),void 0===t?",":t)}});function ae(r,o,t){if(!function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(r),void 0===o)return r;switch(t){case 0:return function(){return r.call(o)};case 1:return function(t){return r.call(o,t)};case 2:return function(t,e){return r.call(o,t,e)};case 3:return function(t,e,n){return r.call(o,t,e,n)}}return function(){return r.apply(o,arguments)}}function ce(p){var v=1==p,h=2==p,g=3==p,m=4==p,b=6==p,y=5==p||b;return function(t,e,n,r){for(var o,i,a=st(t),c=w(a),s=ae(e,n,3),l=nt(c.length),u=0,f=r||ft,d=v?f(t,l):h?f(t,0):void 0;u<l;u++)if((y||u in c)&&(i=s(o=c[u],u,a),p))if(v)d[u]=i;else if(i)switch(p){case 3:return!0;case 5:return o;case 6:return u;case 2:le.call(d,o)}else if(m)return!1;return b?-1:g||m?m:d}}function se(t){throw t}var le=[].push,ue={forEach:ce(0),map:ce(1),filter:ce(2),some:ce(3),every:ce(4),find:ce(5),findIndex:ce(6)},fe=Object.defineProperty,de={},pe=ue.map,ve=Qt("map"),he=function(t,e){if(l(de,t))return de[t];var n=[][t],r=!!l(e=e||{},"ACCESSORS")&&e.ACCESSORS,o=l(e,0)?e[0]:se,i=l(e,1)?e[1]:void 0;return de[t]=!!n&&!f(function(){if(r&&!a)return 1;var t={length:-1};r?fe(t,1,{enumerable:!0,get:se}):t[1]=1,n.call(t,o,i)})}("map");ct({target:"Array",proto:!0,forced:!ve||!he},{map:function(t,e){return pe(this,t,1<arguments.length?e:void 0)}});var ge="".repeat||function(t){var e=String(s(this)),n="",r=et(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;0<r;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n},me=1..toFixed,be=Math.floor,ye=function(t,e,n){return 0===e?n:e%2==1?ye(t,e-1,n*t):ye(t*t,e/2,n)};ct({target:"Number",proto:!0,forced:me&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!f(function(){me.call({})})},{toFixed:function(t){function e(t,e){for(var n=-1,r=e;++n<6;)r+=t*u[n],u[n]=r%1e7,r=be(r/1e7)}function n(t){for(var e=6,n=0;0<=--e;)n+=u[e],u[e]=be(n/t),n=n%t*1e7}function r(){for(var t=6,e="";0<=--t;)if(""!==e||0===t||0!==u[t]){var n=String(u[t]);e=""===e?n:e+ge.call("0",7-n.length)+n}return e}var o,i,a,c,s=function(t){if("number"!=typeof t&&"Number"!=v(t))throw TypeError("Incorrect invocation");return+t}(this),l=et(t),u=[0,0,0,0,0,0],f="",d="0";if(l<0||20<l)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||1e21<=s)return String(s);if(s<0&&(f="-",s=-s),1e-21<s)if(i=(o=function(t){for(var e=0,n=t;4096<=n;)e+=12,n/=4096;for(;2<=n;)e+=1,n/=2;return e}(s*ye(2,69,1))-69)<0?s*ye(2,-o,1):s/ye(2,o,1),i*=4503599627370496,0<(o=52-o)){for(e(0,i),a=l;7<=a;)e(1e7,0),a-=7;for(e(ye(10,a,1),0),a=o-1;23<=a;)n(1<<23),a-=23;n(1<<a),e(1,1),n(2),d=r()}else e(0,i),e(1<<-o,0),d=r()+ge.call("0",l);return d=0<l?f+((c=d.length)<=l?"0."+ge.call("0",l-c)+d:d.slice(0,c-l)+"."+d.slice(c-l)):f+d}});var _e=Object.keys||function(t){return ot(t,St)};ct({target:"Object",stat:!0,forced:f(function(){_e(1)})},{keys:function(t){return _e(st(t))}});var we={};we[ut("toStringTag")]="z";var xe="[object z]"===String(we),Se=ut("toStringTag"),Ce="Arguments"==v(function(){return arguments}()),Ee=xe?v:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Se))?n:Ce?v(e):"Object"==(r=v(e))&&"function"==typeof e.callee?"Arguments":r},Re=xe?{}.toString:function(){return"[object "+Ee(this)+"]"};xe||ht(Object.prototype,"toString",Re,{unsafe:!0});function Pe(){var t=O(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}var je=Object.setPrototypeOf||("__proto__"in{}?function(){var n,r=!1,t={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(t,[]),r=t instanceof Array}catch(t){}return function(t,e){return O(t),function(t){if(!h(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(e),r?n.call(t,e):t.__proto__=e,t}}():void 0),Oe=ut("match");function ke(t,e){return RegExp(t,e)}var Ae,ze,Te={UNSUPPORTED_Y:f(function(){var t=ke("a","y");return t.lastIndex=2,null!=t.exec("abcd")}),BROKEN_CARET:f(function(){var t=ke("^r","gy");return t.lastIndex=2,null!=t.exec("str")})},Ie=ut("species"),Le=j.f,Ne=Et.f,Ue=vt.set,Fe=ut("match"),Me=p.RegExp,We=Me.prototype,$e=/a/g,He=/a/g,qe=new Me($e)!==$e,Ge=Te.UNSUPPORTED_Y;if(a&&Tt("RegExp",!qe||Ge||f(function(){return He[Fe]=!1,Me($e)!=$e||Me(He)==He||"/a/i"!=Me($e,"i")}))){for(var De=function(t,e){var n,r,o,i=this instanceof De,a=h(n=t)&&(void 0!==(r=n[Oe])?!!r:"RegExp"==v(n)),c=void 0===e;if(!i&&a&&t.constructor===De&&c)return t;qe?a&&!c&&(t=t.source):t instanceof De&&(c&&(e=Pe.call(t)),t=t.source),Ge&&(o=!!e&&-1<e.indexOf("y"))&&(e=e.replace(/y/g,""));var s,l,u,f,d,p=(s=qe?new Me(t,e):Me(t,e),l=i?this:We,u=De,je&&"function"==typeof(f=l.constructor)&&f!==u&&h(d=f.prototype)&&d!==u.prototype&&je(s,d),s);return Ge&&o&&Ue(p,{sticky:o}),p},Qe=function(e){e in De||Le(De,e,{configurable:!0,get:function(){return Me[e]},set:function(t){Me[e]=t}})},Be=Ne(Me),Ke=0;Be.length>Ke;)Qe(Be[Ke++]);(We.constructor=De).prototype=We,ht(p,"RegExp",De)}Ae=tt("RegExp"),ze=j.f,a&&Ae&&!Ae[Ie]&&ze(Ae,Ie,{configurable:!0,get:function(){return this}});var Ve="toString",Ye=RegExp.prototype,Je=Ye[Ve],Xe=f(function(){return"/a/b"!=Je.call({source:"a",flags:"b"})}),Ze=Je.name!=Ve;(Xe||Ze)&&ht(RegExp.prototype,Ve,function(){var t=O(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in Ye)?Pe.call(t):n)},{unsafe:!0});var tn,en,nn=RegExp.prototype.exec,rn=String.prototype.replace,on=nn,an=(tn=/a/,en=/b*/g,nn.call(tn,"a"),nn.call(en,"a"),0!==tn.lastIndex||0!==en.lastIndex),cn=Te.UNSUPPORTED_Y||Te.BROKEN_CARET,sn=void 0!==/()??/.exec("")[1];(an||sn||cn)&&(on=function(t){var e,n,r,o,i=this,a=cn&&i.sticky,c=Pe.call(i),s=i.source,l=0,u=t;return a&&(-1===(c=c.replace("y","")).indexOf("g")&&(c+="g"),u=String(t).slice(i.lastIndex),0<i.lastIndex&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(s="(?: "+s+")",u=" "+u,l++),n=new RegExp("^(?:"+s+")",c)),sn&&(n=new RegExp("^"+s+"$(?!\\s)",c)),an&&(e=i.lastIndex),r=nn.call(a?n:i,u),a?r?(r.input=r.input.slice(l),r[0]=r[0].slice(l),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:an&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),sn&&r&&1<r.length&&rn.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r});var ln=on;ct({target:"RegExp",proto:!0,forced:/./.exec!==ln},{exec:ln});function un(c){return function(t,e){var n,r,o=String(s(t)),i=et(e),a=o.length;return i<0||a<=i?c?"":void 0:(n=o.charCodeAt(i))<55296||56319<n||i+1===a||(r=o.charCodeAt(i+1))<56320||57343<r?c?o.charAt(i):n:c?o.slice(i,i+2):r-56320+(n-55296<<10)+65536}}function fn(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==v(t))throw TypeError("RegExp#exec called on incompatible receiver");return ln.call(t,e)}var dn=ut("species"),pn=!f(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),vn="$0"==="a".replace(/./,"$0"),hn=ut("replace"),gn=!!/./[hn]&&""===/./[hn]("a","$0"),mn=!f(function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}),bn={codeAt:un(!1),charAt:un(!0)}.charAt,yn=Math.max,_n=Math.min,wn=Math.floor,xn=/\$([$&'`]|\d\d?|<[^>]*>)/g,Sn=/\$([$&'`]|\d\d?)/g;!function(n,t,e,r){var o=ut(n),i=!f(function(){var t={};return t[o]=function(){return 7},7!=""[n](t)}),a=i&&!f(function(){var t=!1,e=/a/;return"split"===n&&((e={constructor:{}}).constructor[dn]=function(){return e},e.flags="",e[o]=/./[o]),e.exec=function(){return t=!0,null},e[o](""),!t});if(!i||!a||"replace"===n&&(!pn||!vn||gn)||"split"===n&&!mn){var c=/./[o],s=e(o,""[n],function(t,e,n,r,o){return e.exec===ln?i&&!o?{done:!0,value:c.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}},{REPLACE_KEEPS_$0:vn,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:gn}),l=s[0],u=s[1];ht(String.prototype,n,l),ht(RegExp.prototype,o,2==t?function(t,e){return u.call(t,this,e)}:function(t){return u.call(t,this)})}r&&k(RegExp.prototype[o],"sham",!0)}("replace",2,function(o,S,C,t){var E=t.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,R=t.REPLACE_KEEPS_$0,P=E?"$":"$0";return[function(t,e){var n=s(this),r=null==t?void 0:t[o];return void 0!==r?r.call(t,n,e):S.call(String(n),t,e)},function(t,e){if(!E&&R||"string"==typeof e&&-1===e.indexOf(P)){var n=C(S,t,this,e);if(n.done)return n.value}var r=O(t),o=String(this),i="function"==typeof e;i||(e=String(e));var a=r.global;if(a){var c=r.unicode;r.lastIndex=0}for(var s,l,u=[];;){var f=fn(r,o);if(null===f)break;if(u.push(f),!a)break;""===String(f[0])&&(r.lastIndex=(s=o,(l=nt(r.lastIndex))+(c?bn(s,l).length:1)))}for(var d,p="",v=0,h=0;h<u.length;h++){f=u[h];for(var g=String(f[0]),m=yn(_n(et(f.index),o.length),0),b=[],y=1;y<f.length;y++)b.push(void 0===(d=f[y])?d:String(d));var _=f.groups;if(i){var w=[g].concat(b,m,o);void 0!==_&&w.push(_);var x=String(e.apply(void 0,w))}else x=j(g,o,m,b,_,e);v<=m&&(p+=o.slice(v,m)+x,v=m+g.length)}return p+o.slice(v)}];function j(i,a,c,s,l,t){var u=c+i.length,f=s.length,e=Sn;return void 0!==l&&(l=st(l),e=xn),S.call(t,e,function(t,e){var n;switch(e.charAt(0)){case"$":return"$";case"&":return i;case"`":return a.slice(0,c);case"'":return a.slice(u);case"<":n=l[e.slice(1,-1)];break;default:var r=+e;if(0==r)return t;if(f<r){var o=wn(r/10);return 0===o?t:o<=f?void 0===s[o-1]?e.charAt(1):s[o-1]+e.charAt(1):t}n=s[r-1]}return void 0===n?"":n})}});var Cn,En=/"/g;function Rn(t){return(Rn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Pn(t){return function(t){if(Array.isArray(t))return jn(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return jn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jn(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function jn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}ct({target:"String",proto:!0,forced:(Cn="fixed",f(function(){var t=""[Cn]('"');return t!==t.toLowerCase()||3<t.split('"').length}))},{fixed:function(){return t="tt",n=e="",r=String(s(this)),o="<"+t,""!==e&&(o+=" "+e+'="'+String(n).replace(En,"&quot;")+'"'),o+">"+r+"</"+t+">";var t,e,n,r,o}});var On,kn,An,zn,Tn,In=function(t,e,n){for(var r=e.split(" "),o=t instanceof NodeList?t:[t],i=0;i<o.length;i++)o[i]&&o[i].classList[n].apply(o[i].classList,r)};function Ln(t,e){var n=1<arguments.length&&void 0!==e?e:"",r=document.querySelector("#"+t+"-css-style");r||((r=document.createElement("style")).setAttribute("id",t+"-css-style"),r.setAttribute("type","text/css"),document.querySelector("head").appendChild(r)),r.innerHTML=n}window.addEventListener("load",function(){document.addEventListener("header_builder_panel_changed",function(t){return"hfg_header_layout_partial"===t.detail.partial_id?(window.HFG.init(),window.HFG.initSearch(),console.log("Reinitialize HFG with sidebar."),!1):"nav-icon_partial"===t.detail.partial_id?(window.HFG.init(!0),console.log("Reinitialize HFG with skip."),!1):void 0}),document.addEventListener("customize_control_sidebar",function(t){"open"===t.detail&&window.HFG.toggleMenuSidebar(!0),"close"===t.detail&&window.HFG.toggleMenuSidebar(!1)}.bind(this)),document.addEventListener("customize_section_opened",function(t){"header_sidebar"===t.detail&&window.HFG.toggleMenuSidebar(!0)}.bind(this));var S={mobile:"max-width: 576px",tablet:"min-width: 576px",desktop:"min-width: 961px"};_.each(neveCustomizePreview,function(t,x){_.each(t,function(y,w){wp.customize(w,function(t){t.bind(function(e){if(y.additional&&y.additional.template)return function(t,e,n){var i={mobile:"max-width: 576px",tablet:"min-width: 576px",desktop:"min-width: 960px"},a="";if(n.directional){if(n.responsive){var r=function(t){var r=n.template,o=e[t+"-unit"]||"";_.each(e[t],function(t,e){var n=new RegExp("{{value.".concat(e,"}}"),"g");r=r.replace(n,t+o)}),a+="@media (".concat(i[t],") {").concat(r,"}")};for(var o in i)r(o)}Ln(t,a)}else{var c=new RegExp("{{value}}","g");if(n.responsive){var s=n.template,l=JSON.parse(e);for(var u in i){var f=l[u+"-unit"]||"";a+="@media (".concat(i[u],") {").concat(s.replace(c,l[u]||"inherit")).concat(f,"}")}}else{var d=e||n.fallback||"inherit";a+=n.template.replace(c,d.toString())}Ln(t,a)}}(w,e,y.additional),!1;var n="";switch(x){case"neve_color_control":if(y.additional.partial)return wp.customize.selectiveRefresh.partial(y.additional.partial).refresh(),!1;_.each(y.additional,function(t){if(!t.selector)return!1;e=e||t.fallback,n+="body ".concat(t.selector," {\n                  ").concat(t.prop,": ").concat(e," !important;\n                }")}),Ln(w,n);break;case"neve_background_control":if("color"===e.type){!e.colorValue&&y.additional.partial&&wp.customize.selectiveRefresh.partial(y.additional.partial).refresh(),n+="body ".concat(y.selector,"{background-image: none !important;}");var t="undefined"!==e.colorValue?e.colorValue:"inherit";return n+="".concat(y.selector,":before{ content: none !important;}"),n+="body ".concat(y.selector,", body ").concat(y.selector," .primary-menu-ul .sub-menu li {background-color: ").concat(t,"!important;}"),n+="".concat(y.selector," .primary-menu-ul .sub-menu, ").concat(y.selector," .primary-menu-ul .sub-menu li {border-color: ").concat(t,"!important;}"),Ln(w,n),!1}e.useFeatured&&neveCustomizePreview.currentFeaturedImage&&(e.imageUrl=neveCustomizePreview.currentFeaturedImage),n+=y.selector+"{",n+=e.imageUrl?'background-image: url("'.concat(e.imageUrl,'") !important;'):"background-image: none !important;",n+=!0===e.fixed?"background-attachment: fixed !important;":"background-attachment: initial !important;",e.focusPoint&&e.focusPoint.x&&e.focusPoint.y&&(n+="background-position:"+(100*e.focusPoint.x).toFixed(2)+"% "+(100*e.focusPoint.y).toFixed(2)+"% !important;"),n+="background-size: cover !important;",document.querySelector(".header-menu-sidebar").classList.contains("dropdown")||(n+="position: absolute;"),n+='top: 0; bottom: 0; width: 100%; content:"";',n+="}";var r=e.overlayColorValue||"unset";n+="body ".concat(y.selector,", body ").concat(y.selector," .primary-menu-ul .sub-menu li {background-color: ").concat(r,"!important;}"),n+="".concat(y.selector," .primary-menu-ul .sub-menu, ").concat(y.selector," .primary-menu-ul .sub-menu li {border-color: ").concat(r,"!important;}"),n+=y.selector+':before { content: "";position: absolute; top: 0; bottom: 0; width: 100%;'+"background-color: ".concat(r,"!important;")+"opacity: "+(e.overlayOpacity||50)/100+"!important;}",n+=y.selector+"{ background-color: transparent !important; }",Ln(w,n);break;case"\\Neve\\Customizer\\Controls\\React\\Responsive_Radio_Buttons":!function(r,e){if(r.additional){var t=document.querySelectorAll(r.selector),o=[];Object.keys(e).map(function(t){o.push("".concat(t,"-align-").concat(e[t]))}),_.each(t,function(t){var e,n;(e=t.parentNode.classList).remove.apply(e,Pn(r.additional.remove_classes)),(n=t.parentNode.classList).add.apply(n,o)})}}(y,e);break;case"\\Neve\\Customizer\\Controls\\React\\Radio_Buttons":if(!y.additional)return!1;var o="hfg-item-v-"+e,i=document.querySelectorAll(y.selector);_.each(i,function(t){var e,n;e=t.parentNode,In(e,"hfg-item-v-top hfg-item-v-middle hfg-item-v-bottom","remove"),n=t.parentNode,In(n,o,"add")});break;case"\\Neve\\Customizer\\Controls\\Radio_Image":break;case"\\Neve\\Customizer\\Controls\\Range":case"\\Neve\\Customizer\\Controls\\React\\Responsive_Range":var a=JSON.parse(e);0<a.mobile?n+="@media (max-width: 576px) { body "+y.selector+"{ "+y.additional.prop+":"+a.mobile+y.additional.unit+";}}":n+="@media (max-width: 576px) { body "+y.selector+"{ "+y.additional.prop+":unset;}}",0<a.tablet?n+="@media (min-width: 576px) { body "+y.selector+"{ "+y.additional.prop+":"+a.tablet+y.additional.unit+";}}":n+="@media (min-width: 576px) { body "+y.selector+"{ "+y.additional.prop+":unset;}}",0<a.desktop?n+="@media (min-width: 961px) { body "+y.selector+"{ "+y.additional.prop+":"+a.desktop+y.additional.unit+";}}":n+="@media (min-width: 961px) { body "+y.selector+"{ "+y.additional.prop+":unset;}}",Ln(w,n);break;case"\\Neve\\Customizer\\Controls\\React\\Spacing":for(var c in S){for(var s in n+="@media ("+S[c]+") { body "+y.selector+"{",e[c])if(""!==e[c][s]){var l=y.additional.prop+"-"+s;if("border-width"===y.additional.prop&&(l="border-".concat(s,"-width")),"border-radius"===y.additional.prop){l="border-".concat({top:"top-left",right:"top-right",bottom:"bottom-right",left:"bottom-left"}[s],"-radius")}n+=l+":"+e[c][s]+e[c+"-unit"]+";"}else n+=y.additional.prop+"-"+s+": unset;";n+="}}"}Ln(w,n);break;case"\\Neve\\Customizer\\Controls\\React\\Typography":for(var u in n+="html ".concat(y.selector,"{"),e.textTransform&&(n+="text-transform: ".concat(e.textTransform,";")),e.fontWeight&&"none"!==e.fontWeight&&(n+="font-weight: ".concat(e.fontWeight,";")),n+="}",S)n+="@media (".concat(S[u],") {\n\t\t\t\t\t\t\t\t\t\t\thtml ").concat(y.selector," {"),y.live_refresh_default&&y.live_refresh_default.size&&(n+="font-size:".concat(y.live_refresh_default.size[u]).concat(y.live_refresh_default.size.suffix[u],";")),e.fontSize&&e.fontSize[u]&&(n+="font-size:".concat(e.fontSize[u]).concat(e.fontSize.suffix[u],";")),y.live_refresh_default&&y.live_refresh_default.letter_spacing&&(n+="letter-spacing:".concat(y.live_refresh_default.letter_spacing[u],"px;")),e.letterSpacing&&e.letterSpacing[u]&&(n+="letter-spacing:".concat(e.letterSpacing[u],"px;")),y.live_refresh_default&&y.live_refresh_default.line_height&&(n+="line-height:".concat(y.live_refresh_default.line_height[u]).concat(y.live_refresh_default.line_height.suffix&&y.live_refresh_default.line_height.suffix[u]?y.live_refresh_default.line_height.suffix[u]:"",";")),e.lineHeight&&e.lineHeight[u]&&(n+="line-height:".concat(e.lineHeight[u]).concat(e.lineHeight.suffix[u]||"",";")),n+="}}";Ln(w,n);break;case"\\Neve\\Customizer\\Controls\\React\\Button_Appearance":var f=e.background||"unset",d=e.text||"currentColor",p=e.text||"",v="html ".concat(y.selector),h="html ".concat(y.selector," .icon-bar");y.additional&&y.additional.additional_buttons&&_.each(y.additional.additional_buttons,function(t){v+=",html "+t.button,h+=",html "+t.button+" "+t.text}),n+="".concat(v," {\n\t\t\t\t\t\t\t\t\t\tbackground-color: ").concat(f,";\n\t\t\t\t\t\t\t\t\t\tcolor: ").concat(d,";"),"object"!==Rn(e.borderRadius)?n+="border-radius: ".concat(e.borderRadius,"px;"):n+="\n                border-top-left-radius: ".concat(e.borderRadius.top,"px;\n                border-top-right-radius: ").concat(e.borderRadius.right,"px;\n                border-bottom-right-radius: ").concat(e.borderRadius.bottom,"px;\n                border-bottom-left-radius: ").concat(e.borderRadius.left,"px;\n                "),"outline"===e.type&&("object"!==Rn(e.borderWidth)?n+="border: ".concat(e.borderWidth,"px solid ").concat(p,";"):n+="\n                  border-style: solid;\n                  border-color: ".concat(p,";\n                  border-top-width: ").concat(e.borderWidth.top,"px;\n                  border-right-width: ").concat(e.borderWidth.right,"px;\n                  border-bottom-width: ").concat(e.borderWidth.bottom,"px;\n                  border-left-width: ").concat(e.borderWidth.left,"px;\n                  ")),"fill"===e.type&&(n+="border: none;"),n+="}",n+="".concat(h," {\n\t\t\t\t\t\t\t\t\t\tbackground-color: ").concat(d,";\n\t\t\t\t\t\t\t\t\t\tcolor: ").concat(d,";\n\t\t\t\t\t\t\t\t\t}"),Ln(w,n);break;case"text":var g=document.querySelector(y.selector);if(""===e)return g.parentNode.removeChild(g),!1;if(null===g){var m=document.createElement(y.additional.html_tag);m.classList.add(y.additional.wrap_class),document.querySelector(y.additional.parent).prepend(m)}document.querySelector(y.selector).innerHTML=e;break;case"neve_range_control":case"Neve\\Customizer\\Controls\\React\\Range":if("svg-icon-size"===y.additional.type)return n+="html ".concat(y.selector," {\n\t\t\t\t\t\t\t\t\t\t\twidth: ").concat(e,"px;\n\t\t\t\t\t\t\t\t\t\t\theight: ").concat(e,"px;\n\t\t\t\t\t\t\t\t\t\t}"),Ln(w,n),!1;n+="html ".concat(y.selector," {\n\t\t\t\t\t\t\t\t\t\t\t").concat(y.additional.type,": ").concat(e,"px;\n\t\t\t\t\t\t\t\t\t\t}"),Ln(w,n);break;case"\\Neve\\Customizer\\Controls\\React\\Color":var b=""===e?"unset":e;n+="html ".concat(y.selector," {\n\t\t\t\t\t\t\t\t\t\t").concat(y.additional.prop,": ").concat(b,";\n\t\t\t\t\t\t\t\t\t}"),Ln(w,n)}})})})}),wp.customize.preview.bind("font-selection",function(t){var e=neveCustomizePreview[t.type][t.controlId].selector,n=t.source,r=t.controlId+"_font_family",o=t.inherit?"inherit":'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';if(e=(e=e.split(",")).map(function(t){return"html "+t}).join(","),!1===t.value?Ln(t.controlId,e+"{font-family: "+o+";}"):Ln(t.controlId,e+"{font-family: "+t.value+" ;}"),"google"===n.toLowerCase()){var i=document.querySelector("#"+r),a="//fonts.googleapis.com/css?family="+t.value.replace(" ","+")+'%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800&display=swap"';if(null!==i)return i.setAttribute("href",a),!1;var c=document.createElement("link");c.setAttribute("rel","stylesheet"),c.setAttribute("id",r),c.setAttribute("href",a),c.setAttribute("type","text/css"),c.setAttribute("media","all"),document.querySelector("head").appendChild(c)}})}),(On=jQuery).neveCustomizeUtilities={setLiveCss:function(o,t){var i="",e=On("."+o.styleClass);if("object"!==Rn(t))return On(o.selectors).css(o.cssProperty,t.toString()+o.propertyUnit),!1;On.each(t,function(t,e){var n;if("suffix"===t)return!0;var r=o.propertyUnit;switch("object"===Rn(o.propertyUnit)&&(r=o.propertyUnit[t]),n=o.selectors+"{ "+o.cssProperty+":"+e+r+"}",t){default:case"mobile":i+=n;break;case"desktop":i+="@media(min-width: 960px) {"+n+"}";break;case"tablet":i+="@media (min-width: 576px){"+n+"}"}}),0<e.length?e.text(i):On("head").append('<style type="text/css" class="'+o.styleClass+'">'+i+"</style>")}},(kn=jQuery).neveRangesPreview={init:function(){this.rangesPreview()},ranges:{neve_container_width:{selector:".container",cssProp:"max-width",unit:"px",styleClass:"container-width-css"}},rangesPreview:function(){_.each(this.ranges,function(r,t){wp.customize(t,function(t){t.bind(function(t){var e=JSON.parse(t);if(!e)return!0;"object"===Rn(e.suffix)&&(r.unit=e.suffix);var n={selectors:r.selector,cssProperty:r.cssProp,propertyUnit:r.unit?r.unit:"",styleClass:r.styleClass};kn.neveCustomizeUtilities.setLiveCss(n,e)})})})}},jQuery.neveRangesPreview.init(),(An=jQuery).neveLayoutPreview={init:function(){this.contentWidthsPreview(),this.containersLivePreview()},contentWidths:{neve_sitewide_content_width:{content:".neve-main > .container .col",sidebar:".nv-sidebar-wrap"},neve_blog_archive_content_width:{content:".archive-container .nv-index-posts",sidebar:".archive-container .nv-sidebar-wrap"},neve_single_post_content_width:{content:".single-post-container .nv-single-post-wrap",sidebar:".single-post-container .nv-sidebar-wrap"},neve_shop_archive_content_width:{content:".archive.woocommerce .shop-container .nv-shop.col",sidebar:".archive.woocommerce .shop-container .nv-sidebar-wrap"},neve_single_product_content_width:{content:".single-product .shop-container .nv-shop.col",sidebar:".single-product .shop-container .nv-sidebar-wrap"},neve_other_pages_content_width:{content:"body:not(.single):not(.archive):not(.blog):not(.search) .neve-main > .container .col",sidebar:"body:not(.single):not(.archive):not(.blog):not(.search) .nv-sidebar-wrap"}},contentWidthsPreview:function(){An.each(this.contentWidths,function(n,r){wp.customize(n,function(t){t.bind(function(t){var e=" @media (min-width: 961px) {\n\t\t\t\t\t\t\t".concat(r.content," { max-width: ").concat(t,"% !important; }\n\t\t\t\t\t\t\t").concat(r.sidebar," { max-width: ").concat(100-t,"% !important; }\n\t\t\t\t\t\t}");Ln(n+"-css",e)})})})},containersLayoutMap:{neve_default_container_style:".page:not(.woocommerce) .single-page-container",neve_blog_archive_container_style:".archive-container",neve_single_post_container_style:".single-post-container",neve_shop_archive_container_style:".woocommerce-page.post-type-archive .neve-main > div",neve_single_product_container_style:".single-product .neve-main > div"},containersLivePreview:function(){An.each(this.containersLayoutMap,function(t,e){e+=":not(.set-in-metabox)",wp.customize(t,function(t){t.bind(function(t){if("contained"===t)return An(e).removeClass("container-fluid").addClass("container"),!1;An(e).removeClass("container").addClass("container-fluid")})})})}},jQuery.neveLayoutPreview.init(),(zn=jQuery).neveCustomizeUtilities={setLiveCss:function(o,t){var i="",e=zn("."+o.styleClass);if("object"!==Rn(t))return zn(o.selectors).css(o.cssProperty,t.toString()+o.propertyUnit),!1;zn.each(t,function(t,e){var n;if("suffix"===t)return!0;var r=o.propertyUnit;switch("object"===Rn(o.propertyUnit)&&(r=o.propertyUnit[t]),n=o.selectors+"{ "+o.cssProperty+":"+e+r+"}",t){default:case"mobile":i+=n;break;case"desktop":i+="@media(min-width: 960px) {"+n+"}";break;case"tablet":i+="@media (min-width: 576px){"+n+"}"}}),0<e.length?e.text(i):zn("head").append('<style type="text/css" class="'+o.styleClass+'">'+i+"</style>")}},(Tn=jQuery).neveLayoutPreview={init:function(){this.contentWidthsPreview(),this.containersLivePreview()},contentWidths:{neve_sitewide_content_width:{content:".neve-main > .container .col, .neve-main > .container-fluid .col",sidebar:".nv-sidebar-wrap"},neve_blog_archive_content_width:{content:".archive-container .nv-index-posts",sidebar:".archive-container .nv-sidebar-wrap"},neve_single_post_content_width:{content:".single-post-container .nv-single-post-wrap",sidebar:".single-post-container .nv-sidebar-wrap"},neve_shop_archive_content_width:{content:".archive.woocommerce .shop-container .nv-shop.col",sidebar:".archive.woocommerce .shop-container .nv-sidebar-wrap"},neve_single_product_content_width:{content:".single-product .shop-container .nv-shop.col",sidebar:".single-product .shop-container .nv-sidebar-wrap"},neve_other_pages_content_width:{content:"body:not(.single):not(.archive):not(.blog):not(.search) .neve-main > .container .col",sidebar:"body:not(.single):not(.archive):not(.blog):not(.search) .nv-sidebar-wrap"}},contentWidthsPreview:function(){Tn.each(this.contentWidths,function(t,e){wp.customize(t,function(t){t.bind(function(t){jQuery(e.content).css("max-width",t+"%"),jQuery(e.sidebar).css("max-width",100-t+"%")})})})},containersLayoutMap:{neve_default_container_style:".page:not(.woocommerce) .single-page-container",neve_blog_archive_container_style:".archive-container",neve_single_post_container_style:".single-post-container",neve_shop_archive_container_style:".woocommerce-page.post-type-archive .neve-main > div",neve_single_product_container_style:".single-product .neve-main > div"},containersLivePreview:function(){Tn.each(this.containersLayoutMap,function(t,e){e+=":not(.set-in-metabox)",wp.customize(t,function(t){t.bind(function(t){if("contained"===t)return Tn(e).removeClass("container-fluid").addClass("container"),!1;Tn(e).removeClass("container").addClass("container-fluid")})})})}},jQuery.neveLayoutPreview.init()}();
