/*! For license information please see main.6a9e78a3.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:u,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var x=v.prototype=new b;x.constructor=v,m(x,y.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var a,i={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,a)&&!$.hasOwnProperty(a)&&(i[a]=t[a]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:l,props:i,_owner:S.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var z=/\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===i?"."+_(s,0):i,w(o)?(a="",null!=e&&(a=e.replace(z,"$&/")+"/"),P(o,t,a,"",(function(e){return e}))):null!=o&&(E(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(z,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=""===i?".":i+":",w(e))for(var c=0;c<e.length;c++){var u=i+_(l=e[c],c);s+=P(l,t,a,u,o)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=P(l=l.value,t,a,u=i+_(l,c++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function j(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},A={transition:null},R={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:A,ReactCurrentOwner:S};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:j,forEach:function(e,t,n){j(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return j(e,(function(){t++})),t},toArray:function(e){return j(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=a,t.Profiler=o,t.PureComponent=v,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),i=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!$.hasOwnProperty(c)&&(a[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];a.children=s}return{$$typeof:n,type:e.type,key:i,ref:o,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>i(s,n))c<a&&0>i(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<a&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,g=!1,m=!1,h=!1,y="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(h=!1,x(e),!m)if(null!==r(c))m=!0,A(k);else{var t=r(u);null!==t&&R(w,t.startTime-e)}}function k(e,n){m=!1,h&&(h=!1,b(E),E=-1),g=!0;var i=f;try{for(x(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!P());){var o=p.callback;if("function"===typeof o){p.callback=null,f=p.priorityLevel;var l=o(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?p.callback=l:p===r(c)&&a(c),x(n)}else a(c);p=r(c)}if(null!==p)var s=!0;else{var d=r(u);null!==d&&R(w,d.startTime-n),s=!1}return s}finally{p=null,f=i,g=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,$=!1,C=null,E=-1,z=5,_=-1;function P(){return!(t.unstable_now()-_<z)}function j(){if(null!==C){var e=t.unstable_now();_=e;var n=!0;try{n=C(!0,e)}finally{n?S():($=!1,C=null)}}else $=!1}if("function"===typeof v)S=function(){v(j)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,N=T.port2;T.port1.onmessage=j,S=function(){N.postMessage(null)}}else S=function(){y(j,0)};function A(e){C=e,$||($=!0,S())}function R(e,n){E=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||g||(m=!0,A(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(h?(b(E),E=-1):h=!0,R(w,i-o))):(e.sortIndex=l,n(c,e),m||g||(m=!0,A(k))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var c=i[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(a=n?n.call(r,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},g={};function m(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var h={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){h[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];h[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){h[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){h[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){h[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){h[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){h[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){h[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){h[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function v(e,t,n,r){var a=h.hasOwnProperty(t)?h[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(g,e)||!d.call(f,e)&&(p.test(e)?g[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,b);h[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,b);h[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,b);h[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){h[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),h.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){h[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),z=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var A=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var R=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=R&&e[R]||e["@@iterator"])?e:null}var O,I=Object.assign;function D(e){if(void 0===O)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||""}return"\n"+O+e}var F=!1;function M(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var a=c.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(1!==o||1!==l)do{if(o--,0>--l||a[o]!==i[l]){var s="\n"+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function U(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1);case 11:return e=M(e.type.render,!1);case 1:return e=M(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case C:return"Profiler";case $:return"StrictMode";case P:return"Suspense";case j:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case z:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case _:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function G(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&v(e,"checked",t,!1)}function J(e,t){X(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function ie(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ge=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function he(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(fe).forEach((function(e){ge.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var ye=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function ve(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,$e=null;function Ce(e){if(e=va(e)){if("function"!==typeof ke)throw Error(i(280));var t=e.stateNode;t&&(t=wa(t),ke(e.stateNode,e.type,t))}}function Ee(e){Se?$e?$e.push(e):$e=[e]:Se=e}function ze(){if(Se){var e=Se,t=$e;if($e=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function _e(e,t){return e(t)}function Pe(){}var je=!1;function Te(e,t,n){if(je)return e(t,n);je=!0;try{return _e(e,t,n)}finally{je=!1,(null!==Se||null!==$e)&&(Pe(),ze())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Ae=!1;if(u)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){Ae=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch(ue){Ae=!1}function Le(e,t,n,r,a,i,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Oe=!1,Ie=null,De=!1,Fe=null,Me={onError:function(e){Oe=!0,Ie=e}};function Ue(e,t,n,r,a,i,o,l,s){Oe=!1,Ie=null,Le.apply(Me,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Be(e)!==e)throw Error(i(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return He(a),e;if(o===r)return He(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ge(e):null}function Ge(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ge(e);if(null!==t)return t;e=e.sibling}return null}var Ke=a.unstable_scheduleCallback,Ye=a.unstable_cancelCallback,Qe=a.unstable_shouldYield,qe=a.unstable_requestPaint,Xe=a.unstable_now,Je=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,it=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var l=o&~a;0!==l?r=dt(l):0!==(i&=o)&&(r=dt(i))}else 0!==(o=n&~a)?r=dt(o):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-ot(t)),r|=e[n],t&=~a;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function gt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function ht(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var vt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,$t,Ct,Et=!1,zt=[],_t=null,Pt=null,jt=null,Tt=new Map,Nt=new Map,At=[],Rt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function Ot(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=va(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function It(e){var t=ba(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Ct(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=va(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Ft(e,t,n){Dt(e)&&n.delete(t)}function Mt(){Et=!1,null!==_t&&Dt(_t)&&(_t=null),null!==Pt&&Dt(Pt)&&(Pt=null),null!==jt&&Dt(jt)&&(jt=null),Tt.forEach(Ft),Nt.forEach(Ft)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Mt)))}function Bt(e){function t(t){return Ut(t,e)}if(0<zt.length){Ut(zt[0],e);for(var n=1;n<zt.length;n++){var r=zt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==_t&&Ut(_t,e),null!==Pt&&Ut(Pt,e),null!==jt&&Ut(jt,e),Tt.forEach(t),Nt.forEach(t),n=0;n<At.length;n++)(r=At[n]).blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&null===(n=At[0]).blockedOn;)It(n),null===n.blockedOn&&At.shift()}var Wt=x.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var a=vt,i=Wt.transition;Wt.transition=null;try{vt=1,Kt(e,t,n,r)}finally{vt=a,Wt.transition=i}}function Gt(e,t,n,r){var a=vt,i=Wt.transition;Wt.transition=null;try{vt=4,Kt(e,t,n,r)}finally{vt=a,Wt.transition=i}}function Kt(e,t,n,r){if(Ht){var a=Qt(e,t,n,r);if(null===a)Hr(e,t,r,Yt,n),Lt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return _t=Ot(_t,e,t,n,r,a),!0;case"dragenter":return Pt=Ot(Pt,e,t,n,r,a),!0;case"mouseover":return jt=Ot(jt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Tt.set(i,Ot(Tt.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Nt.set(i,Ot(Nt.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<Rt.indexOf(e)){for(;null!==a;){var i=va(a);if(null!==i&&wt(i),null===(i=Qt(e,t,n,r))&&Hr(e,t,r,Yt,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Yt=null;function Qt(e,t,n,r){if(Yt=null,null!==(e=ba(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,a="value"in Xt?Xt.value:Xt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Zt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=an(cn),dn=I({},cn,{view:0,detail:0}),pn=an(dn),fn=I({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),gn=an(fn),mn=an(I({},fn,{dataTransfer:0})),hn=an(I({},dn,{relatedTarget:0})),yn=an(I({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=I({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vn=an(bn),xn=an(I({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Cn(){return $n}var En=I({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),zn=an(En),_n=an(I({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=an(I({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),jn=an(I({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=I({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=an(Tn),An=[9,13,27,32],Rn=u&&"CompositionEvent"in window,Ln=null;u&&"documentMode"in document&&(Ln=document.documentMode);var On=u&&"TextEvent"in window&&!Ln,In=u&&(!Rn||Ln&&8<Ln&&11>=Ln),Dn=String.fromCharCode(32),Fn=!1;function Mn(e,t){switch(e){case"keyup":return-1!==An.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){Ee(r),0<(t=Gr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Kn=null;function Yn(e){Dr(e,0)}function Qn(e){if(K(xa(e)))return e}function qn(e,t){if("change"===e)return t}var Xn=!1;if(u){var Jn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Xn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Gn&&(Gn.detachEvent("onpropertychange",nr),Kn=Gn=null)}function nr(e){if("value"===e.propertyName&&Qn(Kn)){var t=[];Vn(t,Kn,e,we(e)),Te(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Gn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qn(Kn)}function ir(e,t){if("click"===e)return Qn(t)}function or(e,t){if("input"===e||"change"===e)return Qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function gr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=ur(n,i);var o=ur(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,hr=null,yr=null,br=null,vr=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;vr||null==hr||hr!==Y(r)||("selectionStart"in(r=hr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&sr(br,r)||(br=r,0<(r=Gr(yr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},$r={};function Cr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in $r)return Sr[e]=n[t];return e}u&&($r=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Er=Cr("animationend"),zr=Cr("animationiteration"),_r=Cr("animationstart"),Pr=Cr("transitionend"),jr=new Map,Tr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){jr.set(e,t),s(t,[e])}for(var Ar=0;Ar<Tr.length;Ar++){var Rr=Tr[Ar];Nr(Rr.toLowerCase(),"on"+(Rr[0].toUpperCase()+Rr.slice(1)))}Nr(Er,"onAnimationEnd"),Nr(zr,"onAnimationIteration"),Nr(_r,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(Pr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Or=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Ir(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,o,l,s,c){if(Ue.apply(this,arguments),Oe){if(!Oe)throw Error(i(198));var u=Ie;Oe=!1,Ie=null,De||(De=!0,Fe=u)}}(r,t,void 0,e),e.currentTarget=null}function Dr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Ir(a,l,c),i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,c=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Ir(a,l,c),i=s}}}if(De)throw e=Fe,De=!1,Fe=null,e}function Fr(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Mr(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Ur]){e[Ur]=!0,o.forEach((function(t){"selectionchange"!==t&&(Or.has(t)||Mr(t,!1,e),Mr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Mr("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(qt(t)){case 1:var a=Vt;break;case 4:a=Gt;break;default:a=Kt}n=a.bind(null,t,n,e),a=void 0,!Ae||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=ba(l)))return;if(5===(s=o.tag)||6===s){r=i=o;continue e}l=l.parentNode}}r=r.return}Te((function(){var r=i,a=we(n),o=[];e:{var l=jr.get(e);if(void 0!==l){var s=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=zn;break;case"focusin":c="focus",s=hn;break;case"focusout":c="blur",s=hn;break;case"beforeblur":case"afterblur":s=hn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=gn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pn;break;case Er:case zr:case _r:s=yn;break;case Pr:s=jn;break;case"scroll":s=pn;break;case"wheel":s=Nn;break;case"copy":case"cut":case"paste":s=vn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=_n}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==l?l+"Capture":null:l;u=[];for(var f,g=r;null!==g;){var m=(f=g).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==p&&(null!=(m=Ne(g,p))&&u.push(Vr(g,m,f)))),d)break;g=g.return}0<u.length&&(l=new s(l,c,null,n,a),o.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(c=n.relatedTarget||n.fromElement)||!ba(c)&&!c[ga])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?ba(c):null)&&(c!==(d=Be(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=gn,m="onMouseLeave",p="onMouseEnter",g="mouse","pointerout"!==e&&"pointerover"!==e||(u=_n,m="onPointerLeave",p="onPointerEnter",g="pointer"),d=null==s?l:xa(s),f=null==c?l:xa(c),(l=new u(m,g+"leave",s,n,a)).target=d,l.relatedTarget=f,m=null,ba(a)===r&&((u=new u(p,g+"enter",c,n,a)).target=f,u.relatedTarget=d,m=u),d=m,s&&c)e:{for(p=c,g=0,f=u=s;f;f=Kr(f))g++;for(f=0,m=p;m;m=Kr(m))f++;for(;0<g-f;)u=Kr(u),g--;for(;0<f-g;)p=Kr(p),f--;for(;g--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kr(u),p=Kr(p)}u=null}else u=null;null!==s&&Yr(o,l,s,u,!1),null!==c&&null!==d&&Yr(o,d,c,u,!0)}if("select"===(s=(l=r?xa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var h=qn;else if(Hn(l))if(Xn)h=or;else{h=ar;var y=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(h=ir);switch(h&&(h=h(e,r))?Vn(o,h,n,a):(y&&y(e,l,r),"focusout"===e&&(y=l._wrapperState)&&y.controlled&&"number"===l.type&&ee(l,"number",l.value)),y=r?xa(r):window,e){case"focusin":(Hn(y)||"true"===y.contentEditable)&&(hr=y,yr=r,br=null);break;case"focusout":br=yr=hr=null;break;case"mousedown":vr=!0;break;case"contextmenu":case"mouseup":case"dragend":vr=!1,xr(o,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(o,n,a)}var b;if(Rn)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Bn?Mn(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(In&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==v?"onCompositionEnd"===v&&Bn&&(b=en()):(Jt="value"in(Xt=a)?Xt.value:Xt.textContent,Bn=!0)),0<(y=Gr(r,v)).length&&(v=new xn(v,e,null,n,a),o.push({event:v,listeners:y}),b?v.data=b:null!==(b=Un(n))&&(v.data=b))),(b=On?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Fn=!0,Dn);case"textInput":return(e=t.data)===Dn&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!Rn&&Mn(e,t)?(e=en(),Zt=Jt=Xt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return In&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Gr(r,"onBeforeInput")).length&&(a=new xn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=b))}Dr(o,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Ne(e,n))&&r.unshift(Vr(e,i,a)),null!=(i=Ne(e,t))&&r.push(Vr(e,i,a))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,a?null!=(s=Ne(n,i))&&o.unshift(Vr(n,s,l)):a||null!=(s=Ne(n,i))&&o.push(Vr(n,s,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Qr=/\r\n?/g,qr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Qr,"\n").replace(qr,"")}function Jr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(i(425))}function Zr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,ia="function"===typeof Promise?Promise:void 0,oa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ia?function(e){return ia.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Bt(t)}function ca(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ua(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),pa="__reactFiber$"+da,fa="__reactProps$"+da,ga="__reactContainer$"+da,ma="__reactEvents$"+da,ha="__reactListeners$"+da,ya="__reactHandles$"+da;function ba(e){var t=e[pa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ga]||n[pa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ua(e);null!==e;){if(n=e[pa])return n;e=ua(e)}return t}n=(e=n).parentNode}return null}function va(e){return!(e=e[pa]||e[ga])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function wa(e){return e[fa]||null}var ka=[],Sa=-1;function $a(e){return{current:e}}function Ca(e){0>Sa||(e.current=ka[Sa],ka[Sa]=null,Sa--)}function Ea(e,t){Sa++,ka[Sa]=e.current,e.current=t}var za={},_a=$a(za),Pa=$a(!1),ja=za;function Ta(e,t){var n=e.type.contextTypes;if(!n)return za;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Na(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Aa(){Ca(Pa),Ca(_a)}function Ra(e,t,n){if(_a.current!==za)throw Error(i(168));Ea(_a,t),Ea(Pa,n)}function La(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(i(108,W(e)||"Unknown",a));return I({},n,r)}function Oa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||za,ja=_a.current,Ea(_a,e),Ea(Pa,Pa.current),!0}function Ia(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=La(e,t,ja),r.__reactInternalMemoizedMergedChildContext=e,Ca(Pa),Ca(_a),Ea(_a,e)):Ca(Pa),Ea(Pa,n)}var Da=null,Fa=!1,Ma=!1;function Ua(e){null===Da?Da=[e]:Da.push(e)}function Ba(){if(!Ma&&null!==Da){Ma=!0;var e=0,t=vt;try{var n=Da;for(vt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Da=null,Fa=!1}catch(a){throw null!==Da&&(Da=Da.slice(e+1)),Ke(Ze,Ba),a}finally{vt=t,Ma=!1}}return null}var Wa=[],Ha=0,Va=null,Ga=0,Ka=[],Ya=0,Qa=null,qa=1,Xa="";function Ja(e,t){Wa[Ha++]=Ga,Wa[Ha++]=Va,Va=e,Ga=t}function Za(e,t,n){Ka[Ya++]=qa,Ka[Ya++]=Xa,Ka[Ya++]=Qa,Qa=e;var r=qa;e=Xa;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,qa=1<<32-ot(t)+a|n<<a|r,Xa=i+e}else qa=1<<i|n<<a|r,Xa=e}function ei(e){null!==e.return&&(Ja(e,1),Za(e,1,0))}function ti(e){for(;e===Va;)Va=Wa[--Ha],Wa[Ha]=null,Ga=Wa[--Ha],Wa[Ha]=null;for(;e===Qa;)Qa=Ka[--Ya],Ka[Ya]=null,Xa=Ka[--Ya],Ka[Ya]=null,qa=Ka[--Ya],Ka[Ya]=null}var ni=null,ri=null,ai=!1,ii=null;function oi(e,t){var n=Tc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ni=e,ri=ca(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ni=e,ri=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Qa?{id:qa,overflow:Xa}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Tc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ni=e,ri=null,!0);default:return!1}}function si(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ci(e){if(ai){var t=ri;if(t){var n=t;if(!li(e,t)){if(si(e))throw Error(i(418));t=ca(n.nextSibling);var r=ni;t&&li(e,t)?oi(r,n):(e.flags=-4097&e.flags|2,ai=!1,ni=e)}}else{if(si(e))throw Error(i(418));e.flags=-4097&e.flags|2,ai=!1,ni=e}}}function ui(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ni=e}function di(e){if(e!==ni)return!1;if(!ai)return ui(e),ai=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ri)){if(si(e))throw pi(),Error(i(418));for(;t;)oi(e,t),t=ca(t.nextSibling)}if(ui(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ri=ca(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ri=null}}else ri=ni?ca(e.stateNode.nextSibling):null;return!0}function pi(){for(var e=ri;e;)e=ca(e.nextSibling)}function fi(){ri=ni=null,ai=!1}function gi(e){null===ii?ii=[e]:ii.push(e)}var mi=x.ReactCurrentBatchConfig;function hi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var a=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bi(e){return(0,e._init)(e._payload)}function vi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ac(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Ic(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===N&&bi(i)===t.type)?((r=a(t,n.props)).ref=hi(e,t,n),r.return=e,r):((r=Rc(n.type,n.key,n.props,null,e.mode,r)).ref=hi(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Dc(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Lc(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Ic(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Rc(t.type,t.key,t.props,null,e.mode,n)).ref=hi(e,null,t),n.return=e,n;case k:return(t=Dc(t,e.mode,n)).return=e,t;case N:return p(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lc(t,e.mode,n,null)).return=e,t;yi(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?c(e,t,n,r):null;case k:return n.key===a?u(e,t,n,r):null;case N:return f(e,t,(a=n._init)(n._payload),r)}if(te(n)||L(n))return null!==a?null:d(e,t,n,r,null);yi(e,n)}return null}function g(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case N:return g(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,a,null);yi(t,r)}return null}function m(a,i,l,s){for(var c=null,u=null,d=i,m=i=0,h=null;null!==d&&m<l.length;m++){d.index>m?(h=d,d=null):h=d.sibling;var y=f(a,d,l[m],s);if(null===y){null===d&&(d=h);break}e&&d&&null===y.alternate&&t(a,d),i=o(y,i,m),null===u?c=y:u.sibling=y,u=y,d=h}if(m===l.length)return n(a,d),ai&&Ja(a,m),c;if(null===d){for(;m<l.length;m++)null!==(d=p(a,l[m],s))&&(i=o(d,i,m),null===u?c=d:u.sibling=d,u=d);return ai&&Ja(a,m),c}for(d=r(a,d);m<l.length;m++)null!==(h=g(d,a,m,l[m],s))&&(e&&null!==h.alternate&&d.delete(null===h.key?m:h.key),i=o(h,i,m),null===u?c=h:u.sibling=h,u=h);return e&&d.forEach((function(e){return t(a,e)})),ai&&Ja(a,m),c}function h(a,l,s,c){var u=L(s);if("function"!==typeof u)throw Error(i(150));if(null==(s=u.call(s)))throw Error(i(151));for(var d=u=null,m=l,h=l=0,y=null,b=s.next();null!==m&&!b.done;h++,b=s.next()){m.index>h?(y=m,m=null):y=m.sibling;var v=f(a,m,b.value,c);if(null===v){null===m&&(m=y);break}e&&m&&null===v.alternate&&t(a,m),l=o(v,l,h),null===d?u=v:d.sibling=v,d=v,m=y}if(b.done)return n(a,m),ai&&Ja(a,h),u;if(null===m){for(;!b.done;h++,b=s.next())null!==(b=p(a,b.value,c))&&(l=o(b,l,h),null===d?u=b:d.sibling=b,d=b);return ai&&Ja(a,h),u}for(m=r(a,m);!b.done;h++,b=s.next())null!==(b=g(m,a,h,b.value,c))&&(e&&null!==b.alternate&&m.delete(null===b.key?h:b.key),l=o(b,l,h),null===d?u=b:d.sibling=b,d=b);return e&&m.forEach((function(e){return t(a,e)})),ai&&Ja(a,h),u}return function e(r,i,o,s){if("object"===typeof o&&null!==o&&o.type===S&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var c=o.key,u=i;null!==u;){if(u.key===c){if((c=o.type)===S){if(7===u.tag){n(r,u.sibling),(i=a(u,o.props.children)).return=r,r=i;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===N&&bi(c)===u.type){n(r,u.sibling),(i=a(u,o.props)).ref=hi(r,u,o),i.return=r,r=i;break e}n(r,u);break}t(r,u),u=u.sibling}o.type===S?((i=Lc(o.props.children,r.mode,s,o.key)).return=r,r=i):((s=Rc(o.type,o.key,o.props,null,r.mode,s)).ref=hi(r,i,o),s.return=r,r=s)}return l(r);case k:e:{for(u=o.key;null!==i;){if(i.key===u){if(4===i.tag&&i.stateNode.containerInfo===o.containerInfo&&i.stateNode.implementation===o.implementation){n(r,i.sibling),(i=a(i,o.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Dc(o,r.mode,s)).return=r,r=i}return l(r);case N:return e(r,i,(u=o._init)(o._payload),s)}if(te(o))return m(r,i,o,s);if(L(o))return h(r,i,o,s);yi(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==i&&6===i.tag?(n(r,i.sibling),(i=a(i,o)).return=r,r=i):(n(r,i),(i=Ic(o,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var xi=vi(!0),wi=vi(!1),ki=$a(null),Si=null,$i=null,Ci=null;function Ei(){Ci=$i=Si=null}function zi(e){var t=ki.current;Ca(ki),e._currentValue=t}function _i(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pi(e,t){Si=e,Ci=$i=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(vl=!0),e.firstContext=null)}function ji(e){var t=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:t,next:null},null===$i){if(null===Si)throw Error(i(308));$i=e,Si.dependencies={lanes:0,firstContext:e}}else $i=$i.next=e;return t}var Ti=null;function Ni(e){null===Ti?Ti=[e]:Ti.push(e)}function Ai(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Ni(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ri(e,r)}function Ri(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Li=!1;function Oi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ii(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Di(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&_s)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ri(e,n)}return null===(a=r.interleaved)?(t.next=t,Ni(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ri(e,n)}function Mi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Ui(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bi(e,t,n,r){var a=e.updateQueue;Li=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===o?i=c:o.next=c,o=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,u=c=s=null,l=i;;){var p=l.lane,f=l.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,m=l;switch(p=t,f=n,m.tag){case 1:if("function"===typeof(g=m.payload)){d=g.call(f,d,p);break e}d=g;break e;case 3:g.flags=-65537&g.flags|128;case 0:if(null===(p="function"===typeof(g=m.payload)?g.call(f,d,p):g)||void 0===p)break e;d=I({},d,p);break e;case 2:Li=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=a.effects)?a.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,o|=p;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(p=l).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}if(null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Os|=o,e.lanes=o,e.memoizedState=d}}function Wi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(i(191,a));a.call(r)}}}var Hi={},Vi=$a(Hi),Gi=$a(Hi),Ki=$a(Hi);function Yi(e){if(e===Hi)throw Error(i(174));return e}function Qi(e,t){switch(Ea(Ki,t),Ea(Gi,e),Ea(Vi,Hi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ca(Vi),Ea(Vi,t)}function qi(){Ca(Vi),Ca(Gi),Ca(Ki)}function Xi(e){Yi(Ki.current);var t=Yi(Vi.current),n=se(t,e.type);t!==n&&(Ea(Gi,e),Ea(Vi,n))}function Ji(e){Gi.current===e&&(Ca(Vi),Ca(Gi))}var Zi=$a(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=x.ReactCurrentDispatcher,ao=x.ReactCurrentBatchConfig,io=0,oo=null,lo=null,so=null,co=!1,uo=!1,po=0,fo=0;function go(){throw Error(i(321))}function mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function ho(e,t,n,r,a,o){if(io=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Zo:el,e=n(r,a),uo){o=0;do{if(uo=!1,po=0,25<=o)throw Error(i(301));o+=1,so=lo=null,t.updateQueue=null,ro.current=tl,e=n(r,a)}while(uo)}if(ro.current=Jo,t=null!==lo&&null!==lo.next,io=0,so=lo=oo=null,co=!1,t)throw Error(i(300));return e}function yo(){var e=0!==po;return po=0,e}function bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function vo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(i(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function xo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=vo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=lo,a=r.baseQueue,o=n.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}r.baseQueue=a=o,n.pending=null}if(null!==a){o=a.next,r=r.baseState;var s=l=null,c=null,u=o;do{var d=u.lane;if((io&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=p,l=r):c=c.next=p,oo.lanes|=d,Os|=d}u=u.next}while(null!==u&&u!==o);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(vl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{o=a.lane,oo.lanes|=o,Os|=o,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=vo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);lr(o,t.memoizedState)||(vl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function So(){}function $o(e,t){var n=oo,r=vo(),a=t(),o=!lr(r.memoizedState,a);if(o&&(r.memoizedState=a,vl=!0),r=r.queue,Oo(zo.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,To(9,Eo.bind(null,n,r,a,t),void 0,null),null===Ps)throw Error(i(349));0!==(30&io)||Co(n,t,a)}return a}function Co(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Eo(e,t,n,r){t.value=n,t.getSnapshot=r,_o(t)&&Po(e)}function zo(e,t,n){return n((function(){_o(t)&&Po(e)}))}function _o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Po(e){var t=Ri(e,1);null!==t&&nc(t,e,1,-1)}function jo(e){var t=bo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=Yo.bind(null,oo,e),[t.memoizedState,e]}function To(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function No(){return vo().memoizedState}function Ao(e,t,n,r){var a=bo();oo.flags|=e,a.memoizedState=To(1|t,n,void 0,void 0===r?null:r)}function Ro(e,t,n,r){var a=vo();r=void 0===r?null:r;var i=void 0;if(null!==lo){var o=lo.memoizedState;if(i=o.destroy,null!==r&&mo(r,o.deps))return void(a.memoizedState=To(t,n,i,r))}oo.flags|=e,a.memoizedState=To(1|t,n,i,r)}function Lo(e,t){return Ao(8390656,8,e,t)}function Oo(e,t){return Ro(2048,8,e,t)}function Io(e,t){return Ro(4,2,e,t)}function Do(e,t){return Ro(4,4,e,t)}function Fo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Mo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ro(4,4,Fo.bind(null,t,e),n)}function Uo(){}function Bo(e,t){var n=vo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wo(e,t){var n=vo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ho(e,t,n){return 0===(21&io)?(e.baseState&&(e.baseState=!1,vl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),oo.lanes|=n,Os|=n,e.baseState=!0),t)}function Vo(e,t){var n=vt;vt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{vt=n,ao.transition=r}}function Go(){return vo().memoizedState}function Ko(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qo(e))qo(t,n);else if(null!==(n=Ai(e,t,n,r))){nc(n,e,r,ec()),Xo(n,t,r)}}function Yo(e,t,n){var r=tc(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qo(e))qo(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,o)){var s=t.interleaved;return null===s?(a.next=a,Ni(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(c){}null!==(n=Ai(e,t,a,r))&&(nc(n,e,r,a=ec()),Xo(n,t,r))}}function Qo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function qo(e,t){uo=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Jo={readContext:ji,useCallback:go,useContext:go,useEffect:go,useImperativeHandle:go,useInsertionEffect:go,useLayoutEffect:go,useMemo:go,useReducer:go,useRef:go,useState:go,useDebugValue:go,useDeferredValue:go,useTransition:go,useMutableSource:go,useSyncExternalStore:go,useId:go,unstable_isNewReconciler:!1},Zo={readContext:ji,useCallback:function(e,t){return bo().memoizedState=[e,void 0===t?null:t],e},useContext:ji,useEffect:Lo,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ao(4194308,4,Fo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var n=bo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ko.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bo().memoizedState=e},useState:jo,useDebugValue:Uo,useDeferredValue:function(e){return bo().memoizedState=e},useTransition:function(){var e=jo(!1),t=e[0];return e=Vo.bind(null,e[1]),bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,a=bo();if(ai){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Ps)throw Error(i(349));0!==(30&io)||Co(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Lo(zo.bind(null,r,o,e),[e]),r.flags|=2048,To(9,Eo.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bo(),t=Ps.identifierPrefix;if(ai){var n=Xa;t=":"+t+"R"+(n=(qa&~(1<<32-ot(qa)-1)).toString(32)+n),0<(n=po++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:ji,useCallback:Bo,useContext:ji,useEffect:Oo,useImperativeHandle:Mo,useInsertionEffect:Io,useLayoutEffect:Do,useMemo:Wo,useReducer:wo,useRef:No,useState:function(){return wo(xo)},useDebugValue:Uo,useDeferredValue:function(e){return Ho(vo(),lo.memoizedState,e)},useTransition:function(){return[wo(xo)[0],vo().memoizedState]},useMutableSource:So,useSyncExternalStore:$o,useId:Go,unstable_isNewReconciler:!1},tl={readContext:ji,useCallback:Bo,useContext:ji,useEffect:Oo,useImperativeHandle:Mo,useInsertionEffect:Io,useLayoutEffect:Do,useMemo:Wo,useReducer:ko,useRef:No,useState:function(){return ko(xo)},useDebugValue:Uo,useDeferredValue:function(e){var t=vo();return null===lo?t.memoizedState=e:Ho(t,lo.memoizedState,e)},useTransition:function(){return[ko(xo)[0],vo().memoizedState]},useMutableSource:So,useSyncExternalStore:$o,useId:Go,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=I({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:I({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),a=tc(e),i=Di(r,a);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,a))&&(nc(t,e,a,r),Mi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),a=tc(e),i=Di(r,a);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,a))&&(nc(t,e,a,r),Mi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),a=Di(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Fi(e,a,r))&&(nc(t,e,r,n),Mi(t,e,r))}};function il(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,i))}function ol(e,t,n){var r=!1,a=za,i=t.contextType;return"object"===typeof i&&null!==i?i=ji(i):(a=Na(t)?ja:_a.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ta(e,a):za),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Oi(e);var i=t.contextType;"object"===typeof i&&null!==i?a.context=ji(i):(i=Na(t)?ja:_a.current,a.context=Ta(e,i)),a.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rl(e,t,i,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Bi(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var pl="function"===typeof WeakMap?WeakMap:Map;function fl(e,t,n){(n=Di(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,Vs=r),dl(0,t)},n}function gl(e,t,n){(n=Di(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Gs?Gs=new Set([this]):Gs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function hl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function yl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Di(-1,1)).tag=2,Fi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var bl=x.ReactCurrentOwner,vl=!1;function xl(e,t,n,r){t.child=null===e?wi(t,null,n,r):xi(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var i=t.ref;return Pi(t,a),r=ho(e,t,n,r,i,a),n=yo(),null===e||vl?(ai&&n&&ei(t),t.flags|=1,xl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hl(e,t,a))}function kl(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Nc(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Rc(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Sl(e,t,i,r,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(o,r)&&e.ref===t.ref)return Hl(e,t,a)}return t.flags|=1,(e=Ac(i,r)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(vl=!1,t.pendingProps=r=i,0===(e.lanes&a))return t.lanes=e.lanes,Hl(e,t,a);0!==(131072&e.flags)&&(vl=!0)}}return El(e,t,n,r,a)}function $l(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ea(As,Ns),Ns|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ea(As,Ns),Ns|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Ea(As,Ns),Ns|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ea(As,Ns),Ns|=r;return xl(e,t,a,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,a){var i=Na(n)?ja:_a.current;return i=Ta(t,i),Pi(t,a),n=ho(e,t,n,r,i,a),r=yo(),null===e||vl?(ai&&r&&ei(t),t.flags|=1,xl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hl(e,t,a))}function zl(e,t,n,r,a){if(Na(n)){var i=!0;Oa(t)}else i=!1;if(Pi(t,a),null===t.stateNode)Wl(e,t),ol(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,c=n.contextType;"object"===typeof c&&null!==c?c=ji(c):c=Ta(t,c=Na(n)?ja:_a.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,o,r,c),Li=!1;var p=t.memoizedState;o.state=p,Bi(t,r,o,a),s=t.memoizedState,l!==r||p!==s||Pa.current||Li?("function"===typeof u&&(rl(t,n,u,r),s=t.memoizedState),(l=Li||il(t,n,l,r,p,s,c))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ii(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),o.props=c,d=t.pendingProps,p=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=ji(s):s=Ta(t,s=Na(n)?ja:_a.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||p!==s)&&ll(t,o,r,s),Li=!1,p=t.memoizedState,o.state=p,Bi(t,r,o,a);var g=t.memoizedState;l!==d||p!==g||Pa.current||Li?("function"===typeof f&&(rl(t,n,f,r),g=t.memoizedState),(c=Li||il(t,n,c,r,p,g,s)||!1)?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,g,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,g,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=s,r=c):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return _l(e,t,n,r,i,a)}function _l(e,t,n,r,a,i){Cl(e,t);var o=0!==(128&t.flags);if(!r&&!o)return a&&Ia(t,n,!1),Hl(e,t,i);r=t.stateNode,bl.current=t;var l=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=xi(t,e.child,null,i),t.child=xi(t,null,l,i)):xl(e,t,l,i),t.memoizedState=r.state,a&&Ia(t,n,!0),t.child}function Pl(e){var t=e.stateNode;t.pendingContext?Ra(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ra(0,t.context,!1),Qi(e,t.containerInfo)}function jl(e,t,n,r,a){return fi(),gi(a),t.flags|=256,xl(e,t,n,r),t.child}var Tl,Nl,Al,Rl,Ll={dehydrated:null,treeContext:null,retryLane:0};function Ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function Il(e,t,n){var r,a=t.pendingProps,o=Zi.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ea(Zi,1&o),null===e)return ci(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Oc(s,a,0,null),e=Lc(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ol(n),t.memoizedState=Ll,e):Dl(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,a,o,l){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,l,r=ul(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Oc({mode:"visible",children:r.children},a,0,null),(o=Lc(o,a,l,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&xi(t,e.child,null,l),t.child.memoizedState=Ol(l),t.memoizedState=Ll,o);if(0===(1&t.mode))return Fl(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Fl(e,t,l,r=ul(o=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),vl||s){if(null!==(r=Ps)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==o.retryLane&&(o.retryLane=a,Ri(e,a),nc(r,e,a,-1))}return mc(),Fl(e,t,l,r=ul(Error(i(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=zc.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ri=ca(a.nextSibling),ni=t,ai=!0,ii=null,null!==e&&(Ka[Ya++]=qa,Ka[Ya++]=Xa,Ka[Ya++]=Qa,qa=e.id,Xa=e.overflow,Qa=t),t=Dl(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,o,n);if(l){l=a.fallback,s=t.mode,r=(o=e.child).sibling;var c={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==o?((a=t.child).childLanes=0,a.pendingProps=c,t.deletions=null):(a=Ac(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==r?l=Ac(r,l):(l=Lc(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Ol(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ll,a}return e=(l=e.child).sibling,a=Ac(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Dl(e,t){return(t=Oc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&gi(r),xi(t,e.child,null,n),(e=Dl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ml(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),_i(e.return,t,n)}function Ul(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Bl(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=Zi.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ml(e,n,t);else if(19===e.tag)Ml(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ea(Zi,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ul(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===eo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ul(t,!0,n,null,i);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Os|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Ac(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ac(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Gl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gl(t),null;case 1:case 17:return Na(t.type)&&Aa(),Gl(t),null;case 3:return r=t.stateNode,qi(),Ca(Pa),Ca(_a),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(di(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ii&&(oc(ii),ii=null))),Nl(e,t),Gl(t),null;case 5:Ji(t);var a=Yi(Ki.current);if(n=t.type,null!==e&&null!=t.stateNode)Al(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Gl(t),null}if(e=Yi(Vi.current),di(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pa]=t,r[fa]=o,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(a=0;a<Lr.length;a++)Fr(Lr[a],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":q(r,o),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Fr("invalid",r);break;case"textarea":ae(r,o),Fr("invalid",r)}for(var s in be(n,o),a=null,o)if(o.hasOwnProperty(s)){var c=o[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),a=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),a=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&Fr("scroll",r)}switch(n){case"input":G(r),Z(r,o,!0);break;case"textarea":G(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Zr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[pa]=t,e[fa]=r,Tl(e,t,!1,!1),t.stateNode=e;e:{switch(s=ve(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),a=r;break;case"iframe":case"object":case"embed":Fr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Lr.length;a++)Fr(Lr[a],e);a=r;break;case"source":Fr("error",e),a=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),a=r;break;case"details":Fr("toggle",e),a=r;break;case"input":q(e,r),a=Q(e,r),Fr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=I({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Fr("invalid",e)}for(o in be(n,a),c=a)if(c.hasOwnProperty(o)){var u=c[o];"style"===o?he(e,u):"dangerouslySetInnerHTML"===o?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===o?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=u&&"onScroll"===o&&Fr("scroll",e):null!=u&&v(e,o,u,s))}switch(n){case"input":G(e),Z(e,r,!1);break;case"textarea":G(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Gl(t),null;case 6:if(e&&null!=t.stateNode)Rl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Yi(Ki.current),Yi(Vi.current),di(t)){if(r=t.stateNode,n=t.memoizedProps,r[pa]=t,(o=r.nodeValue!==n)&&null!==(e=ni))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pa]=t,t.stateNode=r}return Gl(t),null;case 13:if(Ca(Zi),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ai&&null!==ri&&0!==(1&t.mode)&&0===(128&t.flags))pi(),fi(),t.flags|=98560,o=!1;else if(o=di(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(i(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(i(317));o[pa]=t}else fi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gl(t),o=!1}else null!==ii&&(oc(ii),ii=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Zi.current)?0===Rs&&(Rs=3):mc())),null!==t.updateQueue&&(t.flags|=4),Gl(t),null);case 4:return qi(),Nl(e,t),null===e&&Br(t.stateNode.containerInfo),Gl(t),null;case 10:return zi(t.type._context),Gl(t),null;case 19:if(Ca(Zi),null===(o=t.memoizedState))return Gl(t),null;if(r=0!==(128&t.flags),null===(s=o.rendering))if(r)Vl(o,!1);else{if(0!==Rs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Vl(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ea(Zi,1&Zi.current|2),t.child}e=e.sibling}null!==o.tail&&Xe()>Bs&&(t.flags|=128,r=!0,Vl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ai)return Gl(t),null}else 2*Xe()-o.renderingStartTime>Bs&&1073741824!==n&&(t.flags|=128,r=!0,Vl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xe(),t.sibling=null,n=Zi.current,Ea(Zi,r?1&n|2:1&n),t):(Gl(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ns)&&(Gl(t),6&t.subtreeFlags&&(t.flags|=8192)):Gl(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Yl(e,t){switch(ti(t),t.tag){case 1:return Na(t.type)&&Aa(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return qi(),Ca(Pa),Ca(_a),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ji(t),null;case 13:if(Ca(Zi),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));fi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ca(Zi),null;case 4:return qi(),null;case 10:return zi(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Tl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Nl=function(){},Al=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Yi(Vi.current);var i,o=null;switch(n){case"input":a=Q(e,a),r=Q(e,r),o=[];break;case"select":a=I({},a,{value:void 0}),r=I({},r,{value:void 0}),o=[];break;case"textarea":a=re(e,a),r=re(e,r),o=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in be(n,r),n=null,a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if("style"===u){var s=a[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=a?a[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(i in s)!s.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&s[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(o||(o=[]),o.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(o=o||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Fr("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Rl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ql=!1,ql=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Jl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){$c(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){$c(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&es(t,n,i)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pa],delete t[fa],delete t[ma],delete t[ha],delete t[ya])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var us=null,ds=!1;function ps(e,t,n){for(n=n.child;null!==n;)fs(e,t,n),n=n.sibling}function fs(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:ql||Zl(n,t);case 6:var r=us,a=ds;us=null,ps(e,t,n),ds=a,null!==(us=r)&&(ds?(e=us,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):us.removeChild(n.stateNode));break;case 18:null!==us&&(ds?(e=us,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Bt(e)):sa(us,n.stateNode));break;case 4:r=us,a=ds,us=n.stateNode.containerInfo,ds=!0,ps(e,t,n),us=r,ds=a;break;case 0:case 11:case 14:case 15:if(!ql&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(0!==(2&i)||0!==(4&i))&&es(n,t,o),a=a.next}while(a!==r)}ps(e,t,n);break;case 1:if(!ql&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){$c(n,t,l)}ps(e,t,n);break;case 21:ps(e,t,n);break;case 22:1&n.mode?(ql=(r=ql)||null!==n.memoizedState,ps(e,t,n),ql=r):ps(e,t,n);break;default:ps(e,t,n)}}function gs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach((function(t){var r=_c.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(i(160));fs(o,l,a),us=null,ds=!1;var c=a.alternate;null!==c&&(c.return=null),a.return=null}catch(u){$c(a,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)hs(t,e),t=t.sibling}function hs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),ys(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(h){$c(e,e.return,h)}try{ns(5,e,e.return)}catch(h){$c(e,e.return,h)}}break;case 1:ms(t,e),ys(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(ms(t,e),ys(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var a=e.stateNode;try{pe(a,"")}catch(h){$c(e,e.return,h)}}if(4&r&&null!=(a=e.stateNode)){var o=e.memoizedProps,l=null!==n?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===o.type&&null!=o.name&&X(a,o),ve(s,l);var u=ve(s,o);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];"style"===d?he(a,p):"dangerouslySetInnerHTML"===d?de(a,p):"children"===d?pe(a,p):v(a,d,p,u)}switch(s){case"input":J(a,o);break;case"textarea":ie(a,o);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var g=o.value;null!=g?ne(a,!!o.multiple,g,!1):f!==!!o.multiple&&(null!=o.defaultValue?ne(a,!!o.multiple,o.defaultValue,!0):ne(a,!!o.multiple,o.multiple?[]:"",!1))}a[fa]=o}catch(h){$c(e,e.return,h)}}break;case 6:if(ms(t,e),ys(e),4&r){if(null===e.stateNode)throw Error(i(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(h){$c(e,e.return,h)}}break;case 3:if(ms(t,e),ys(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(h){$c(e,e.return,h)}break;case 4:default:ms(t,e),ys(e);break;case 13:ms(t,e),ys(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Us=Xe())),4&r&&gs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(ql=(u=ql)||d,ms(t,e),ql=u):ms(t,e),ys(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Jl=e,d=e.child;null!==d;){for(p=Jl=d;null!==Jl;){switch(g=(f=Jl).child,f.tag){case 0:case 11:case 14:case 15:ns(4,f,f.return);break;case 1:Zl(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(h){$c(r,n,h)}}break;case 5:Zl(f,f.return);break;case 22:if(null!==f.memoizedState){ws(p);continue}}null!==g?(g.return=f,Jl=g):ws(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{a=p.stateNode,u?"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=p.stateNode,l=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=me("display",l))}catch(h){$c(e,e.return,h)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(h){$c(e,e.return,h)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ms(t,e),ys(e),4&r&&gs(e);case 21:}}function ys(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(os(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(pe(a,""),r.flags&=-33),cs(e,ls(e),a);break;case 3:case 4:var o=r.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(i(161))}}catch(l){$c(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bs(e,t,n){Jl=e,vs(e,t,n)}function vs(e,t,n){for(var r=0!==(1&e.mode);null!==Jl;){var a=Jl,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||Ql;if(!o){var l=a.alternate,s=null!==l&&null!==l.memoizedState||ql;l=Ql;var c=ql;if(Ql=o,(ql=s)&&!c)for(Jl=a;null!==Jl;)s=(o=Jl).child,22===o.tag&&null!==o.memoizedState?ks(a):null!==s?(s.return=o,Jl=s):ks(a);for(;null!==i;)Jl=i,vs(i,t,n),i=i.sibling;Jl=a,Ql=l,ql=c}xs(e)}else 0!==(8772&a.subtreeFlags)&&null!==i?(i.return=a,Jl=i):xs(e)}}function xs(e){for(;null!==Jl;){var t=Jl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:ql||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!ql)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Wi(t,o,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wi(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Bt(p)}}}break;default:throw Error(i(163))}ql||512&t.flags&&as(t)}catch(f){$c(t,t.return,f)}}if(t===e){Jl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jl=n;break}Jl=t.return}}function ws(e){for(;null!==Jl;){var t=Jl;if(t===e){Jl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jl=n;break}Jl=t.return}}function ks(e){for(;null!==Jl;){var t=Jl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){$c(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){$c(t,a,s)}}var i=t.return;try{as(t)}catch(s){$c(t,i,s)}break;case 5:var o=t.return;try{as(t)}catch(s){$c(t,o,s)}}}catch(s){$c(t,t.return,s)}if(t===e){Jl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Jl=l;break}Jl=t.return}}var Ss,$s=Math.ceil,Cs=x.ReactCurrentDispatcher,Es=x.ReactCurrentOwner,zs=x.ReactCurrentBatchConfig,_s=0,Ps=null,js=null,Ts=0,Ns=0,As=$a(0),Rs=0,Ls=null,Os=0,Is=0,Ds=0,Fs=null,Ms=null,Us=0,Bs=1/0,Ws=null,Hs=!1,Vs=null,Gs=null,Ks=!1,Ys=null,Qs=0,qs=0,Xs=null,Js=-1,Zs=0;function ec(){return 0!==(6&_s)?Xe():-1!==Js?Js:Js=Xe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&_s)&&0!==Ts?Ts&-Ts:null!==mi.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=vt)?e:e=void 0===(e=window.event)?16:qt(e.type)}function nc(e,t,n,r){if(50<qs)throw qs=0,Xs=null,Error(i(185));yt(e,n,r),0!==(2&_s)&&e===Ps||(e===Ps&&(0===(2&_s)&&(Is|=n),4===Rs&&lc(e,Ts)),rc(e,r),1===n&&0===_s&&0===(1&t.mode)&&(Bs=Xe()+500,Fa&&Ba()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ot(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=ft(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=pt(e,e===Ps?Ts:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Fa=!0,Ua(e)}(sc.bind(null,e)):Ua(sc.bind(null,e)),oa((function(){0===(6&_s)&&Ba()})),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pc(n,ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ac(e,t){if(Js=-1,Zs=0,0!==(6&_s))throw Error(i(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=pt(e,e===Ps?Ts:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=hc(e,r);else{t=r;var a=_s;_s|=2;var o=gc();for(Ps===e&&Ts===t||(Ws=null,Bs=Xe()+500,pc(e,t));;)try{bc();break}catch(s){fc(e,s)}Ei(),Cs.current=o,_s=a,null!==js?t=0:(Ps=null,Ts=0,t=Rs)}if(0!==t){if(2===t&&(0!==(a=gt(e))&&(r=a,t=ic(e,a))),1===t)throw n=Ls,pc(e,0),lc(e,r),rc(e,Xe()),n;if(6===t)lc(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!lr(i(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=hc(e,r))&&(0!==(o=gt(e))&&(r=o,t=ic(e,o))),1===t))throw n=Ls,pc(e,0),lc(e,r),rc(e,Xe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wc(e,Ms,Ws);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Us+500-Xe())){if(0!==pt(e,0))break;if(((a=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wc.bind(null,e,Ms,Ws),t);break}wc(e,Ms,Ws);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-ot(r);o=1<<l,(l=t[l])>a&&(a=l),r&=~o}if(r=a,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$s(r/1960))-r)){e.timeoutHandle=ra(wc.bind(null,e,Ms,Ws),r);break}wc(e,Ms,Ws);break;default:throw Error(i(329))}}}return rc(e,Xe()),e.callbackNode===n?ac.bind(null,e):null}function ic(e,t){var n=Fs;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=hc(e,t))&&(t=Ms,Ms=n,null!==t&&oc(t)),e}function oc(e){null===Ms?Ms=e:Ms.push.apply(Ms,e)}function lc(e,t){for(t&=~Ds,t&=~Is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&_s))throw Error(i(327));kc();var t=pt(e,0);if(0===(1&t))return rc(e,Xe()),null;var n=hc(e,t);if(0!==e.tag&&2===n){var r=gt(e);0!==r&&(t=r,n=ic(e,r))}if(1===n)throw n=Ls,pc(e,0),lc(e,t),rc(e,Xe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Ms,Ws),rc(e,Xe()),null}function cc(e,t){var n=_s;_s|=1;try{return e(t)}finally{0===(_s=n)&&(Bs=Xe()+500,Fa&&Ba())}}function uc(e){null!==Ys&&0===Ys.tag&&0===(6&_s)&&kc();var t=_s;_s|=1;var n=zs.transition,r=vt;try{if(zs.transition=null,vt=1,e)return e()}finally{vt=r,zs.transition=n,0===(6&(_s=t))&&Ba()}}function dc(){Ns=As.current,Ca(As)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==js)for(n=js.return;null!==n;){var r=n;switch(ti(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Aa();break;case 3:qi(),Ca(Pa),Ca(_a),no();break;case 5:Ji(r);break;case 4:qi();break;case 13:case 19:Ca(Zi);break;case 10:zi(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Ps=e,js=e=Ac(e.current,null),Ts=Ns=t,Rs=0,Ls=null,Ds=Is=Os=0,Ms=Fs=null,null!==Ti){for(t=0;t<Ti.length;t++)if(null!==(r=(n=Ti[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}Ti=null}return e}function fc(e,t){for(;;){var n=js;try{if(Ei(),ro.current=Jo,co){for(var r=oo.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}co=!1}if(io=0,so=lo=oo=null,uo=!1,po=0,Es.current=null,null===n||null===n.return){Rs=1,Ls=t,js=null;break}e:{var o=e,l=n.return,s=n,c=t;if(t=Ts,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=hl(l);if(null!==g){g.flags&=-257,yl(g,l,s,0,t),1&g.mode&&ml(o,u,t),c=u;var m=(t=g).updateQueue;if(null===m){var h=new Set;h.add(c),t.updateQueue=h}else m.add(c);break e}if(0===(1&t)){ml(o,u,t),mc();break e}c=Error(i(426))}else if(ai&&1&s.mode){var y=hl(l);if(null!==y){0===(65536&y.flags)&&(y.flags|=256),yl(y,l,s,0,t),gi(cl(c,s));break e}}o=c=cl(c,s),4!==Rs&&(Rs=2),null===Fs?Fs=[o]:Fs.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ui(o,fl(0,c,t));break e;case 1:s=c;var b=o.type,v=o.stateNode;if(0===(128&o.flags)&&("function"===typeof b.getDerivedStateFromError||null!==v&&"function"===typeof v.componentDidCatch&&(null===Gs||!Gs.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t,Ui(o,gl(o,s,t));break e}}o=o.return}while(null!==o)}xc(n)}catch(x){t=x,js===n&&null!==n&&(js=n=n.return);continue}break}}function gc(){var e=Cs.current;return Cs.current=Jo,null===e?Jo:e}function mc(){0!==Rs&&3!==Rs&&2!==Rs||(Rs=4),null===Ps||0===(268435455&Os)&&0===(268435455&Is)||lc(Ps,Ts)}function hc(e,t){var n=_s;_s|=2;var r=gc();for(Ps===e&&Ts===t||(Ws=null,pc(e,t));;)try{yc();break}catch(a){fc(e,a)}if(Ei(),_s=n,Cs.current=r,null!==js)throw Error(i(261));return Ps=null,Ts=0,Rs}function yc(){for(;null!==js;)vc(js)}function bc(){for(;null!==js&&!Qe();)vc(js)}function vc(e){var t=Ss(e.alternate,e,Ns);e.memoizedProps=e.pendingProps,null===t?xc(e):js=t,Es.current=null}function xc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,Ns)))return void(js=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(js=n);if(null===e)return Rs=6,void(js=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(js=t);js=t=e}while(null!==t);0===Rs&&(Rs=5)}function wc(e,t,n){var r=vt,a=zs.transition;try{zs.transition=null,vt=1,function(e,t,n,r){do{kc()}while(null!==Ys);if(0!==(6&_s))throw Error(i(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,o),e===Ps&&(js=Ps=null,Ts=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,Pc(tt,(function(){return kc(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=zs.transition,zs.transition=null;var l=vt;vt=1;var s=_s;_s|=4,Es.current=null,function(e,t){if(ea=Ht,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var g;p!==n||0!==a&&3!==p.nodeType||(s=l+a),p!==o||0!==r&&3!==p.nodeType||(c=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(g=p.firstChild);)f=p,p=g;for(;;){if(p===e)break t;if(f===n&&++u===a&&(s=l),f===o&&++d===r&&(c=l),null!==(g=p.nextSibling))break;f=(p=f).parentNode}p=g}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Ht=!1,Jl=t;null!==Jl;)if(e=(t=Jl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jl=e;else for(;null!==Jl;){t=Jl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var h=m.memoizedProps,y=m.memoizedState,b=t.stateNode,v=b.getSnapshotBeforeUpdate(t.elementType===t.type?h:nl(t.type,h),y);b.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(i(163))}}catch(w){$c(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Jl=e;break}Jl=t.return}m=ts,ts=!1}(e,n),hs(n,e),gr(ta),Ht=!!ea,ta=ea=null,e.current=n,bs(n,e,a),qe(),_s=s,vt=l,zs.transition=o}else e.current=n;if(Ks&&(Ks=!1,Ys=e,Qs=a),o=e.pendingLanes,0===o&&(Gs=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&Qs)&&0!==e.tag&&kc(),o=e.pendingLanes,0!==(1&o)?e===Xs?qs++:(qs=0,Xs=e):qs=0,Ba()}(e,t,n,r)}finally{zs.transition=a,vt=r}return null}function kc(){if(null!==Ys){var e=xt(Qs),t=zs.transition,n=vt;try{if(zs.transition=null,vt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,Qs=0,0!==(6&_s))throw Error(i(331));var a=_s;for(_s|=4,Jl=e.current;null!==Jl;){var o=Jl,l=o.child;if(0!==(16&Jl.flags)){var s=o.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Jl=u;null!==Jl;){var d=Jl;switch(d.tag){case 0:case 11:case 15:ns(8,d,o)}var p=d.child;if(null!==p)p.return=d,Jl=p;else for(;null!==Jl;){var f=(d=Jl).sibling,g=d.return;if(is(d),d===u){Jl=null;break}if(null!==f){f.return=g,Jl=f;break}Jl=g}}}var m=o.alternate;if(null!==m){var h=m.child;if(null!==h){m.child=null;do{var y=h.sibling;h.sibling=null,h=y}while(null!==h)}}Jl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Jl=l;else e:for(;null!==Jl;){if(0!==(2048&(o=Jl).flags))switch(o.tag){case 0:case 11:case 15:ns(9,o,o.return)}var b=o.sibling;if(null!==b){b.return=o.return,Jl=b;break e}Jl=o.return}}var v=e.current;for(Jl=v;null!==Jl;){var x=(l=Jl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Jl=x;else e:for(l=v;null!==Jl;){if(0!==(2048&(s=Jl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){$c(s,s.return,k)}if(s===l){Jl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Jl=w;break e}Jl=s.return}}if(_s=a,Ba(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(at,e)}catch(k){}r=!0}return r}finally{vt=n,zs.transition=t}}return!1}function Sc(e,t,n){e=Fi(e,t=fl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(yt(e,1,t),rc(e,t))}function $c(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Gs||!Gs.has(r))){t=Fi(t,e=gl(t,e=cl(n,e),1),1),e=ec(),null!==t&&(yt(t,1,e),rc(t,e));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Ps===e&&(Ts&n)===n&&(4===Rs||3===Rs&&(130023424&Ts)===Ts&&500>Xe()-Us?pc(e,0):Ds|=n),rc(e,t)}function Ec(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Ri(e,t))&&(yt(e,t,n),rc(e,n))}function zc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ec(e,n)}function _c(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Ec(e,n)}function Pc(e,t){return Ke(e,t)}function jc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tc(e,t,n,r){return new jc(e,t,n,r)}function Nc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ac(e,t){var n=e.alternate;return null===n?((n=Tc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rc(e,t,n,r,a,o){var l=2;if(r=e,"function"===typeof e)Nc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Lc(n.children,a,o,t);case $:l=8,a|=8;break;case C:return(e=Tc(12,n,t,2|a)).elementType=C,e.lanes=o,e;case P:return(e=Tc(13,n,t,a)).elementType=P,e.lanes=o,e;case j:return(e=Tc(19,n,t,a)).elementType=j,e.lanes=o,e;case A:return Oc(n,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:l=10;break e;case z:l=9;break e;case _:l=11;break e;case T:l=14;break e;case N:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Tc(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Lc(e,t,n,r){return(e=Tc(7,e,r,t)).lanes=n,e}function Oc(e,t,n,r){return(e=Tc(22,e,r,t)).elementType=A,e.lanes=n,e.stateNode={isHidden:!1},e}function Ic(e,t,n){return(e=Tc(6,e,null,t)).lanes=n,e}function Dc(e,t,n){return(t=Tc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ht(0),this.expirationTimes=ht(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ht(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Mc(e,t,n,r,a,i,o,l,s){return e=new Fc(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Tc(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oi(i),e}function Uc(e){if(!e)return za;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Na(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Na(n))return La(e,n,t)}return t}function Bc(e,t,n,r,a,i,o,l,s){return(e=Mc(n,r,!0,e,0,i,0,l,s)).context=Uc(null),n=e.current,(i=Di(r=ec(),a=tc(n))).callback=void 0!==t&&null!==t?t:null,Fi(n,i,a),e.current.lanes=a,yt(e,a,r),rc(e,r),e}function Wc(e,t,n,r){var a=t.current,i=ec(),o=tc(a);return n=Uc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Di(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fi(a,t,o))&&(nc(e,a,o,i),Mi(e,a,o)),o}function Hc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Gc(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}Ss=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pa.current)vl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return vl=!1,function(e,t,n){switch(t.tag){case 3:Pl(t),fi();break;case 5:Xi(t);break;case 1:Na(t.type)&&Oa(t);break;case 4:Qi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ea(ki,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ea(Zi,1&Zi.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Il(e,t,n):(Ea(Zi,1&Zi.current),null!==(e=Hl(e,t,n))?e.sibling:null);Ea(Zi,1&Zi.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ea(Zi,Zi.current),r)break;return null;case 22:case 23:return t.lanes=0,$l(e,t,n)}return Hl(e,t,n)}(e,t,n);vl=0!==(131072&e.flags)}else vl=!1,ai&&0!==(1048576&t.flags)&&Za(t,Ga,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var a=Ta(t,_a.current);Pi(t,n),a=ho(null,t,r,e,a,n);var o=yo();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Na(r)?(o=!0,Oa(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Oi(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=_l(null,t,r,!0,o,n)):(t.tag=0,ai&&o&&ei(t),xl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Nc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===_)return 11;if(e===T)return 14}return 2}(r),e=nl(r,e),a){case 0:t=El(null,t,r,e,n);break e;case 1:t=zl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,El(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,zl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(Pl(t),null===e)throw Error(i(387));r=t.pendingProps,a=(o=t.memoizedState).element,Ii(e,t),Bi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=jl(e,t,r,n,a=cl(Error(i(423)),t));break e}if(r!==a){t=jl(e,t,r,n,a=cl(Error(i(424)),t));break e}for(ri=ca(t.stateNode.containerInfo.firstChild),ni=t,ai=!0,ii=null,n=wi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fi(),r===a){t=Hl(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Xi(t),null===e&&ci(t),r=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==o&&na(r,o)&&(t.flags|=32),Cl(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&ci(t),null;case 13:return Il(e,t,n);case 4:return Qi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=xi(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,Ea(ki,r._currentValue),r._currentValue=l,null!==o)if(lr(o.value,l)){if(o.children===a.children&&!Pa.current){t=Hl(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===o.tag){(c=Di(-1,n&-n)).tag=2;var u=o.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),_i(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),_i(l,n,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}xl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Pi(t,n),r=r(a=ji(a)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),kl(e,t,r,a=nl(r.type,a),n);case 15:return Sl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Wl(e,t),t.tag=1,Na(r)?(e=!0,Oa(t)):e=!1,Pi(t,n),ol(t,r,a),sl(t,r,a,n),_l(null,t,r,!0,e,n);case 19:return Bl(e,t,n);case 22:return $l(e,t,n)}throw Error(i(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}function Qc(e){this._internalRoot=e}function qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"===typeof a){var l=a;a=function(){var e=Hc(o);l.call(e)}}Wc(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"===typeof r){var i=r;r=function(){var e=Hc(o);i.call(e)}}var o=Bc(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=o,e[ga]=o.current,Br(8===e.nodeType?e.parentNode:e),uc(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Hc(s);l.call(e)}}var s=Mc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=s,e[ga]=s.current,Br(8===e.nodeType?e.parentNode:e),uc((function(){Wc(t,s,n,r)})),s}(n,t,e,a,r);return Hc(o)}Qc.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Wc(e,t,null,null)},Qc.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Wc(null,e,null,null)})),t[ga]=null}},Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=$t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&0!==t&&t<At[n].priority;n++);At.splice(n,0,e),0===n&&It(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(bt(t,1|n),rc(t,Xe()),0===(6&_s)&&(Bs=Xe()+500,Ba()))}break;case 13:uc((function(){var t=Ri(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Gc(e,1)}},kt=function(e){if(13===e.tag){var t=Ri(e,134217728);if(null!==t)nc(t,e,134217728,ec());Gc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Ri(e,t);if(null!==n)nc(n,e,t,ec());Gc(e,t)}},$t=function(){return vt},Ct=function(e,t){var n=vt;try{return vt=e,t()}finally{vt=n}},ke=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(i(90));K(r),J(r,a)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},_e=cc,Pe=uc;var eu={usingClientEntryPoint:!1,Events:[va,xa,wa,Ee,ze,cc]},tu={findFiberByHostInstance:ba,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{at=ru.inject(nu),it=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qc(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!qc(e))throw Error(i(299));var n=!1,r="",a=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Mc(e,1,!1,null,0,n,0,r,a),e[ga]=t.current,Br(8===e.nodeType?e.parentNode:e),new Yc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Xc(t))throw Error(i(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!qc(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,a=!1,o="",l=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Bc(t,null,e,1,null!=n?n:null,a,0,o,l),e[ga]=t.current,Br(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Qc(t)},t.render=function(e,t,n){if(!Xc(t))throw Error(i(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xc(e))throw Error(i(40));return!!e._reactRootContainer&&(uc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ga]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xc(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391);var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.create;function a(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var i=n(324),o=n.n(i),l="-ms-",s="-moz-",c="-webkit-",u="comm",d="rule",p="decl",f="@keyframes",g=Math.abs,m=String.fromCharCode,h=Object.assign;function y(e){return e.trim()}function b(e,t){return(e=t.exec(e))?e[0]:e}function v(e,t,n){return e.replace(t,n)}function x(e,t,n){return e.indexOf(t,n)}function w(e,t){return 0|e.charCodeAt(t)}function k(e,t,n){return e.slice(t,n)}function S(e){return e.length}function $(e){return e.length}function C(e,t){return t.push(e),e}function E(e,t){return e.filter((function(e){return!b(e,t)}))}var z=1,_=1,P=0,j=0,T=0,N="";function A(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:z,column:_,length:o,return:"",siblings:l}}function R(e,t){return h(A("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function L(e){for(;e.root;)e=R(e.root,{children:[e]});C(e,e.siblings)}function O(){return T=j>0?w(N,--j):0,_--,10===T&&(_=1,z--),T}function I(){return T=j<P?w(N,j++):0,_++,10===T&&(_=1,z++),T}function D(){return w(N,j)}function F(){return j}function M(e,t){return k(N,e,t)}function U(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B(e){return z=_=1,P=S(N=e),j=0,[]}function W(e){return N="",e}function H(e){return y(M(j-1,K(91===e?e+2:40===e?e+1:e)))}function V(e){for(;(T=D())&&T<33;)I();return U(e)>2||U(T)>3?"":" "}function G(e,t){for(;--t&&I()&&!(T<48||T>102||T>57&&T<65||T>70&&T<97););return M(e,F()+(t<6&&32==D()&&32==I()))}function K(e){for(;I();)switch(T){case e:return j;case 34:case 39:34!==e&&39!==e&&K(T);break;case 40:41===e&&K(e);break;case 92:I()}return j}function Y(e,t){for(;I()&&e+T!==57&&(e+T!==84||47!==D()););return"/*"+M(t,j-1)+"*"+m(47===e?e:I())}function Q(e){for(;!U(D());)I();return M(e,j)}function q(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function X(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case p:return e.return=e.return||e.value;case u:return"";case f:return e.return=e.value+"{"+q(e.children,r)+"}";case d:if(!S(e.value=e.props.join(",")))return""}return S(n=q(e.children,r))?e.return=e.value+"{"+n+"}":""}function J(e,t,n){switch(function(e,t){return 45^w(e,0)?(((t<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}(e,t)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 4789:return s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+s+e+l+e+e;case 5936:switch(w(e,t+11)){case 114:return c+e+l+v(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+l+v(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+l+v(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return c+e+l+e+e;case 6165:return c+e+l+"flex-"+e+e;case 5187:return c+e+v(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return c+e+l+"flex-item-"+v(e,/flex-|-self/g,"")+(b(e,/flex-|baseline/)?"":l+"grid-row-"+v(e,/flex-|-self/g,""))+e;case 4675:return c+e+l+"flex-line-pack"+v(e,/align-content|flex-|-self/g,"")+e;case 5548:return c+e+l+v(e,"shrink","negative")+e;case 5292:return c+e+l+v(e,"basis","preferred-size")+e;case 6060:return c+"box-"+v(e,"-grow","")+c+e+l+v(e,"grow","positive")+e;case 4554:return c+v(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return v(v(v(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return v(e,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return v(v(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4200:if(!b(e,/flex-|baseline/))return l+"grid-column-align"+k(e,t)+e;break;case 2592:case 3360:return l+v(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,b(e.props,/grid-\w+-end/)}))?~x(e+(n=n[t].value),"span",0)?e:l+v(e,"-start","")+e+l+"grid-row-span:"+(~x(n,"span",0)?b(n,/\d+/):+b(n,/\d+/)-+b(e,/\d+/))+";":l+v(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return b(e.props,/grid-\w+-start/)}))?e:l+v(v(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return v(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(S(e)-1-t>6)switch(w(e,t+1)){case 109:if(45!==w(e,t+4))break;case 102:return v(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+s+(108==w(e,t+3)?"$3":"$2-$3"))+e;case 115:return~x(e,"stretch",0)?J(v(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return v(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,i,o,s){return l+n+":"+r+s+(a?l+n+"-span:"+(i?o:+o-+r)+s:"")+e}));case 4949:if(121===w(e,t+6))return v(e,":",":"+c)+e;break;case 6444:switch(w(e,45===w(e,14)?18:11)){case 120:return v(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(45===w(e,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+l+"$2box$3")+e;case 100:return v(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return v(e,"scroll-","scroll-snap-")+e}return e}function Z(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case p:return void(e.return=J(e.value,e.length,n));case f:return q([R(e,{value:v(e.value,"@","@"+c)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(b(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":L(R(e,{props:[v(t,/:(read-\w+)/,":-moz-$1")]})),L(R(e,{props:[t]})),h(e,{props:E(n,r)});break;case"::placeholder":L(R(e,{props:[v(t,/:(plac\w+)/,":"+c+"input-$1")]})),L(R(e,{props:[v(t,/:(plac\w+)/,":-moz-$1")]})),L(R(e,{props:[v(t,/:(plac\w+)/,l+"input-$1")]})),L(R(e,{props:[t]})),h(e,{props:E(n,r)})}return""}))}}function ee(e){return W(te("",null,null,null,[""],e=B(e),0,[0],e))}function te(e,t,n,r,a,i,o,l,s){for(var c=0,u=0,d=o,p=0,f=0,h=0,y=1,b=1,k=1,$=0,E="",z=a,_=i,P=r,j=E;b;)switch(h=$,$=I()){case 40:if(108!=h&&58==w(j,d-1)){-1!=x(j+=v(H($),"&","&\f"),"&\f",g(c?l[c-1]:0))&&(k=-1);break}case 34:case 39:case 91:j+=H($);break;case 9:case 10:case 13:case 32:j+=V(h);break;case 92:j+=G(F()-1,7);continue;case 47:switch(D()){case 42:case 47:C(re(Y(I(),F()),t,n,s),s);break;default:j+="/"}break;case 123*y:l[c++]=S(j)*k;case 125*y:case 59:case 0:switch($){case 0:case 125:b=0;case 59+u:-1==k&&(j=v(j,/\f/g,"")),f>0&&S(j)-d&&C(f>32?ae(j+";",r,n,d-1,s):ae(v(j," ","")+";",r,n,d-2,s),s);break;case 59:j+=";";default:if(C(P=ne(j,t,n,c,u,a,l,E,z=[],_=[],d,i),i),123===$)if(0===u)te(j,t,P,P,z,i,d,l,_);else switch(99===p&&110===w(j,3)?100:p){case 100:case 108:case 109:case 115:te(e,P,P,r&&C(ne(e,P,P,0,0,a,l,E,a,z=[],d,_),_),a,_,d,l,r?z:_);break;default:te(j,P,P,P,[""],_,0,l,_)}}c=u=f=0,y=k=1,E=j="",d=o;break;case 58:d=1+S(j),f=h;default:if(y<1)if(123==$)--y;else if(125==$&&0==y++&&125==O())continue;switch(j+=m($),$*y){case 38:k=u>0?1:(j+="\f",-1);break;case 44:l[c++]=(S(j)-1)*k,k=1;break;case 64:45===D()&&(j+=H(I())),p=D(),u=d=S(E=j+=Q(F())),$++;break;case 45:45===h&&2==S(j)&&(y=0)}}return i}function ne(e,t,n,r,a,i,o,l,s,c,u,p){for(var f=a-1,m=0===a?i:[""],h=$(m),b=0,x=0,w=0;b<r;++b)for(var S=0,C=k(e,f+1,f=g(x=o[b])),E=e;S<h;++S)(E=y(x>0?m[S]+" "+C:v(C,/&\f/g,m[S])))&&(s[w++]=E);return A(e,t,n,0===a?d:l,s,c,u,p)}function re(e,t,n,r){return A(e,t,n,u,m(T),k(e,2,-2),0,r)}function ae(e,t,n,r,a){return A(e,t,n,p,k(e,0,r),k(e,r+1,-1),r,a)}var ie={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},oe="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/product-manager-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/product-manager-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/product-manager-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",le="active",se="data-styled-version",ce="6.1.18",ue="/*!sc*/\n",de="undefined"!=typeof window&&"undefined"!=typeof document,pe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/product-manager-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/product-manager-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/product-manager-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/product-manager-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/product-manager-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/product-manager-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/product-manager-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/product-manager-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/product-manager-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/product-manager-portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),fe={},ge=(new Set,Object.freeze([])),me=Object.freeze({});function he(e,t,n){return void 0===n&&(n=me),e.theme!==n.theme&&e.theme||t||n.theme}var ye=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ve=/(^-|-$)/g;function xe(e){return e.replace(be,"-").replace(ve,"")}var we=/(a)(d)/gi,ke=function(e){return String.fromCharCode(e+(e>25?39:97))};function Se(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ke(t%52)+n;return(ke(t%52)+n).replace(we,"$1-$2")}var $e,Ce=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ee=function(e){return Ce(5381,e)};function ze(e){return Se(Ee(e)>>>0)}function _e(e){return e.displayName||e.name||"Component"}function Pe(e){return"string"==typeof e&&!0}var je="function"==typeof Symbol&&Symbol.for,Te=je?Symbol.for("react.memo"):60115,Ne=je?Symbol.for("react.forward_ref"):60112,Ae={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Re={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Le={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Oe=(($e={})[Ne]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$e[Te]=Le,$e);function Ie(e){return("type"in(t=e)&&t.type.$$typeof)===Te?Le:"$$typeof"in e?Oe[e.$$typeof]:Ae;var t}var De=Object.defineProperty,Fe=Object.getOwnPropertyNames,Me=Object.getOwnPropertySymbols,Ue=Object.getOwnPropertyDescriptor,Be=Object.getPrototypeOf,We=Object.prototype;function He(e,t,n){if("string"!=typeof t){if(We){var r=Be(t);r&&r!==We&&He(e,r,n)}var a=Fe(t);Me&&(a=a.concat(Me(t)));for(var i=Ie(e),o=Ie(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Re||n&&n[s]||o&&s in o||i&&s in i)){var c=Ue(t,s);try{De(e,s,c)}catch(e){}}}}return e}function Ve(e){return"function"==typeof e}function Ge(e){return"object"==typeof e&&"styledComponentId"in e}function Ke(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ye(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function qe(e,t,n){if(void 0===n&&(n=!1),!n&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=qe(e[r],t[r]);else if(Qe(t))for(var r in t)e[r]=qe(e[r],t[r]);return e}function Xe(e,t){Object.defineProperty(e,"toString",{value:t})}function Je(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ze=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw Je(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(ue);return t},e}(),et=new Map,tt=new Map,nt=1,rt=function(e){if(et.has(e))return et.get(e);for(;tt.has(nt);)nt++;var t=nt++;return et.set(e,t),tt.set(t,e),t},at=function(e,t){nt=t+1,et.set(e,t),tt.set(t,e)},it="style[".concat(oe,"][").concat(se,'="').concat(ce,'"]'),ot=new RegExp("^".concat(oe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lt=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},st=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(ue),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(ot);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(at(u,c),lt(e,u,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}},ct=function(e){for(var t=document.querySelectorAll(it),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(oe)!==le&&(st(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ut(){return n.nc}var dt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(oe,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(oe,le),r.setAttribute(se,ce);var o=ut();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},pt=function(){function e(e){this.element=dt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw Je(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),ft=function(){function e(e){this.element=dt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),gt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),mt=de,ht={isServer:!de,useCSSOMInjection:!pe},yt=function(){function e(e,t,n){void 0===e&&(e=me),void 0===t&&(t={});var a=this;this.options=r(r({},ht),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&de&&mt&&(mt=!1,ct(this)),Xe(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return tt.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a),o=t.getGroup(n);if(void 0===i||!i.size||0===o.length)return"continue";var l="".concat(oe,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(ue)},i=0;i<n;i++)a(i);return r}(a)}))}return e.registerId=function(e){return rt(e)},e.prototype.rehydrate=function(){!this.server&&de&&ct(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new gt(n):t?new pt(n):new ft(n)}(this.options),new Ze(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(rt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(rt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(rt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),bt=/&/g,vt=/^\s*\/\/.*$/gm;function xt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=xt(e.children,t)),e}))}function wt(e){var t,n,r,a=void 0===e?me:e,i=a.options,o=void 0===i?me:i,l=a.plugins,s=void 0===l?ge:l,c=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push((function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(bt,n).replace(r,c))})),o.prefix&&u.push(Z),u.push(X);var p=function(e,a,i,l){void 0===a&&(a=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(vt,""),c=ee(i||a?"".concat(i," ").concat(a," { ").concat(s," }"):s);o.namespace&&(c=xt(c,o.namespace));var d,p=[];return q(c,function(e){var t=$(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return p.hash=s.length?s.reduce((function(e,t){return t.name||Je(15),Ce(e,t.name)}),5381).toString():"",p}var kt=new yt,St=wt(),$t=e.createContext({shouldForwardProp:void 0,styleSheet:kt,stylis:St}),Ct=($t.Consumer,e.createContext(void 0));function Et(){return(0,e.useContext)($t)}function zt(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],i=Et().styleSheet,l=(0,e.useMemo)((function(){var e=i;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,i]),s=(0,e.useMemo)((function(){return wt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){o()(r,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var c=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:l,stylis:s}}),[t.shouldForwardProp,l,s]);return e.createElement($t.Provider,{value:c},e.createElement(Ct.Provider,{value:s},t.children))}var _t=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=St);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Xe(this,(function(){throw Je(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=St),this.name+e.hash},e}(),Pt=function(e){return e>="A"&&e<="Z"};function jt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Pt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Tt=function(e){return null==e||!1===e||""===e},Nt=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Tt(o)&&(Array.isArray(o)&&o.isCss||Ve(o)?r.push("".concat(jt(i),":"),o,";"):Qe(o)?r.push.apply(r,a(a(["".concat(i," {")],Nt(o),!1),["}"],!1)):r.push("".concat(jt(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ie||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function At(e,t,n,r){return Tt(e)?[]:Ge(e)?[".".concat(e.styledComponentId)]:Ve(e)?!Ve(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:At(e(t),t,n,r):e instanceof _t?n?(e.inject(n,r),[e.getName(r)]):[e]:Qe(e)?Nt(e):Array.isArray(e)?Array.prototype.concat.apply(ge,e.map((function(e){return At(e,t,n,r)}))):[e.toString()];var a}function Rt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ve(n)&&!Ge(n))return!1}return!0}var Lt=Ee(ce),Ot=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Rt(e),this.componentId=t,this.baseHash=Ce(Lt,t),this.baseStyle=n,yt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ke(r,this.staticRulesId);else{var a=Ye(At(this.rules,e,t,n)),i=Se(Ce(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=Ke(r,i),this.staticRulesId=i}else{for(var l=Ce(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=Ye(At(u,e,t,n));l=Ce(l,d+c),s+=d}}if(s){var p=Se(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(s,".".concat(p),void 0,this.componentId)),r=Ke(r,p)}}return r},e}(),It=e.createContext(void 0);It.Consumer;function Dt(t){var n=e.useContext(It),a=(0,e.useMemo)((function(){return function(e,t){if(!e)throw Je(14);if(Ve(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw Je(8);return t?r(r({},t),e):e}(t.theme,n)}),[t.theme,n]);return t.children?e.createElement(It.Provider,{value:a},t.children):null}var Ft={};new Set;function Mt(t,n,a){var i=Ge(t),o=t,l=!Pe(t),s=n.attrs,c=void 0===s?ge:s,u=n.componentId,d=void 0===u?function(e,t){var n="string"!=typeof e?"sc":xe(e);Ft[n]=(Ft[n]||0)+1;var r="".concat(n,"-").concat(ze(ce+n+Ft[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,p=n.displayName,f=void 0===p?function(e){return Pe(e)?"styled.".concat(e):"Styled(".concat(_e(e),")")}(t):p,g=n.displayName&&n.componentId?"".concat(xe(n.displayName),"-").concat(n.componentId):n.componentId||d,m=i&&o.attrs?o.attrs.concat(c).filter(Boolean):c,h=n.shouldForwardProp;if(i&&o.shouldForwardProp){var y=o.shouldForwardProp;if(n.shouldForwardProp){var b=n.shouldForwardProp;h=function(e,t){return y(e,t)&&b(e,t)}}else h=y}var v=new Ot(a,g,i?o.componentStyle:void 0);function x(t,n){return function(t,n,a){var i=t.attrs,o=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,c=t.styledComponentId,u=t.target,d=e.useContext(It),p=Et(),f=t.shouldForwardProp||p.shouldForwardProp,g=he(n,d,l)||me,m=function(e,t,n){for(var a,i=r(r({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var l=Ve(a=e[o])?a(i):a;for(var s in l)i[s]="className"===s?Ke(i[s],l[s]):"style"===s?r(r({},i[s]),l[s]):l[s]}return t.className&&(i.className=Ke(i.className,t.className)),i}(i,n,g),h=m.as||u,y={};for(var b in m)void 0===m[b]||"$"===b[0]||"as"===b||"theme"===b&&m.theme===g||("forwardedAs"===b?y.as=m.forwardedAs:f&&!f(b,h)||(y[b]=m[b]));var v=function(e,t){var n=Et();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),x=Ke(s,c);return v&&(x+=" "+v),m.className&&(x+=" "+m.className),y[Pe(h)&&!ye.has(h)?"class":"className"]=x,a&&(y.ref=a),(0,e.createElement)(h,y)}(w,t,n)}x.displayName=f;var w=e.forwardRef(x);return w.attrs=m,w.componentStyle=v,w.displayName=f,w.shouldForwardProp=h,w.foldedComponentIds=i?Ke(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=g,w.target=i?o.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)qe(e,a[r],!0);return e}({},o.defaultProps,e):e}}),Xe(w,(function(){return".".concat(w.styledComponentId)})),l&&He(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Ut(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Bt=function(e){return Object.assign(e,{isCss:!0})};function Wt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ve(e)||Qe(e))return Bt(At(Ut(ge,a([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?At(r):Bt(At(Ut(r,t)))}function Ht(e,t,n){if(void 0===n&&(n=me),!t)throw Je(1,t);var i=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Wt.apply(void 0,a([r],i,!1)))};return i.attrs=function(a){return Ht(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Ht(e,t,r(r({},n),a))},i}var Vt=function(e){return Ht(Mt,e)},Gt=Vt;ye.forEach((function(e){Gt[e]=Vt(e)}));var Kt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Rt(e),yt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(Ye(At(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&yt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Yt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ye(Wt.apply(void 0,a([e],t,!1))),i=ze(r);return new _t(i,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ut(),r=Ye([n&&'nonce="'.concat(n,'"'),"".concat(oe,'="true"'),"".concat(se,'="').concat(ce,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Je(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw Je(2);var a=t.instance.toString();if(!a)return[];var i=((n={})[oe]="",n[se]=ce,n.dangerouslySetInnerHTML={__html:a},n),o=ut();return o&&(i.nonce=o),[e.createElement("style",r({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new yt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Je(2);return e.createElement(zt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw Je(3)}})(),"__sc-".concat(oe,"__");const Qt={colors:{background:"#080B10",backgroundAlt:"#0D111A",text:"#FFFFFF",textSecondary:"rgba(255, 255, 255, 0.75)",primary:"#4A9DFF",secondary:"#A170F6",tertiary:"#58EDD2",success:"#5CF9A5",warning:"#FFB155",error:"#FF5D85",gradientPrimary:"linear-gradient(135deg, #4A9DFF 0%, #A170F6 100%)",gradientSecondary:"linear-gradient(135deg, #A170F6 0%, #58EDD2 100%)",gradientTertiary:"linear-gradient(135deg, #FF5D85 0%, #FFB155 100%)",glass:"rgba(13, 17, 26, 0.6)",glassBorder:"rgba(255, 255, 255, 0.08)",glassHighlight:"rgba(255, 255, 255, 0.03)",aiGlow:"rgba(74, 157, 255, 0.15)",aiAccent:"rgba(161, 112, 246, 0.15)",aiSurface:"rgba(13, 17, 26, 0.9)",aiGrid:"rgba(255, 255, 255, 0.03)"},typography:{fontFamily:"'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",fontWeights:{light:300,regular:400,medium:500,semibold:600,bold:700},sizes:{display:"56px",headline:"42px",title1:"32px",title2:"24px",title3:"20px",body:"17px",caption:"14px",small:"12px"},lineHeights:{tight:1.1,normal:1.3,relaxed:1.5}},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px",xxxl:"64px",huge:"96px"},borderRadius:{sm:"8px",md:"14px",lg:"22px",xl:"30px",circle:"50%",pill:"999px"},transitions:{fast:"0.2s cubic-bezier(0.16, 1, 0.3, 1)",normal:"0.3s cubic-bezier(0.16, 1, 0.3, 1)",slow:"0.5s cubic-bezier(0.16, 1, 0.3, 1)"},shadows:{small:"0 2px 10px rgba(0, 0, 0, 0.15)",medium:"0 4px 20px rgba(0, 0, 0, 0.2)",large:"0 10px 40px rgba(0, 0, 0, 0.3)",glow:e=>`0 0 25px ${e}`,aiGlow:"0 0 30px rgba(74, 157, 255, 0.15)"},zIndex:{base:1,overlay:10,modal:100,toast:1e3},breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},media:{xs:"@media (min-width: 480px)",sm:"@media (min-width: 640px)",md:"@media (min-width: 768px)",lg:"@media (min-width: 1024px)",xl:"@media (min-width: 1280px)",xxl:"@media (min-width: 1536px)"},containers:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"}},qt=(function(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var o=Wt.apply(void 0,a([t],n,!1)),l="sc-global-".concat(ze(JSON.stringify(o))),s=new Kt(o,l),c=function(t){var n=Et(),r=e.useContext(It),a=e.useRef(n.styleSheet.allocateGSInstance(l)).current;return n.styleSheet.server&&u(a,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return u(a,t,n.styleSheet,r,n.stylis),function(){return s.removeStyles(a,n.styleSheet)}}),[a,t,n.styleSheet,r,n.stylis]),null};function u(e,t,n,a,i){if(s.isStatic)s.renderStyles(e,fe,n,i);else{var o=r(r({},t),{theme:he(t,a,c.defaultProps)});s.renderStyles(e,o,n,i)}}return e.memo(c)})`
  /* Import SF Pro font - Apple's system font */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  :root {
    --animation-curve: cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${Qt.typography.fontFamily};
    background-color: ${Qt.colors.background};
    color: ${Qt.colors.text};
    line-height: ${Qt.typography.lineHeights.normal};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: ${Qt.typography.fontWeights.bold};
    line-height: ${Qt.typography.lineHeights.tight};
  }
  
  h1 {
    font-size: ${Qt.typography.sizes.display};
    letter-spacing: -0.015em;
  }
  
  h2 {
    font-size: ${Qt.typography.sizes.headline};
    letter-spacing: -0.01em;
  }
  
  h3 {
    font-size: ${Qt.typography.sizes.title1};
  }
  
  h4 {
    font-size: ${Qt.typography.sizes.title2};
  }
  
  h5 {
    font-size: ${Qt.typography.sizes.title3};
  }
  
  p {
    font-size: ${Qt.typography.sizes.body};
    line-height: ${Qt.typography.lineHeights.relaxed};
    margin-bottom: ${Qt.spacing.md};
  }
  
  a {
    color: ${Qt.colors.primary};
    text-decoration: none;
    transition: all ${Qt.transitions.fast};
    
    &:hover {
      color: ${Qt.colors.secondary};
    }
  }
  
  ul, ol {
    list-style-position: inside;
    margin-bottom: ${Qt.spacing.md};
  }
  
  li {
    margin-bottom: ${Qt.spacing.sm};
    font-size: ${Qt.typography.sizes.body};
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button, input, textarea, select {
    font-family: ${Qt.typography.fontFamily};
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${Qt.colors.backgroundAlt};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${Qt.colors.primary};
    border-radius: ${Qt.borderRadius.sm};
  }
  
  /* Selection styling */
  ::selection {
    background: ${Qt.colors.primary};
    color: ${Qt.colors.text};
  }
  
  /* Smooth animations */
  .fade-in {
    animation: fadeIn 1s var(--animation-curve);
  }
  
  .slide-up {
    animation: slideUp 0.8s var(--animation-curve);
  }
  
  .slide-left {
    animation: slideLeft 0.8s var(--animation-curve);
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes slideLeft {
    from { transform: translateX(30px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  /* Glass morphism utility classes */
  .glass {
    background: ${Qt.colors.glass};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid ${Qt.colors.glassBorder};
    border-radius: ${Qt.borderRadius.md};
  }
  
  .section {
    padding: ${Qt.spacing.xxxl} 0;
    position: relative;
    overflow: hidden;
  }
  
  .container {
    width: 100%;
    max-width: ${Qt.containers.xl};
    margin: 0 auto;
    padding: 0 ${Qt.spacing.lg};
    
    ${Qt.media.lg} {
      padding: 0 ${Qt.spacing.xl};
    }
  }
`;var Xt=n(579);const Jt=(0,e.createContext)({isDarkMode:!0,toggleTheme:()=>{}}),Zt=t=>{let{children:n}=t;const[r,a]=(0,e.useState)(!0),i=Qt;return(0,Xt.jsx)(Jt.Provider,{value:{isDarkMode:r,toggleTheme:()=>{a(!r)}},children:(0,Xt.jsxs)(Dt,{theme:i,children:[(0,Xt.jsx)(qt,{}),n]})})},en=Gt.section`
  position: relative;
  padding: ${Qt.spacing.huge} 0;
  
  /* Background variants */
  ${e=>e.dark&&Wt`
    background-color: ${Qt.colors.backgroundAlt};
  `}
  
  ${e=>e.light&&Wt`
    background-color: #111111;
  `}
  
  ${e=>e.gradient&&Wt`
    background: ${Qt.colors.gradientPrimary};
  `}
  
  /* Glass effect */
  ${e=>e.glass&&Wt`
    background: ${Qt.colors.glass};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  `}
  
  /* AI grid pattern */
  ${e=>e.aiPattern&&Wt`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        linear-gradient(${Qt.colors.aiGrid} 1px, transparent 1px),
        linear-gradient(90deg, ${Qt.colors.aiGrid} 1px, transparent 1px);
      background-size: 50px 50px;
      opacity: 0.2;
      z-index: 0;
      animation: gridAnimation 100s linear infinite;
    }
    
    @keyframes gridAnimation {
      0% { background-position: 0px 0px; }
      100% { background-position: 100px 100px; }
    }
  `}
  
  /* AI glow blobs */
  ${e=>e.aiBlobs&&Wt`
    &::after {
      content: '';
      position: absolute;
      top: 10%;
      right: 5%;
      width: 40vw;
      height: 40vw;
      background: ${Qt.colors.aiGlow};
      filter: blur(100px);
      border-radius: 50%;
      opacity: 0.3;
      z-index: -1;
      animation: blobAnimation 20s infinite alternate ease-in-out;
    }
    
    @keyframes blobAnimation {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-5%, 5%) scale(1.1); }
      100% { transform: translate(5%, -5%) scale(0.9); }
    }
  `}
  
  /* Full height option */
  ${e=>e.fullHeight&&Wt`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
  
  /* Margin control */
  ${e=>e.noMargin&&Wt`
    padding: 0;
  `}
  
  /* Overflow control */
  ${e=>!e.noOverflow&&Wt`
    overflow: hidden;
  `}
  
  /* Add subtle divider line at the bottom */
  ${e=>!e.noDivider&&Wt`
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 20%;
      right: 20%;
      height: 1px;
      background: linear-gradient(
        to right,
        transparent,
        ${Qt.colors.glassBorder},
        transparent
      );
    }
  `}
`,tn=e=>{let{children:t,id:n,dark:r=!1,light:a=!1,gradient:i=!1,glass:o=!1,aiPattern:l=!1,aiBlobs:s=!1,fullHeight:c=!1,noMargin:u=!1,noOverflow:d=!1,noDivider:p=!1,...f}=e;return(0,Xt.jsx)(en,{id:n,dark:r,light:a,gradient:i,glass:o,aiPattern:l,aiBlobs:s,fullHeight:c,noMargin:u,noOverflow:d,noDivider:p,...f,children:t})},nn=Gt.div`
  width: 100%;
  margin: 0 auto;
  
  ${e=>e.padding&&Wt`
    padding: 0 ${Qt.spacing.lg};
    
    ${Qt.media.lg} {
      padding: 0 ${Qt.spacing.xl};
    }
  `}
  
  ${e=>e.centered&&Wt`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `}
  
  /* Size variants */
  ${e=>"sm"===e.size&&Wt`
    max-width: ${Qt.containers.sm};
  `}
  
  ${e=>(!e.size||"md"===e.size)&&Wt`
    max-width: ${Qt.containers.md};
  `}
  
  ${e=>"lg"===e.size&&Wt`
    max-width: ${Qt.containers.lg};
  `}
  
  ${e=>"xl"===e.size&&Wt`
    max-width: ${Qt.containers.xl};
  `}
  
  ${e=>"full"===e.size&&Wt`
    max-width: none;
  `}
`,rn=e=>{let{children:t,size:n="md",padding:r=!0,centered:a=!1,...i}=e;return(0,Xt.jsx)(nn,{size:n,padding:r,centered:a,...i,children:t})},an=Yt`
  0% { clip-path: inset(0 100% 0 0); }
  100% { clip-path: inset(0 0 0 0); }
`,on=Yt`
  0% { text-shadow: 0 0 10px rgba(74, 157, 255, 0.3); }
  50% { text-shadow: 0 0 20px rgba(74, 157, 255, 0.5), 0 0 30px rgba(74, 157, 255, 0.3); }
  100% { text-shadow: 0 0 10px rgba(74, 157, 255, 0.3); }
`,ln=Gt.h1`
  font-family: ${Qt.typography.fontFamily};
  line-height: ${Qt.typography.lineHeights.tight};
  margin: 0;
  position: relative;
  
  /* Font size based on size prop or fallback to level */
  ${e=>"display"===e.size&&Wt`
    font-size: ${Qt.typography.sizes.display};
    font-weight: ${Qt.typography.fontWeights.bold};
    letter-spacing: -0.02em;
  `}
  
  ${e=>"headline"===e.size&&Wt`
    font-size: ${Qt.typography.sizes.headline};
    font-weight: ${Qt.typography.fontWeights.bold};
    letter-spacing: -0.015em;
  `}
  
  ${e=>"title1"===e.size&&Wt`
    font-size: ${Qt.typography.sizes.title1};
    font-weight: ${Qt.typography.fontWeights.semibold};
    letter-spacing: -0.01em;
  `}
  
  ${e=>"title2"===e.size&&Wt`
    font-size: ${Qt.typography.sizes.title2};
    font-weight: ${Qt.typography.fontWeights.semibold};
  `}
  
  ${e=>"title3"===e.size&&Wt`
    font-size: ${Qt.typography.sizes.title3};
    font-weight: ${Qt.typography.fontWeights.medium};
  `}
  
  /* Color styles */
  color: ${e=>e.color||Qt.colors.text};
  
  /* Gradient text effect */
  ${e=>e.gradient&&Wt`
    background: ${Qt.colors.gradientPrimary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    position: relative;
    z-index: 1;
    
    /* Add subtle glow behind gradient text */
    &::after {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      color: transparent;
      filter: blur(8px);
      opacity: 0.5;
    }
  `}
  
  /* Animated text reveal */
  ${e=>e.animated&&Wt`
    animation: ${an} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    clip-path: inset(0 100% 0 0);
  `}
  
  /* Glowing text effect */
  ${e=>e.glowing&&Wt`
    animation: ${on} 3s infinite;
  `}
  
  /* Accent line */
  ${e=>e.withAccent&&Wt`
    padding-bottom: ${Qt.spacing.sm};
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 4px;
      background: ${Qt.colors.gradientPrimary};
      border-radius: ${Qt.borderRadius.sm};
    }
    
    ${"center"===e.align&&Wt`
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    `}
    
    ${"right"===e.align&&Wt`
      &::after {
        left: auto;
        right: 0;
      }
    `}
  `}
  
  /* Text alignment */
  text-align: ${e=>e.align||"left"};
  
  /* Bottom margin */
  ${e=>"small"===e.marginBottom&&Wt`
    margin-bottom: ${Qt.spacing.sm};
  `}
  
  ${e=>"medium"===e.marginBottom&&Wt`
    margin-bottom: ${Qt.spacing.md};
  `}
  
  ${e=>"large"===e.marginBottom&&Wt`
    margin-bottom: ${Qt.spacing.xl};
  `}
  
  /* Responsive sizing */
  @media (max-width: ${Qt.breakpoints.md}) {
    ${e=>"display"===e.size&&Wt`
      font-size: ${Qt.typography.sizes.headline};
    `}
    
    ${e=>"headline"===e.size&&Wt`
      font-size: ${Qt.typography.sizes.title1};
    `}
    
    ${e=>"title1"===e.size&&Wt`
      font-size: ${Qt.typography.sizes.title2};
    `}
  }
  
  /* Highlight styling */
  .highlight {
    position: relative;
    z-index: 1;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30%;
      background-color: ${Qt.colors.aiGlow};
      z-index: -1;
      transform: skewX(-5deg);
    }
  }
`,sn=e=>{let{children:t,level:n=1,size:r,color:a,gradient:i=!1,animated:o=!1,glowing:l=!1,withAccent:s=!1,align:c="left",marginBottom:u="medium",className:d,...p}=e;const f=r||(1===n?"display":2===n?"headline":3===n?"title1":4===n?"title2":"title3");return(0,Xt.jsx)(ln,{as:`h${n}`,size:f,color:a,gradient:i,animated:o,glowing:l,withAccent:s,align:c,marginBottom:u,className:d,"data-text":"string"===typeof t?t:"",...p,children:t})},cn=Gt.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${Qt.typography.fontFamily};
  font-weight: ${Qt.typography.fontWeights.medium};
  border-radius: ${Qt.borderRadius.md};
  transition: all ${Qt.transitions.normal};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  /* Size variants */
  ${e=>"small"===e.size&&Wt`
    font-size: ${Qt.typography.sizes.caption};
    padding: ${Qt.spacing.xs} ${Qt.spacing.md};
    min-height: 36px;
  `}
  
  ${e=>(!e.size||"medium"===e.size)&&Wt`
    font-size: ${Qt.typography.sizes.body};
    padding: ${Qt.spacing.sm} ${Qt.spacing.lg};
    min-height: 44px;
  `}
  
  ${e=>"large"===e.size&&Wt`
    font-size: ${Qt.typography.sizes.title3};
    padding: ${Qt.spacing.md} ${Qt.spacing.xl};
    min-height: 56px;
  `}
  
  /* Variant styles */
  ${e=>(!e.variant||"primary"===e.variant)&&Wt`
    background: ${e.isGlassmorphic?Qt.colors.glass:Qt.colors.primary};
    color: ${Qt.colors.text};
    border: 1px solid ${e.isGlassmorphic?Qt.colors.glassBorder:"transparent"};
    
    &:hover {
      background: ${e.isGlassmorphic?"rgba(50, 50, 50, 0.7)":Qt.colors.secondary};
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
  
  ${e=>"secondary"===e.variant&&Wt`
    background: ${e.isGlassmorphic?"rgba(94, 92, 230, 0.2)":Qt.colors.secondary};
    color: ${Qt.colors.text};
    border: 1px solid ${e.isGlassmorphic?"rgba(94, 92, 230, 0.3)":"transparent"};
    
    &:hover {
      background: ${e.isGlassmorphic?"rgba(94, 92, 230, 0.3)":Qt.colors.tertiary};
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
  
  ${e=>"outline"===e.variant&&Wt`
    background: transparent;
    color: ${Qt.colors.primary};
    border: 1px solid ${Qt.colors.primary};
    
    &:hover {
      background: rgba(0, 113, 227, 0.1);
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
  
  ${e=>"text"===e.variant&&Wt`
    background: transparent;
    color: ${Qt.colors.primary};
    border: none;
    
    &:hover {
      color: ${Qt.colors.secondary};
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
  
  /* Glassmorphism effect */
  ${e=>e.isGlassmorphic&&Wt`
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  `}
  
  /* Glow effect */
  ${e=>e.hasGlow&&Wt`
    box-shadow: 0 0 15px ${e.variant&&"primary"!==e.variant?Qt.colors.secondary:Qt.colors.primary};
      
    &:hover {
      box-shadow: 0 0 20px ${e.variant&&"primary"!==e.variant?Qt.colors.secondary:Qt.colors.primary};
    }
  `}
  
  /* Full width */
  ${e=>e.fullWidth&&Wt`
    width: 100%;
  `}
  
  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  /* Add hover animation effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    transform: translateY(-100%);
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  
  &:hover::after {
    transform: translateY(100%);
  }
`,un=e=>{let{children:t,...n}=e;return(0,Xt.jsx)(cn,{...n,children:t})},dn=Gt(tn)`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  overflow: hidden;
  
  /* Futuristic overlay effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(0, 113, 227, 0.08),
      transparent 70%
    );
    z-index: 1;
  }
`,pn=Gt(rn)`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${Qt.spacing.xl} 0;
`,fn=Gt.div`
  margin-bottom: ${Qt.spacing.xl};
  animation: fadeIn 1s var(--animation-curve);
`,gn=Gt.p`
  font-size: ${Qt.typography.sizes.title2};
  font-weight: ${Qt.typography.fontWeights.light};
  max-width: 760px;
  margin: 0 auto ${Qt.spacing.xl};
  color: ${Qt.colors.textSecondary};
  animation: slideUp 1s var(--animation-curve);
  
  @media (max-width: ${Qt.breakpoints.md}) {
    font-size: ${Qt.typography.sizes.title3};
  }
`,mn=Gt.div`
  display: flex;
  gap: ${Qt.spacing.md};
  margin-top: ${Qt.spacing.lg};
  animation: slideUp 1s var(--animation-curve) forwards;
  animation-delay: 0.3s;
  opacity: 0;
  
  @media (max-width: ${Qt.breakpoints.sm}) {
    flex-direction: column;
  }
`,hn=Gt.div`
  position: absolute;
  width: ${e=>e.size};
  height: ${e=>e.size};
  border-radius: 50%;
  background: ${Qt.colors.gradientSecondary};
  opacity: 0.2;
  filter: blur(30px);
  top: ${e=>e.top};
  left: ${e=>e.left};
  animation: float 6s ease-in-out infinite;
  animation-delay: ${e=>e.delay};
  
  @keyframes float {
    0% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-20px) translateX(10px); }
    100% { transform: translateY(0) translateX(0); }
  }
`,yn=Gt.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(75, 75, 75, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(75, 75, 75, 0.03) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: 0;
`,bn=Gt.div`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: ${Qt.spacing.xl};
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 30px rgba(0, 113, 227, 0.3);
  animation: pulse 4s infinite ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  
  @keyframes pulse {
    0% { box-shadow: 0 0 30px rgba(0, 113, 227, 0.3); }
    50% { box-shadow: 0 0 30px rgba(94, 92, 230, 0.5); }
    100% { box-shadow: 0 0 30px rgba(0, 113, 227, 0.3); }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,vn=Gt.div`
  font-size: 64px;
  font-weight: ${Qt.typography.fontWeights.bold};
  color: ${Qt.colors.primary};
  background: ${Qt.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,xn=Gt.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Qt.colors.textSecondary};
  font-size: ${Qt.typography.sizes.caption};
  opacity: 0.7;
  animation: bounce 2s infinite;
  
  svg {
    margin-top: ${Qt.spacing.xs};
    width: 20px;
    height: 20px;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
    40% { transform: translateY(-10px) translateX(-50%); }
    60% { transform: translateY(-5px) translateX(-50%); }
  }
`,wn=e=>{let{personalInfo:t}=e;return(0,Xt.jsxs)(dn,{id:"hero",fullHeight:!0,noMargin:!0,children:[(0,Xt.jsx)(yn,{}),(0,Xt.jsx)(hn,{size:"300px",top:"20%",left:"10%",delay:"0s"}),(0,Xt.jsx)(hn,{size:"200px",top:"60%",left:"80%",delay:"1s"}),(0,Xt.jsx)(hn,{size:"150px",top:"80%",left:"30%",delay:"2s"}),(0,Xt.jsxs)(pn,{size:"lg",children:[(0,Xt.jsx)(bn,{children:t.profileImage?(0,Xt.jsx)("img",{src:t.profileImage,alt:t.name}):(0,Xt.jsx)(vn,{children:(n=t.name,n.split(" ").map((e=>e[0])).join("").toUpperCase())})}),(0,Xt.jsxs)(fn,{children:[(0,Xt.jsx)(sn,{level:1,size:"display",gradient:!0,align:"center",marginBottom:"small",children:t.name}),(0,Xt.jsx)(sn,{level:2,size:"title1",color:Qt.colors.textSecondary,align:"center",children:t.title})]}),(0,Xt.jsx)(gn,{children:t.tagline}),(0,Xt.jsxs)(mn,{children:[(0,Xt.jsx)(un,{size:"large",hasGlow:!0,children:"View Projects"}),(0,Xt.jsx)(un,{size:"large",variant:"outline",children:"Download Resume"})]})]}),(0,Xt.jsxs)(xn,{children:[(0,Xt.jsx)("span",{children:"Scroll to explore"}),(0,Xt.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,Xt.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})]})]});var n},kn=Yt`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
  100% { transform: translateY(0) rotate(0deg); }
`,Sn=Yt`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`,$n=Yt`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,Cn=Gt(tn)`
  overflow: hidden;
  padding: ${Qt.spacing.huge} 0;
`,En=Gt.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${Qt.spacing.xl};
  position: relative;
  
  @media (min-width: ${Qt.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: ${Qt.spacing.xxl};
  }
`,zn=Gt.div`
  position: relative;
  padding: ${Qt.spacing.xl};
  background: ${Qt.colors.aiSurface};
  border-radius: ${Qt.borderRadius.lg};
  border: 1px solid ${Qt.colors.glassBorder};
  backdrop-filter: blur(20px);
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${Qt.shadows.aiGlow};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), ${Qt.shadows.aiGlow};
  }
`,_n=Gt(zn)`
  &::before {
    content: '';
    position: absolute;
    bottom: -30px;
    left: -30px;
    width: 120px;
    height: 120px;
    background: ${Qt.colors.aiGlow};
    filter: blur(40px);
    opacity: 0.6;
    border-radius: 50%;
  }
`,Pn=Gt(zn)`
  &::before {
    content: '';
    position: absolute;
    top: -30px;
    right: -30px;
    width: 120px;
    height: 120px;
    background: ${Qt.colors.aiAccent};
    filter: blur(50px);
    opacity: 0.6;
    border-radius: 50%;
  }
`,jn=Gt.div`
  margin-bottom: ${Qt.spacing.md};
  position: relative;
`,Tn=Gt.div`
  position: relative;
  z-index: 1;
`,Nn=Gt.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,An=Gt.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${Qt.spacing.sm};
  animation: ${$n} 0.5s ease-out forwards;
  opacity: 0;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
`,Rn=Gt.div`
  color: ${Qt.colors.primary};
  font-size: 1.2rem;
  margin-right: ${Qt.spacing.sm};
  flex-shrink: 0;
`,Ln=Gt.p`
  font-size: ${Qt.typography.sizes.body};
  line-height: ${Qt.typography.lineHeights.relaxed};
  color: ${Qt.colors.textSecondary};
  margin: 0;
`,On=Gt.div`
  position: absolute;
  z-index: 0;
  
  &.code-bracket {
    top: 30px;
    right: 20px;
    color: ${Qt.colors.glassBorder};
    font-family: 'Fira Code', monospace;
    font-size: 100px;
    opacity: 0.1;
    transform: rotate(10deg);
  }
  
  &.quote {
    top: 30px;
    right: 30px;
    color: ${Qt.colors.glassBorder};
    font-family: serif;
    font-size: 80px;
    opacity: 0.15;
  }
  
  &.particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: ${Qt.colors.primary};
    border-radius: 50%;
    opacity: 0.5;
    animation: ${kn} 4s infinite ease-in-out, ${Sn} 2s infinite;
  }
  
  &.particle-1 {
    top: 40px;
    left: 20%;
    animation-delay: 0s;
  }
  
  &.particle-2 {
    bottom: 60px;
    left: 80%;
    animation-delay: 0.5s;
  }
  
  &.particle-3 {
    top: 80px;
    right: 30%;
    animation-delay: 1s;
  }
`,In=Gt.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${Qt.spacing.md};
  gap: ${Qt.spacing.xs};
`,Dn=Gt.span`
  display: inline-block;
  padding: ${Qt.spacing.xs} ${Qt.spacing.sm};
  background: ${Qt.colors.glassBorder}30;
  border-radius: ${Qt.borderRadius.md};
  font-size: ${Qt.typography.sizes.small};
  color: ${Qt.colors.primary};
  border: 1px solid ${Qt.colors.glassBorder}50;
  animation: ${$n} 0.5s ease-out forwards;
  opacity: 0;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
`,Fn=e=>{let{summary:t,vision:n}=e;const r=["transform abstract concepts into market-ready innovations","orchestrating the balance between business objectives, technical possibilities, and human needs","data-first methodology and customer-centric focus","zero-to-one product creation to strategic scaling"],a=n?["product development transcends traditional boundaries","digital experiences that feel intuitively human","leveraging the full potential of emerging technologies","build the invisible infrastructure powering tomorrow's innovations"]:[],i=["Innovation Strategy","Product Leadership","User Experience","Data Intelligence","Digital Transformation"];return(0,Xt.jsx)(Cn,{id:"summary",aiPattern:!0,children:(0,Xt.jsx)(rn,{children:(0,Xt.jsxs)(En,{children:[(0,Xt.jsxs)(_n,{children:[(0,Xt.jsxs)(jn,{children:[(0,Xt.jsx)(sn,{level:2,size:"title1",marginBottom:"small",gradient:!0,withAccent:!0,children:"Expertise"}),(0,Xt.jsx)(On,{className:"code-bracket",children:"{"}),(0,Xt.jsx)(On,{className:"particle particle-1"}),(0,Xt.jsx)(On,{className:"particle particle-2"})]}),(0,Xt.jsxs)(Tn,{children:[(0,Xt.jsx)(Nn,{children:r.map(((e,t)=>(0,Xt.jsxs)(An,{children:[(0,Xt.jsx)(Rn,{children:"\u26a1"}),(0,Xt.jsx)(Ln,{children:e})]},`expertise-${t}`)))}),(0,Xt.jsx)(In,{children:i.map(((e,t)=>(0,Xt.jsx)(Dn,{children:e},`tag-${t}`)))})]})]}),n&&(0,Xt.jsxs)(Pn,{children:[(0,Xt.jsxs)(jn,{children:[(0,Xt.jsx)(sn,{level:2,size:"title1",marginBottom:"small",gradient:!0,withAccent:!0,children:"Vision"}),(0,Xt.jsx)(On,{className:"quote",children:'"'}),(0,Xt.jsx)(On,{className:"particle particle-2"}),(0,Xt.jsx)(On,{className:"particle particle-3"})]}),(0,Xt.jsx)(Tn,{children:(0,Xt.jsx)(Nn,{children:a.map(((e,t)=>(0,Xt.jsxs)(An,{children:[(0,Xt.jsx)(Rn,{children:"\u2728"}),(0,Xt.jsx)(Ln,{children:e})]},`vision-${t}`)))})})]})]})})})},Mn=Yt`
  0% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.5; transform: scale(1); }
`,Un=Yt`
  0% { box-shadow: 0 0 5px rgba(74, 157, 255, 0.4); }
  50% { box-shadow: 0 0 15px rgba(74, 157, 255, 0.6); }
  100% { box-shadow: 0 0 5px rgba(74, 157, 255, 0.4); }
`,Bn=Gt.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  
  /* Timeline vertical line */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 13px;
    width: 3px;
    background: linear-gradient(to bottom, 
      rgba(74, 157, 255, 0.1), 
      rgba(74, 157, 255, 0.5),
      rgba(74, 157, 255, 0.1)
    );
    border-radius: 3px;
    z-index: 0;
  }
  
  @media (max-width: ${Qt.breakpoints.md}) {
    padding-left: 26px;
    
    &::before {
      left: 10px;
    }
  }
`,Wn=Gt.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${Qt.spacing.sm} ${Qt.spacing.md};
  border-radius: ${Qt.borderRadius.lg};
  margin-bottom: ${Qt.spacing.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  background: ${e=>e.isActive?"linear-gradient(120deg, rgba(74, 157, 255, 0.08), rgba(74, 157, 255, 0.02))":"transparent"};
  transform: translateX(${e=>e.isActive?"6px":"0"});
  backdrop-filter: ${e=>e.isActive?"blur(10px)":"none"};
  border: 1px solid ${e=>e.isActive?"rgba(74, 157, 255, 0.3)":"transparent"};
  box-shadow: ${e=>e.isActive?"0 5px 15px rgba(0, 0, 0, 0.1), 0 0 10px rgba(74, 157, 255, 0.15)":"none"};
  opacity: ${e=>e.isActive?1:.75};
  
  &:hover {
    opacity: 1;
    transform: translateX(3px);
    background: linear-gradient(120deg, rgba(74, 157, 255, 0.05), rgba(74, 157, 255, 0.01));
    border-color: rgba(74, 157, 255, 0.2);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  }
  
  /* Timeline node */
  &::before {
    content: '';
    position: absolute;
    left: -32px;
    top: 24px;
    width: ${e=>e.isActive?"24px":"18px"};
    height: ${e=>e.isActive?"24px":"18px"};
    border-radius: 50%;
    background: ${e=>e.isActive?"linear-gradient(135deg, #4A9DFF, #0065D0)":Qt.colors.background};
    border: 2px solid ${e=>e.isActive?Qt.colors.primary:"rgba(74, 157, 255, 0.3)"};
    z-index: 1;
    transition: all 0.3s ease;
    box-shadow: ${e=>e.isActive?"0 0 15px rgba(74, 157, 255, 0.6)":"none"};
    animation: ${e=>e.isActive?Un:"none"} 2s infinite;
    
    @media (max-width: ${Qt.breakpoints.md}) {
      left: -26px;
      width: ${e=>e.isActive?"20px":"14px"};
      height: ${e=>e.isActive?"20px":"14px"};
    }
  }
  
  /* Timeline pulse effect - only for active state */
  &::after {
    content: '';
    position: absolute;
    left: -32px;
    top: 24px;
    width: ${e=>e.isActive?"24px":"18px"};
    height: ${e=>e.isActive?"24px":"18px"};
    border-radius: 50%;
    background: transparent;
    border: 2px solid ${e=>e.isActive?Qt.colors.primary:"transparent"};
    opacity: ${e=>e.isActive?.6:0};
    transform: scale(1.5);
    z-index: 0;
    animation: ${e=>e.isActive?Mn:"none"} 2s infinite;
    
    @media (max-width: ${Qt.breakpoints.md}) {
      left: -26px;
      width: ${e=>e.isActive?"20px":"14px"};
      height: ${e=>e.isActive?"20px":"14px"};
    }
  }
`,Hn=Gt.span`
  font-family: 'Fira Code', monospace;
  font-size: ${Qt.typography.sizes.caption};
  color: ${e=>e.isActive?Qt.colors.primary:Qt.colors.textSecondary};
  background: ${e=>e.isActive?"rgba(74, 157, 255, 0.15)":"rgba(255, 255, 255, 0.05)"};
  padding: 6px 12px;
  border-radius: ${Qt.borderRadius.md};
  margin-bottom: ${Qt.spacing.sm};
  font-weight: ${e=>e.isActive?600:400};
  letter-spacing: 0.5px;
  box-shadow: ${e=>e.isActive?"inset 0 0 10px rgba(74, 157, 255, 0.1)":"none"};
  transition: all 0.3s ease;
`,Vn=Gt.h3`
  margin: 0;
  font-size: ${e=>e.isActive?Qt.typography.sizes.title3:Qt.typography.sizes.body};
  font-weight: ${e=>e.isActive?Qt.typography.fontWeights.bold:Qt.typography.fontWeights.semibold};
  color: ${e=>e.isActive?Qt.colors.text:Qt.colors.textSecondary};
  transition: all 0.3s ease;
`,Gn=Gt.span`
  font-size: ${Qt.typography.sizes.body};
  color: ${e=>e.isActive?"linear-gradient(90deg, #4A9DFF, #6C8EFF)":Qt.colors.textSecondary};
  background: ${e=>e.isActive?"linear-gradient(90deg, #4A9DFF, #6C8EFF)":"transparent"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${e=>e.isActive?"transparent":"inherit"};
  background-clip: ${e=>e.isActive?"text":"border-box"};
  margin-top: ${Qt.spacing.xs};
  font-weight: ${e=>e.isActive?600:400};
  display: block;
  transition: all 0.3s ease;
`,Kn=Gt.span`
  font-size: ${Qt.typography.sizes.caption};
  color: ${e=>e.isActive?Qt.colors.textSecondary:"rgba(255, 255, 255, 0.5)"};
  margin-top: ${Qt.spacing.xs};
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${e=>e.isActive?Qt.colors.secondary:"rgba(255, 255, 255, 0.3)"};
    margin-right: ${Qt.spacing.xs};
    transition: all 0.3s ease;
  }
`,Yn=e=>{let{period:t,title:n,company:r,location:a,index:i,isActive:o,onClick:l}=e;return(0,Xt.jsxs)(Wn,{isActive:o,index:i,onClick:l,role:"button","aria-pressed":o,children:[(0,Xt.jsx)(Hn,{isActive:o,children:t}),(0,Xt.jsx)(Vn,{isActive:o,children:n}),(0,Xt.jsxs)(Gn,{isActive:o,children:["@",r]}),(0,Xt.jsx)(Kn,{isActive:o,children:a})]})},Qn=e=>{let{items:t,activeIndex:n,setActiveIndex:r}=e;return(0,Xt.jsx)(Bn,{children:t.map(((e,t)=>(0,Xt.jsx)(Yn,{period:e.period,title:e.title,company:e.company,location:e.location,index:t,isActive:t===n,onClick:()=>r(t)},t)))})},qn=Yt`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Xn=Yt`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`,Jn=Yt`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`,Zn=Gt.div`
  display: flex;
  flex-direction: column;
  padding: ${Qt.spacing.md};
  border-radius: ${Qt.borderRadius.lg};
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(74, 157, 255, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  animation: ${qn} 0.6s ${e=>.1*e.delay}s forwards,
             ${Jn} 5s ease-in-out infinite;
  opacity: 0;
  transform: translateY(20px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2),
              inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25),
                0 0 15px rgba(74, 157, 255, 0.2),
                inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    border-color: rgba(74, 157, 255, 0.4);
    
    &::before {
      opacity: 0.6;
      width: 100px;
      height: 100px;
      filter: blur(50px);
    }
  }
  
  /* Accent glow */
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 80px;
    height: 80px;
    background: ${e=>e.accentColor||Qt.colors.primary};
    filter: blur(40px);
    opacity: 0.4;
    border-radius: 50%;
    z-index: 0;
    transition: all 0.4s ease;
  }
  
  /* Tech line decoration */
  &::after {
    content: '';
    position: absolute;
    bottom: 15px;
    left: 15px;
    width: 40%;
    height: 2px;
    background: linear-gradient(
      to right,
      ${e=>e.accentColor||Qt.colors.primary},
      transparent
    );
    opacity: 0.6;
  }
`,er=Gt.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${Qt.spacing.sm};
`,tr=Gt.div`
  font-size: 3rem;
  font-weight: ${Qt.typography.fontWeights.bold};
  margin-bottom: ${Qt.spacing.sm};
  color: ${Qt.colors.text};
  position: relative;
  z-index: 1;
  display: flex;
  align-items: baseline;
  background: linear-gradient(135deg, #fff 0%, ${e=>e.accentColor||Qt.colors.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
  line-height: 1;
  animation: ${Xn} 3s infinite ease-in-out;
  transform-origin: center;
`,nr=Gt.div`
  font-size: ${Qt.typography.sizes.caption};
  color: ${Qt.colors.textSecondary};
  max-width: 100%;
  position: relative;
  z-index: 1;
  opacity: 0.9;
  font-weight: 500;
  letter-spacing: 0.5px;
`,rr=Gt.div`
  position: relative;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.accentColor||Qt.colors.primary};
  border-radius: ${Qt.borderRadius.circle};
  opacity: 0.9;
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(74, 157, 255, 0.3);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 
              inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  animation: ${Xn} 3s infinite ease-in-out;
`,ar=Gt.span`
  font-size: ${Qt.typography.sizes.title3};
  margin-right: ${Qt.spacing.xs};
  opacity: 0.7;
`,ir=Gt.span`
  font-size: ${Qt.typography.sizes.title3};
  margin-left: ${Qt.spacing.xs};
  opacity: 0.7;
`,or=Gt.div`
  height: 3px;
  width: 60px;
  background: ${e=>e.accentColor||Qt.colors.primary};
  margin-top: ${Qt.spacing.sm};
  margin-bottom: ${Qt.spacing.md};
  border-radius: ${Qt.borderRadius.sm};
  opacity: 0.7;
`,lr={trending:e=>(0,Xt.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Xt.jsx)("path",{d:"M3 17L9 11L13 15L21 7",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Xt.jsx)("path",{d:"M14 7H21V14",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),users:e=>(0,Xt.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Xt.jsx)("path",{d:"M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Xt.jsx)("path",{d:"M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Xt.jsx)("path",{d:"M23 21V19C22.9986 17.1771 21.7079 15.5857 20 15.13",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Xt.jsx)("path",{d:"M16 3.13C17.7105 3.58317 19.0053 5.17786 19.0053 7.005C19.0053 8.83214 17.7105 10.4268 16 10.88",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),clock:e=>(0,Xt.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Xt.jsx)("circle",{cx:"12",cy:"12",r:"10",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Xt.jsx)("path",{d:"M12 6V12L16 14",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),chart:e=>(0,Xt.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Xt.jsx)("path",{d:"M18 20V10",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Xt.jsx)("path",{d:"M12 20V4",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Xt.jsx)("path",{d:"M6 20V14",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})},sr=e=>{let{value:t,label:n,icon:r="chart",prefix:a,suffix:i,accentColor:o=Qt.colors.primary,delay:l=0}=e;return(0,Xt.jsxs)(Zn,{accentColor:o,delay:l,children:[(0,Xt.jsx)(er,{children:(0,Xt.jsx)(rr,{accentColor:o,children:r in lr?lr[r](o):lr.chart(o)})}),(0,Xt.jsxs)(tr,{accentColor:o,children:[a&&(0,Xt.jsx)(ar,{children:a}),t,i&&(0,Xt.jsx)(ir,{children:i})]}),(0,Xt.jsx)(or,{accentColor:o}),(0,Xt.jsx)(nr,{children:n})]})},cr=Gt.div`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"auto"};
  background: rgba(20, 25, 35, 0.6);
  border-radius: ${Qt.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Qt.colors.textSecondary};
  font-size: ${Qt.typography.sizes.caption};
  padding: ${Qt.spacing.md};
  text-align: center;
  border: 1px solid rgba(74, 157, 255, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`,ur=Gt.img`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"auto"};
  object-fit: cover;
  border-radius: ${Qt.borderRadius.md};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`,dr=t=>{let{src:n,alt:r,width:a,height:i,className:o}=t;const[l,s]=(0,e.useState)(!1);return!n||l?(0,Xt.jsx)(cr,{width:a,height:i,className:o,children:r}):(0,Xt.jsx)(ur,{src:n,alt:r,width:a,height:i,className:o,onError:()=>s(!0)})},pr=Gt(tn)`
  min-height: 100vh;
  background: linear-gradient(180deg, ${Qt.colors.backgroundAlt} 0%, ${Qt.colors.background} 100%);
  position: relative;
  overflow: hidden;
  padding: ${Qt.spacing.xxl} 0;
  
  /* Add subtle tech pattern to background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 25px 25px, rgba(74, 157, 255, 0.1) 2%, transparent 0%),
                      radial-gradient(circle at 75px 75px, rgba(74, 157, 255, 0.05) 2%, transparent 0%);
    background-size: 100px 100px;
    opacity: 0.4;
    z-index: 0;
  }
`,fr=Gt(rn)`
  position: relative;
  z-index: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${Qt.spacing.md};
  
  @media (min-width: ${Qt.breakpoints.xl}) {
    padding: 0 ${Qt.spacing.xxl};
  }
`,gr=Gt.div`
  margin-bottom: ${Qt.spacing.xxl};
  text-align: center;
`,mr=Gt.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: ${Qt.spacing.xl};
  margin-top: ${Qt.spacing.xl};
  
  @media (max-width: ${Qt.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,hr=Gt.div`
  @media (max-width: ${Qt.breakpoints.lg}) {
    margin-bottom: ${Qt.spacing.xl};
  }
`,yr=Gt.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: ${Qt.borderRadius.xl};
  padding: ${Qt.spacing.lg} ${Qt.spacing.xl};
  border: 1px solid rgba(74, 157, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2),
              inset 0 0 0 1px rgba(255, 255, 255, 0.05);
`,br=Gt.div`
  margin-bottom: ${Qt.spacing.lg};
  padding-bottom: ${Qt.spacing.md};
  display: flex;
  flex-direction: column;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, 
      rgba(74, 157, 255, 0.5), 
      rgba(74, 157, 255, 0.1), 
      transparent
    );
  }
`,vr=Gt.h3`
  font-size: ${Qt.typography.sizes.title1};
  margin-bottom: ${Qt.spacing.sm};
  background: linear-gradient(135deg, #fff 20%, ${Qt.colors.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
`,xr=Gt.div`
  font-size: ${Qt.typography.sizes.body};
  color: ${Qt.colors.textSecondary};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${Qt.spacing.md};
  margin-top: ${Qt.spacing.sm};
`,wr=Gt.span`
  font-weight: ${Qt.typography.fontWeights.semibold};
  color: ${Qt.colors.text};
  font-size: ${Qt.typography.sizes.title3};
  margin-right: ${Qt.spacing.sm};
`,kr=Gt.span`
  background: rgba(74, 157, 255, 0.1);
  padding: ${Qt.spacing.xs} ${Qt.spacing.sm};
  border-radius: ${Qt.borderRadius.sm};
  font-family: 'Fira Code', monospace;
  font-size: ${Qt.typography.sizes.caption};
  color: ${Qt.colors.primary};
  letter-spacing: 0.5px;
  border: 1px solid rgba(74, 157, 255, 0.2);
`,Sr=Gt.span`
  display: flex;
  align-items: center;
  color: ${Qt.colors.textSecondary};
  font-size: ${Qt.typography.sizes.body};
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${Qt.colors.secondary};
    margin-right: ${Qt.spacing.xs};
    box-shadow: 0 0 10px rgba(106, 142, 255, 0.5);
  }
`,$r=Gt.h4`
  font-size: ${Qt.typography.sizes.title3};
  margin-top: ${Qt.spacing.md};
  margin-bottom: ${Qt.spacing.md};
  color: ${Qt.colors.text};
  display: flex;
  align-items: center;
  
  &::before {
    content: '//';
    color: ${Qt.colors.primary};
    margin-right: ${Qt.spacing.sm};
    font-family: 'Fira Code', monospace;
    opacity: 0.8;
  }
`,Cr=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${Qt.spacing.md};
  margin-bottom: ${Qt.spacing.lg};
`,Er=Gt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${Qt.spacing.lg};
  
  @media (max-width: ${Qt.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,zr=Gt.div`
  background: rgba(15, 20, 30, 0.5);
  border: 1px solid rgba(74, 157, 255, 0.15);
  border-radius: ${Qt.borderRadius.lg};
  padding: ${Qt.spacing.md};
  margin-bottom: ${Qt.spacing.lg};
`,_r=Gt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${Qt.spacing.sm};
  padding-bottom: ${Qt.spacing.xs};
  border-bottom: 1px solid rgba(74, 157, 255, 0.15);
`,Pr=Gt.span`
  font-family: 'Fira Code', monospace;
  font-size: ${Qt.typography.sizes.caption};
  color: ${Qt.colors.primary};
`,jr=Gt.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`,Tr=Gt.li`
  position: relative;
  padding-left: ${Qt.spacing.lg};
  padding-bottom: ${Qt.spacing.sm};
  font-size: ${Qt.typography.sizes.caption};
  line-height: 1.6;
  color: ${Qt.colors.textSecondary};
  
  &:before {
    content: '•';
    color: ${Qt.colors.primary};
    position: absolute;
    left: 4px;
    top: 0;
    font-size: 18px;
  }
`,Nr=Gt.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Qt.spacing.sm};
  margin-top: ${Qt.spacing.md};
`,Ar=Gt.span`
  background: rgba(74, 157, 255, 0.1);
  border: 1px solid rgba(74, 157, 255, 0.2);
  padding: ${Qt.spacing.xs} ${Qt.spacing.sm};
  border-radius: ${Qt.borderRadius.sm};
  font-size: ${Qt.typography.sizes.caption};
  color: ${Qt.colors.textSecondary};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 157, 255, 0.2);
    color: ${Qt.colors.text};
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '#';
    color: ${Qt.colors.primary};
    margin-right: 4px;
  }
`,Rr=(Gt(dr)`
  width: 100%;
  height: 200px;
  border-radius: ${Qt.borderRadius.md};
  overflow: hidden;
  margin-bottom: ${Qt.spacing.md};
  object-fit: cover;
  background: rgba(20, 25, 35, 0.6);
  border: 1px solid rgba(74, 157, 255, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25),
                0 0 15px rgba(74, 157, 255, 0.2);
    border-color: rgba(74, 157, 255, 0.4);
  }
`,e=>{e.toLowerCase();let t=e;const n=e.match(/(\d+%|\$\d+(?:\.\d+)?[KMB]?|\d+,\d+|\d+\+?)/g);return n&&n.length>0&&n.forEach((e=>{t=t.replace(e,`<strong style="color: #fff;">${e}</strong>`)})),t}),Lr=t=>{let{experience:n}=t;const[r,a]=(0,e.useState)(0),[i,o]=(0,e.useState)(n[0]);(0,e.useEffect)((()=>{o(n[r])}),[r,n]);return(0,Xt.jsx)(pr,{id:"experience",children:(0,Xt.jsxs)(fr,{children:[(0,Xt.jsx)(gr,{children:(0,Xt.jsx)(sn,{level:2,size:"title1",gradient:!0,withAccent:!0,children:"Professional Journey"})}),(0,Xt.jsxs)(mr,{children:[(0,Xt.jsx)(hr,{children:(0,Xt.jsx)(Qn,{items:n.map((e=>({period:e.period,title:e.title,company:e.company,location:e.location}))),activeIndex:r,setActiveIndex:a})}),(0,Xt.jsxs)(yr,{children:[(0,Xt.jsxs)(br,{children:[(0,Xt.jsx)(vr,{children:i.title}),(0,Xt.jsxs)(xr,{children:[(0,Xt.jsx)(wr,{children:i.company}),(0,Xt.jsx)(Sr,{children:i.location}),(0,Xt.jsx)(kr,{children:i.period})]})]}),i.kpis&&i.kpis.length>0&&(0,Xt.jsxs)(Xt.Fragment,{children:[(0,Xt.jsx)($r,{children:"Key Performance Indicators"}),(0,Xt.jsx)(Cr,{children:(e=>{if(!e.kpis||0===e.kpis.length)return[];return e.kpis.map(((e,t)=>{const n=e.match(/\d+(\+|\s)?/),r=n?n[0].toString():"";let a="chart",i=e,o="#4A9DFF";return e.toLowerCase().includes("product")?(a="chart",i="Products Developed",o="#4A9DFF"):e.toLowerCase().includes("team")||e.toLowerCase().includes("engineer")?(a="users",i="Team Members",o="#6C8EFF"):e.toLowerCase().includes("stakeholder")?(a="users",i="Stakeholders",o="#A170F6"):e.toLowerCase().includes("nft")||e.toLowerCase().includes("marketplace")?(a="chart",i="NFT Marketplaces",o="#58EDD2"):(e.toLowerCase().includes("data")||e.toLowerCase().includes("user"))&&(a="chart",i="Data Analysis",o="#FFB155"),{value:r.trim(),label:i,fullText:e,icon:a,accentColor:o,delay:t}})).slice(0,3)})(i).map(((e,t)=>(0,Xt.jsx)(sr,{value:e.value,label:e.label,icon:e.icon,accentColor:e.accentColor,delay:e.delay},t)))})]}),(0,Xt.jsxs)(Er,{children:[(0,Xt.jsxs)("div",{children:[(0,Xt.jsx)($r,{children:"Achievements"}),(0,Xt.jsxs)(zr,{children:[(0,Xt.jsx)(_r,{children:(0,Xt.jsx)(Pr,{children:"resume_achievements.md"})}),(0,Xt.jsx)(jr,{children:i.achievements&&i.achievements.slice(0,5).map(((e,t)=>(0,Xt.jsx)(Tr,{dangerouslySetInnerHTML:{__html:Rr(e)}},t)))})]})]}),(0,Xt.jsxs)("div",{children:[(0,Xt.jsx)($r,{children:"Technologies"}),(0,Xt.jsx)(Nr,{children:i.technologies&&i.technologies.map(((e,t)=>(0,Xt.jsx)(Ar,{children:e},t)))})]})]})]})]})]})})},Or=Gt(tn)`
  background: linear-gradient(180deg, ${Qt.colors.background} 0%, ${Qt.colors.backgroundAlt} 100%);
  padding: ${Qt.spacing.xxl} 0;
`,Ir=Gt(rn)`
  max-width: 1200px;
  margin: 0 auto;
`,Dr=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${Qt.spacing.xl};
  margin-top: ${Qt.spacing.xl};
`,Fr=Gt.div`
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: ${Qt.borderRadius.lg};
  padding: ${Qt.spacing.lg};
  border: 1px solid rgba(74, 157, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`,Mr=Gt.h3`
  font-size: ${Qt.typography.sizes.title3};
  color: ${Qt.colors.text};
  margin-bottom: ${Qt.spacing.sm};
`,Ur=Gt.h4`
  font-size: ${Qt.typography.sizes.title2};
  color: ${Qt.colors.primary};
  margin-bottom: ${Qt.spacing.sm};
`,Br=Gt.p`
  font-size: ${Qt.typography.sizes.body};
  color: ${Qt.colors.textSecondary};
  margin-bottom: ${Qt.spacing.xs};
`,Wr=Gt.p`
  font-size: ${Qt.typography.sizes.body};
  color: ${Qt.colors.textSecondary};
  margin-bottom: ${Qt.spacing.xs};
`,Hr=Gt.span`
  display: inline-block;
  background: rgba(74, 157, 255, 0.1);
  padding: ${Qt.spacing.xs} ${Qt.spacing.sm};
  border-radius: ${Qt.borderRadius.sm};
  font-size: ${Qt.typography.sizes.caption};
  color: ${Qt.colors.primary};
  margin-bottom: ${Qt.spacing.sm};
`,Vr=Gt.p`
  font-size: ${Qt.typography.sizes.body};
  color: ${Qt.colors.textSecondary};
  line-height: 1.6;
`,Gr=e=>{let{education:t}=e;return(0,Xt.jsx)(Or,{id:"education",children:(0,Xt.jsxs)(Ir,{children:[(0,Xt.jsx)(sn,{level:2,size:"title1",gradient:!0,withAccent:!0,children:"Education"}),(0,Xt.jsx)(Dr,{children:t.map(((e,t)=>(0,Xt.jsxs)(Fr,{children:[(0,Xt.jsx)(Mr,{children:e.degree}),(0,Xt.jsx)(Ur,{children:e.field}),(0,Xt.jsx)(Br,{children:e.institution}),(0,Xt.jsx)(Wr,{children:e.location}),(0,Xt.jsx)(Hr,{children:e.period}),(0,Xt.jsx)(Vr,{children:e.description})]},t)))})]})})},Kr=Gt(tn)`
  background: linear-gradient(180deg, ${Qt.colors.backgroundAlt} 0%, ${Qt.colors.background} 100%);
  padding: ${Qt.spacing.xxl} 0;
`,Yr=Gt(rn)`
  max-width: 1200px;
  margin: 0 auto;
`,Qr=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${Qt.spacing.xl};
  margin-top: ${Qt.spacing.xl};
`,qr=Gt.div`
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: ${Qt.borderRadius.lg};
  padding: ${Qt.spacing.lg};
  border: 1px solid rgba(74, 157, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`,Xr=Gt.h3`
  font-size: ${Qt.typography.sizes.title3};
  color: ${Qt.colors.text};
  margin-bottom: ${Qt.spacing.md};
  display: flex;
  align-items: center;
  
  &::before {
    content: '//';
    color: ${Qt.colors.primary};
    margin-right: ${Qt.spacing.sm};
    font-family: 'Fira Code', monospace;
  }
`,Jr=Gt.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Qt.spacing.sm};
`,Zr=Gt.span`
  background: rgba(74, 157, 255, 0.1);
  border: 1px solid rgba(74, 157, 255, 0.2);
  padding: ${Qt.spacing.xs} ${Qt.spacing.sm};
  border-radius: ${Qt.borderRadius.sm};
  font-size: ${Qt.typography.sizes.caption};
  color: ${Qt.colors.textSecondary};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 157, 255, 0.2);
    color: ${Qt.colors.text};
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '#';
    color: ${Qt.colors.primary};
    margin-right: 4px;
  }
`,ea=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${Qt.spacing.md};
  margin-top: ${Qt.spacing.lg};
`,ta=Gt.div`
  display: flex;
  align-items: center;
  font-size: ${Qt.typography.sizes.body};
  color: ${Qt.colors.textSecondary};
  
  &::before {
    content: '→';
    color: ${Qt.colors.primary};
    margin-right: ${Qt.spacing.sm};
  }
`,na=e=>{let{technicalSkills:t,competencies:n}=e;return(0,Xt.jsx)(Kr,{id:"skills",children:(0,Xt.jsxs)(Yr,{children:[(0,Xt.jsx)(sn,{level:2,size:"title1",gradient:!0,withAccent:!0,children:"Skills & Competencies"}),(0,Xt.jsxs)(Qr,{children:[(0,Xt.jsxs)(qr,{children:[(0,Xt.jsx)(Xr,{children:"Product Management"}),(0,Xt.jsx)(Jr,{children:t.productManagement.map(((e,t)=>(0,Xt.jsx)(Zr,{children:e},t)))})]}),(0,Xt.jsxs)(qr,{children:[(0,Xt.jsx)(Xr,{children:"Tools & Technologies"}),(0,Xt.jsx)(Jr,{children:t.tools.map(((e,t)=>(0,Xt.jsx)(Zr,{children:e},t)))})]}),(0,Xt.jsxs)(qr,{children:[(0,Xt.jsx)(Xr,{children:"Programming"}),(0,Xt.jsx)(Jr,{children:t.programming.map(((e,t)=>(0,Xt.jsx)(Zr,{children:e},t)))})]}),(0,Xt.jsxs)(qr,{children:[(0,Xt.jsx)(Xr,{children:"Cloud & Platforms"}),(0,Xt.jsx)(Jr,{children:t.cloudPlatforms.map(((e,t)=>(0,Xt.jsx)(Zr,{children:e},t)))})]}),(0,Xt.jsxs)(qr,{children:[(0,Xt.jsx)(Xr,{children:"Data & Analytics"}),(0,Xt.jsx)(Jr,{children:t.data.map(((e,t)=>(0,Xt.jsx)(Zr,{children:e},t)))})]})]}),(0,Xt.jsxs)(qr,{style:{marginTop:Qt.spacing.xl},children:[(0,Xt.jsx)(Xr,{children:"Core Competencies"}),(0,Xt.jsx)(ea,{children:n.map(((e,t)=>(0,Xt.jsx)(ta,{children:e},t)))})]})]})})},ra=Gt(tn)`
  background: linear-gradient(180deg, ${Qt.colors.backgroundAlt} 0%, ${Qt.colors.background} 100%);
  padding: ${Qt.spacing.xxl} 0;
`,aa=Gt(rn)`
  max-width: 1200px;
  margin: 0 auto;
`,ia=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${Qt.spacing.xl};
  margin-top: ${Qt.spacing.xl};
`,oa=Gt.div`
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: ${Qt.borderRadius.lg};
  padding: ${Qt.spacing.lg};
  border: 1px solid rgba(74, 157, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`,la=Gt(dr)`
  width: 100%;
  height: 200px;
  border-radius: ${Qt.borderRadius.md};
  overflow: hidden;
  margin-bottom: ${Qt.spacing.md};
`,sa=Gt.h3`
  font-size: ${Qt.typography.sizes.title3};
  color: ${Qt.colors.text};
  margin-bottom: ${Qt.spacing.sm};
`,ca=Gt.p`
  font-size: ${Qt.typography.sizes.body};
  color: ${Qt.colors.textSecondary};
  margin-bottom: ${Qt.spacing.md};
  line-height: 1.6;
`,ua=Gt.p`
  font-size: ${Qt.typography.sizes.body};
  color: ${Qt.colors.primary};
  margin-bottom: ${Qt.spacing.sm};
  font-weight: 500;
`,da=Gt.p`
  font-size: ${Qt.typography.sizes.body};
  color: ${Qt.colors.textSecondary};
  margin-bottom: ${Qt.spacing.md};
  line-height: 1.6;
`,pa=Gt.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Qt.spacing.sm};
`,fa=Gt.span`
  background: rgba(74, 157, 255, 0.1);
  border: 1px solid rgba(74, 157, 255, 0.2);
  padding: ${Qt.spacing.xs} ${Qt.spacing.sm};
  border-radius: ${Qt.borderRadius.sm};
  font-size: ${Qt.typography.sizes.caption};
  color: ${Qt.colors.textSecondary};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 157, 255, 0.2);
    color: ${Qt.colors.text};
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '#';
    color: ${Qt.colors.primary};
    margin-right: 4px;
  }
`,ga=e=>{let{projects:t}=e;return(0,Xt.jsx)(ra,{id:"projects",children:(0,Xt.jsxs)(aa,{children:[(0,Xt.jsx)(sn,{level:2,size:"title1",gradient:!0,withAccent:!0,children:"Projects"}),(0,Xt.jsx)(ia,{children:t.map(((e,t)=>(0,Xt.jsxs)(oa,{children:[(0,Xt.jsx)(la,{src:e.image,alt:e.title,width:"100%",height:"200px"}),(0,Xt.jsx)(sa,{children:e.title}),(0,Xt.jsx)(ca,{children:e.description}),(0,Xt.jsx)(ua,{children:e.role}),(0,Xt.jsx)(da,{children:e.impact}),(0,Xt.jsx)(pa,{children:e.technologies.map(((e,t)=>(0,Xt.jsx)(fa,{children:e},t)))})]},t)))})]})})},ma=Gt(tn)`
  background: linear-gradient(180deg, ${Qt.colors.background} 0%, ${Qt.colors.backgroundAlt} 100%);
  padding: ${Qt.spacing.xxl} 0;
`,ha=Gt(rn)`
  max-width: 1200px;
  margin: 0 auto;
`,ya=Gt.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${Qt.spacing.xl};
  margin-top: ${Qt.spacing.xl};
`,ba=Gt.div`
  background: rgba(20, 25, 35, 0.6);
  backdrop-filter: blur(10px);
  border-radius: ${Qt.borderRadius.lg};
  padding: ${Qt.spacing.lg};
  border: 1px solid rgba(74, 157, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`,va=Gt.h3`
  font-size: ${Qt.typography.sizes.title3};
  color: ${Qt.colors.text};
  margin-bottom: ${Qt.spacing.sm};
`,xa=Gt.h4`
  font-size: ${Qt.typography.sizes.title3};
  color: ${Qt.colors.primary};
  margin-bottom: ${Qt.spacing.sm};
`,wa=Gt.p`
  font-size: ${Qt.typography.sizes.body};
  color: ${Qt.colors.textSecondary};
  margin-bottom: ${Qt.spacing.xs};
`,ka=Gt.span`
  display: inline-block;
  background: rgba(74, 157, 255, 0.1);
  padding: ${Qt.spacing.xs} ${Qt.spacing.sm};
  border-radius: ${Qt.borderRadius.sm};
  font-size: ${Qt.typography.sizes.caption};
  color: ${Qt.colors.primary};
  margin-bottom: ${Qt.spacing.sm};
`,Sa=Gt.p`
  font-size: ${Qt.typography.sizes.body};
  color: ${Qt.colors.textSecondary};
  line-height: 1.6;
`,$a=e=>{let{volunteerExperience:t}=e;return(0,Xt.jsx)(ma,{id:"volunteer",children:(0,Xt.jsxs)(ha,{children:[(0,Xt.jsx)(sn,{level:2,size:"title1",gradient:!0,withAccent:!0,children:"Volunteer Experience"}),(0,Xt.jsx)(ya,{children:t.map(((e,t)=>(0,Xt.jsxs)(ba,{children:[(0,Xt.jsx)(va,{children:e.role}),(0,Xt.jsx)(xa,{children:e.organization}),(0,Xt.jsx)(wa,{children:e.location}),(0,Xt.jsx)(ka,{children:e.period}),(0,Xt.jsx)(Sa,{children:e.description})]},t)))})]})})},Ca=Gt(tn)`
  background: linear-gradient(180deg, #050505 0%, ${Qt.colors.backgroundAlt} 100%);
  position: relative;
  overflow: hidden;
  padding: ${Qt.spacing.xxl} 0;
  
  /* Abstract grid pattern */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(0, 113, 227, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 113, 227, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
    opacity: 0.2;
    z-index: 0;
  }
`,Ea=Gt(rn)`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  padding-left: 24px;
  padding-right: 24px;
`,za=Gt.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${Qt.spacing.xl};
  margin-top: ${Qt.spacing.xl};
  
  @media (max-width: ${Qt.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${Qt.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,_a=Gt.div`
  background: ${Qt.colors.glass};
  border-radius: ${Qt.borderRadius.xl};
  padding: 2.5rem 2rem;
  backdrop-filter: blur(14px);
  border: 1.5px solid ${Qt.colors.glassBorder};
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 12px 32px rgba(0,0,0,0.18);
    border-color: ${Qt.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${Qt.colors.primary}, ${Qt.colors.secondary});
    opacity: 0.5;
    transform: translateY(3px);
    transition: all ${Qt.transitions.normal};
  }
`,Pa=Gt.div`
  display: flex;
  align-items: center;
  margin-bottom: ${Qt.spacing.md};
`,ja=Gt.div`
  width: 50px;
  height: 50px;
  border-radius: ${Qt.borderRadius.md};
  background: ${Qt.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${Qt.spacing.md};
  overflow: hidden;
  
  ${e=>e.image?`\n    background-image: url(${e.image});\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n  `:""}
`,Ta=Gt.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>`hsla(${e.issuer.split("").reduce(((e,t)=>e+t.charCodeAt(0)),0)%360}, 70%, 30%, 0.8)`};
  font-weight: bold;
  color: white;
  font-size: 14px;
  
  &::after {
    content: '${e=>e.issuer.substring(0,1)}';
  }
`,Na=Gt.div`
  flex: 1;
`,Aa=Gt.h3`
  margin: 0;
  font-size: ${Qt.typography.sizes.title3};
  color: ${Qt.colors.text};
`,Ra=Gt.div`
  font-size: ${Qt.typography.sizes.caption};
  color: ${Qt.colors.textSecondary};
  display: flex;
  align-items: center;
  
  &::before {
    content: 'by';
    margin-right: ${Qt.spacing.xs};
    opacity: 0.6;
  }
`,La=Gt.div`
  font-family: 'Fira Code', monospace;
  font-size: ${Qt.typography.sizes.caption};
  color: ${Qt.colors.primary};
  margin: ${Qt.spacing.sm} 0;
  padding: ${Qt.spacing.xs} ${Qt.spacing.sm};
  background: rgba(0, 113, 227, 0.1);
  border-radius: ${Qt.borderRadius.sm};
  display: inline-block;
`,Oa=Gt.p`
  margin: ${Qt.spacing.md} 0;
  font-size: ${Qt.typography.sizes.body};
  color: ${Qt.colors.textSecondary};
  line-height: 1.6;
`,Ia=Gt.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Qt.spacing.xs};
  margin-top: ${Qt.spacing.md};
`,Da=Gt.span`
  background: rgba(255, 255, 255, 0.05);
  padding: ${Qt.spacing.xs} ${Qt.spacing.sm};
  border-radius: ${Qt.borderRadius.sm};
  font-size: ${Qt.typography.sizes.caption};
  color: ${Qt.colors.textSecondary};
  
  &::before {
    content: '#';
    color: ${Qt.colors.secondary};
    margin-right: 2px;
  }
`,Fa=Gt.a`
  font-size: ${Qt.typography.sizes.caption};
  color: ${Qt.colors.primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-top: ${Qt.spacing.md};
  
  &:hover {
    text-decoration: underline;
  }
  
  &::before {
    content: '→';
    margin-right: ${Qt.spacing.xs};
  }
`,Ma=e=>{let{certifications:t}=e;return t&&0!==t.length?(0,Xt.jsx)(Ca,{id:"certifications",children:(0,Xt.jsxs)(Ea,{children:[(0,Xt.jsx)(sn,{level:2,size:"headline",align:"center",marginBottom:"large",children:"Professional Certifications"}),(0,Xt.jsx)(za,{children:t.map(((e,t)=>(0,Xt.jsxs)(_a,{children:[(0,Xt.jsxs)(Pa,{children:[(0,Xt.jsx)(ja,{image:e.image,children:!e.image&&(0,Xt.jsx)(Ta,{issuer:e.issuer})}),(0,Xt.jsxs)(Na,{children:[(0,Xt.jsx)(Aa,{children:e.name}),(0,Xt.jsx)(Ra,{children:e.issuer})]})]}),(0,Xt.jsxs)(La,{children:[e.date," ",e.validUntil?`- ${e.validUntil}`:""]}),e.description&&(0,Xt.jsx)(Oa,{children:e.description}),e.skills&&e.skills.length>0&&(0,Xt.jsx)(Ia,{children:e.skills.map(((e,t)=>(0,Xt.jsx)(Da,{children:e},t)))}),e.credentialUrl&&(0,Xt.jsxs)(Fa,{href:e.credentialUrl,target:"_blank",rel:"noopener noreferrer",children:["Verify Credential ",e.credentialId?`#${e.credentialId}`:""]})]},t)))})]})}):null},Ua={personalInfo:{name:"Anup Shrestha",title:"Innovation Strategist & Product Leader",tagline:"Transforming business visions into digital realities through human-centered design and data intelligence.",email:"anupsth23@gmail.com",location:"Toronto, Ontario",profileImage:"/images/profile.jpg",socialLinks:{linkedin:"https://linkedin.com/in/anup-shrestha",twitter:"https://twitter.com/anupshrestha",medium:"https://medium.com/@anupshrestha"},philosophy:"I believe in using technology as a catalyst for meaningful change, focusing on products that solve real human problems while driving business growth. My approach combines analytical precision with creative empathy."},summary:"Visionary Product Leader with a proven ability to transform abstract concepts into market-ready innovations. I specialize in orchestrating the delicate balance between business objectives, technical possibilities, and human needs. My data-first methodology and customer-centric focus have consistently delivered products that not only meet market demands but shape future user expectations. With expertise spanning from zero-to-one product creation to strategic scaling, I thrive in fast-paced environments where creativity meets execution excellence.",vision:"I envision a future where product development transcends traditional boundaries, creating digital experiences that feel intuitively human while leveraging the full potential of emerging technologies. My goal is to lead teams that build the invisible infrastructure powering tomorrow's most essential innovations.",experience:[{title:"Product Manager",company:"TwinsAI",location:"USA (Remote)",period:"Jan 2025 - Present",responsibilities:["Led cross-functional teams across engineering, design, sales, and marketing to deliver secure, scalable, and compliant SaaS solutions in 3+ global markets","Developed and maintained the product roadmap, aligning cross-functional teams on priorities and ensuring timely delivery of high-impact features","Owned end-to-end product strategy and execution for AI-driven platforms, resulting in measurable improvements in product adoption and customer retention","Drove onboarding and flow optimizations, leveraging analytics to increase user conversion by 22%","Led sprint planning and Agile ceremonies, driving continuous improvement and fostering a culture of accountability and collaboration","Facilitated Agile ceremonies (sprint planning, stand-ups, retrospectives) and managed product roadmaps, user stories, and KPIs using Jira, GitHub, and Google Suite"],kpis:["Led 3+ global market expansions","Increased user conversion by 22%","Managed cross-functional teams across 8 departments"],achievements:["Led cross-functional teams across engineering, design, sales, and marketing to deliver secure, scalable, and compliant SaaS solutions in 3+ global markets","Developed and maintained the product roadmap, aligning cross-functional teams on priorities and ensuring timely delivery of high-impact features","Owned end-to-end product strategy and execution for AI-driven platforms, resulting in measurable improvements in product adoption and customer retention","Drove onboarding and flow optimizations, leveraging analytics to increase user conversion by 22%","Led sprint planning and Agile ceremonies, driving continuous improvement and fostering a culture of accountability and collaboration"],technologies:["Jira","GitHub","Google Suite","Agile/Scrum","SaaS"],image:"/images/experience/twinsailogo.svg"},{title:"Head of Product Operations (Fractional)",company:"Pandaflow",location:"USA (Remote)",period:"Jan 2024 - Present",responsibilities:["Coordinated timelines and resource allocation for automation projects, improving project delivery speed by 15% across 3+ internal teams","Monitored project milestones and deliverables, reducing project risks by 20% through proactive tracking and stakeholder communication","Drafted 10+ key project documents, improving stakeholder communication efficiency by 30%"],kpis:["Improved project delivery speed by 15%","Reduced project risks by 20%","Improved stakeholder communication efficiency by 30%"],achievements:["Coordinated timelines and resource allocation for automation projects, improving project delivery speed by 15% across 3+ internal teams","Monitored project milestones and deliverables, reducing project risks by 20% through proactive tracking and stakeholder communication","Drafted 10+ key project documents, improving stakeholder communication efficiency by 30%"],technologies:["Project Management","Automation","Stakeholder Management","Documentation"],image:"/images/experience/pandaflowlogo.png"},{title:"Advanced AI Data Trainer",company:"Invisible Technologies",location:"USA",period:"Jan 2023 - Apr 2023",responsibilities:["Trained advanced AI language models, providing detailed conversational examples and feedback, resulting in measurable improvements in model accuracy and safety","Labeled and categorized AI-generated outputs, developing processes that improved data quality by 18% and annotation efficiency by 12%","Performed quality assurance on annotated datasets, contributing to a 15% reduction in data errors for production AI systems"],kpis:["Improved data quality by 18%","Increased annotation efficiency by 12%"],achievements:["Trained advanced AI language models, providing detailed conversational examples and feedback, resulting in measurable improvements in model accuracy and safety","Labeled and categorized AI-generated outputs, developing processes that improved data quality by 18% and annotation efficiency by 12%","Performed quality assurance on annotated datasets, contributing to a 15% reduction in data errors for production AI systems"],technologies:["AI/ML","Data Annotation","Quality Assurance","Natural Language Processing"],image:"/images/experience/invisiblelogo.png"},{title:"Project Manager",company:"Rumsan Associates",location:"Nepal",period:"December 2021 - March 2023",responsibilities:["Delivered 10+ SaaS and blockchain projects, including retail crypto trading platforms and NFT marketplaces, ensuring 100% regulatory compliance and secure launches","Designed and launched a blockchain-based financial product, securing 4+ government partnerships and onboarding 15,000+ users within the first year","Conducted market research and user acceptance testing, reducing post-release bugs by 20% and improving customer satisfaction scores by 17%","Owned the full product lifecycle for B2B2C offerings, from requirements gathering and API design to partner onboarding and support","Managed the GitHub Wiki as a central knowledge hub and created comprehensive 'how-to' guides and onboarding materials, empowering clients and customers to maximize product value and reducing support inquiries by 18%"],kpis:["Delivered 10+ SaaS and blockchain projects","Secured 4+ government partnerships","Onboarded 15,000+ users","Mentored +12 people to become project managers"],achievements:["Delivered 10+ SaaS and blockchain projects, including retail crypto trading platforms and NFT marketplaces, ensuring 100% regulatory compliance and secure launches","Designed and launched a blockchain-based financial product, securing 4+ government partnerships and onboarding 15,000+ users within the first year","Conducted market research and user acceptance testing, reducing post-release bugs by 20% and improving customer satisfaction scores by 17%","Owned the full product lifecycle for B2B2C offerings, from requirements gathering and API design to partner onboarding and support","Managed the GitHub Wiki as a central knowledge hub and created comprehensive 'how-to' guides and onboarding materials, empowering clients and customers to maximize product value and reducing support inquiries by 18%"],technologies:["Blockchain","SaaS","GitHub","API Design","B2B2C"],image:"/images/experience/rumsanlogo.png"},{title:"Business Analyst",company:"Rumsan Associates",location:"Nepal",period:"November 2018 - November 2021",responsibilities:["Designed wireframes and prototypes (Figma) for 8+ web and mobile applications, accelerating development cycles by 20% and reducing client feedback loops","Acted as a bridge between business and technical teams, ensuring alignment on product vision, compliance, and growth strategy","Authored BRDs, SRS, and user stories for 10+ projects, reducing development timelines by 10%","Utilized A/B testing and analytics to improve onboarding by 25% and reduce churn by 25%","Supported the development of digital asset solutions for disaster relief, designing token-based workflows for transparent, secure aid distribution"],kpis:["Designed 8+ web and mobile applications","Reduced development timelines by 10%","Reduced churn by 25%","#1 award for UNCDF"],achievements:["Designed wireframes and prototypes (Figma) for 8+ web and mobile applications, accelerating development cycles by 20% and reducing client feedback loops","Acted as a bridge between business and technical teams, ensuring alignment on product vision, compliance, and growth strategy","Authored BRDs, SRS, and user stories for 10+ projects, reducing development timelines by 10%","Utilized A/B testing and analytics to improve onboarding by 25% and reduce churn by 25%","Supported the development of digital asset solutions for disaster relief, designing token-based workflows for transparent, secure aid distribution"],technologies:["Figma","A/B Testing","Analytics","BRD/SRS","User Stories"],image:"/images/experience/business-analyst.svg"}],skills:[{name:"Product Strategy",level:9,category:"domain"},{name:"User Experience Design",level:8,category:"domain"},{name:"Data Analytics",level:9,category:"technical"},{name:"Market Research",level:8,category:"domain"},{name:"Agile Methodologies",level:9,category:"domain"},{name:"Stakeholder Communication",level:9,category:"soft"},{name:"Technical Architecture",level:7,category:"technical"},{name:"Business Strategy",level:8,category:"domain"},{name:"Python",level:7,category:"technical"},{name:"SQL",level:8,category:"technical"},{name:"AI/ML Product Development",level:8,category:"domain"},{name:"Cross-functional Leadership",level:9,category:"soft"}],projects:[{title:"TwinsAI",description:"An AI-powered sales engagement platform that revolutionizes how sales teams connect with prospects through intelligent automation.",role:"Led product strategy, development and go-to-market execution",impact:"Increased customer conversion by 400% and reduced sales cycle by 35% for enterprise clients",technologies:["Artificial Intelligence","Natural Language Processing","Sales Automation","CRM Integration"],image:"/product-manager-portfolio/images/projects/twinsai.svg"},{title:"Rahat",description:"Blockchain-based humanitarian aid distribution platform enabling transparent, efficient delivery of resources to disaster-affected communities.",role:"Defined product vision, managed development roadmap, and coordinated with government stakeholders",impact:"Successfully distributed aid to 15,000+ beneficiaries and reduced distribution costs by 42%",technologies:["Blockchain","Digital Wallets","Offline Authentication","Humanitarian Tech"],image:"/product-manager-portfolio/images/projects/rahat.png"},{title:"AgriClear",description:"Blockchain implemented on the supply chain of agro products tracked inside Nepal and shipping internationally.",role:"Collaborated with more than 20 vendors and led the technical implementation.",impact:"Won #1 for UNCDF 2019 for innovation in supply chain transparency and efficiency.",technologies:["Blockchain","Supply Chain","AgriTech","International Shipping"],image:"/product-manager-portfolio/images/projects/artswap.png"}],testimonials:[{quote:"Anup has a rare ability to see both the forest and the trees. He consistently delivers strategic vision while maintaining a firm grasp on technical execution details.",author:"Sarah Chen",role:"CTO",company:"TwinsAI",image:"/images/testimonials/testimonial1.svg"},{quote:"Working with Anup transformed how we approach product development. His data-driven methodology and customer-first mindset created a paradigm shift in our organization.",author:"Rajiv Sharma",role:"CEO",company:"Rumsan Associates",image:"/images/testimonials/testimonial2.svg"},{quote:"Anup's ability to translate complex technical concepts into business value is unparalleled. He bridges the gap between innovation and practical application masterfully.",author:"Emily Johnson",role:"VP of Innovation",company:"Global Financial Services",image:"/images/testimonials/testimonial3.svg"}],certifications:[{name:"Data Analytics Essentials",issuer:"Cisco",date:"2024",description:"Comprehensive training in data analytics fundamentals and practical applications.",skills:["Data Analysis","Data Visualization","Business Intelligence"],image:"/images/certifications/cisco.svg"},{name:"Google Data Analytics Professional Certificate",issuer:"Google",date:"2023",description:"Comprehensive training in data analytics including data preparation, analysis, visualization, and interpretation for business decision-making.",skills:["Data Analysis","R Programming","SQL","Tableau","Data Visualization"],image:"/images/certifications/google.svg"},{name:"Google Project Management Professional Certificate",issuer:"Google",date:"2022",description:"Professional certification in project management methodologies and tools.",skills:["Project Management","Agile","Scrum","Risk Management"],image:"/images/certifications/google.svg"},{name:"Programming for Everybody (Python)",issuer:"University of Michigan",date:"2020",description:"Comprehensive introduction to Python programming and computational thinking.",skills:["Python","Programming Fundamentals","Problem Solving"],image:"/images/certifications/michigan.svg"},{name:"Investment Management Specialization",issuer:"University of Geneva",date:"2020",description:"Specialized training in investment strategies and portfolio management.",skills:["Investment Analysis","Portfolio Management","Financial Markets"],image:"/images/certifications/geneva.svg"},{name:"Introduction to Psychology",issuer:"Yale University",date:"2020",description:"Foundational course in psychological principles and human behavior.",skills:["Psychology","Human Behavior","Research Methods"],image:"/images/certifications/yale.svg"}],education:[{degree:"Post Graduate Certificate",field:"Advanced Project Management \u2013 Information Technology",institution:"Lambton College",location:"Toronto, Canada",period:"2023 - 2024",description:"Advanced studies in project management methodologies and information technology integration."},{degree:"Bachelor of Information & Management",field:"Information & Management",institution:"Thames International College, Tribhuvan University",location:"Nepal",period:"2014 - 2018",description:"Comprehensive study of information systems and management principles."}],awards:[{title:"Microsoft Twilio Hackathon",date:"2024",description:"Participated in the Microsoft Twilio Hackathon, showcasing innovative solutions in cloud communications."},{title:"UNCDF 2019",date:"2019",description:"Winner of funding for product innovation and MVP delivery, demonstrating excellence in product development and innovation."}],competencies:["Product Strategy & Roadmapping","API Product Design & Developer Experience","Agile & Scrum Leadership","Cross-Functional Team Leadership","Regulatory & Compliance Management","Data Analytics & A/B Testing (PostHog, Power BI)","User Onboarding & Growth Optimization","SaaS & Blockchain Product Delivery","Stakeholder & Partner Management","UX/UI Collaboration (Figma, Miro)"],technicalSkills:{productManagement:["Agile","Scrum","MVP Development","Product Roadmapping"],tools:["Jira","Confluence","Figma","Miro","Notion","Git","Postman","Power BI","Excel","Tableau","Google Suite","Slack"],programming:["Python","SQL","R (basic)"],cloudPlatforms:["AWS","Unix/Linux","Blockchain (Ethereum, Matic, BNB)"],data:["Data Visualization","Data Analytics","A/B Testing","Machine Learning","AI/LLM"]},volunteerExperience:[{role:"Blood Donation Event Volunteer",organization:"Hamro LifeBank",location:"Nepal",period:"2019 - 2023",description:"Coordinated logistics for 12 events, collecting 400+ units of blood and potentially saving 90+ lives."},{role:"General Member",organization:"Rotaract Club of Thames International College",location:"Nepal",period:"2016 - 2021",description:"Led volunteer efforts and charity drives, including blanket and clothing collections for underserved communities."}]},Ba=()=>(0,Xt.jsxs)(Zt,{children:[(0,Xt.jsx)(wn,{personalInfo:Ua.personalInfo}),(0,Xt.jsx)(Fn,{summary:Ua.summary,vision:Ua.vision}),(0,Xt.jsx)(Lr,{experience:Ua.experience}),(0,Xt.jsx)(Gr,{education:Ua.education||[]}),(0,Xt.jsx)(na,{technicalSkills:Ua.technicalSkills||{productManagement:[],tools:[],programming:[],cloudPlatforms:[],data:[]},competencies:Ua.competencies||[]}),(0,Xt.jsx)(ga,{projects:Ua.projects||[]}),(0,Xt.jsx)($a,{volunteerExperience:Ua.volunteerExperience||[]}),(0,Xt.jsx)(Ma,{certifications:Ua.certifications||[]})]});t.createRoot(document.getElementById("root")).render((0,Xt.jsx)(e.StrictMode,{children:(0,Xt.jsx)(Ba,{})}))})()})();
//# sourceMappingURL=main.6a9e78a3.js.map