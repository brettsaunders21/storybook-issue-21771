!function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}function r(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(r,t,o){return(t=function(r){var t=function(r,t){if("object"!==e(r)||null===r)return r;var o=r[Symbol.toPrimitive];if(void 0!==o){var n=o.call(r,t||"default");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===e(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}System.register(["./Header-legacy.8724e22f.js","./Button-legacy.667edb92.js"],(function(e,r){"use strict";var o;return{setters:[function(e){o=e.M},function(){}],execute:function(){e("default",{title:"Example/Header",component:o,tags:["autodocs"],render:function(e,r){var t=r.argTypes;return{props:Object.keys(t),components:{MyHeader:o},template:'<my-header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />'}},parameters:{layout:"fullscreen"}});var r,n,u,i,c,a,s=e("LoggedIn",{args:{user:{name:"Jane Doe"}}}),l=e("LoggedOut",{});s.parameters=t(t({},s.parameters),{},{docs:t(t({},null===(r=s.parameters)||void 0===r?void 0:r.docs),{},{source:t({originalSource:"{\n  args: {\n    user: {\n      name: 'Jane Doe'\n    }\n  }\n}"},null===(n=s.parameters)||void 0===n||null===(u=n.docs)||void 0===u?void 0:u.source)})}),l.parameters=t(t({},l.parameters),{},{docs:t(t({},null===(i=l.parameters)||void 0===i?void 0:i.docs),{},{source:t({originalSource:"{}"},null===(c=l.parameters)||void 0===c||null===(a=c.docs)||void 0===a?void 0:a.source)})});e("__namedExportsOrder",["LoggedIn","LoggedOut"])}}}))}();
//# sourceMappingURL=Header.stories-legacy.6512cb92.js.map