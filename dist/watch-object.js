!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.WatchObject=e():t.WatchObject=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.unwatch=e.watch=void 0;var o=n(4),i=r(o),c=n(3),a=r(c),f=(e.watch=function(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];var r=e[1];_(r)?g.apply(void 0,e):f(r)?b.apply(void 0,e):w.apply(void 0,e)},e.unwatch=function(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];var r=e[1];_(r)||void 0===r?m.apply(void 0,e):f(r)?O.apply(void 0,e):x.apply(void 0,e)},function(t){return"[object Array]"==={}.toString.call(t)}),u=function(t){return"[object Object]"==={}.toString.call(t)},_=function(t){return"[object Function]"==={}.toString.call(t)},s=function(t,e,n){(0,a["default"])(t,e,{enumerable:!1,configurable:!0,writable:!1,value:n})},l=function(t,e,n,r){(0,a["default"])(t,e,{get:n,set:function(t){r.call(this,t)},enumerable:!0,configurable:!0})},p=function(t,e,n,r,o){var i=void 0,c=t.__watchers__[e];(i=t.__watchers__.__watchall__)&&(c=c?c.concat(i):i);for(var a=c?c.length:0,f=0;a>f;f++)c[f].call(t,n,r,e,o)},v=["pop","push","reverse","shift","sort","unshift","splice"],h=function(t,e,n,r){s(t,n,function(){for(var o=0,i=void 0,c=void 0,a=arguments.length,f=Array(a),u=0;a>u;u++)f[u]=arguments[u];if("splice"===n){var _=f[0],s=_+f[1];i=t.slice(_,s),c=[];for(var l=2;l<f.length;l++)c[l-2]=f[l];o=_}else c="push"===n||"unshift"===n?f.length>0?f:void 0:f.length>0?f[0]:void 0;var p=e.apply(t,f);return"pop"===n?(i=p,o=t.length):"push"===n?o=t.length-1:"shift"===n?i=p:"unshift"!==n&&void 0===c&&(c=p),r.call(t,o,n,c,i),p})},d=function(t,e){if(_(e)&&t&&!(t instanceof String)&&f(t))for(var n=v.length;n>0;n--){var r=v[n-1];h(t,t[r],r,e)}},y=function(t,e,n,r){var o=!1,c=f(t);void 0===t.__watchers__&&(s(t,"__watchers__",{}),c&&d(t,function(n,o,i,c){if(p(t,n,i,c,o),0!==r&&i&&(u(i)||f(i))){var a=void 0,_=t.__watchers__[e];(a=t.__watchers__.__watchall__)&&(_=_?_.concat(a):a);for(var s=_?_.length:0,l=0;s>l;l++)if("splice"!==o)g(i,_[l],void 0===r?r:r-1);else for(var v=0;v<i.length;v++)g(i[v],_[l],void 0===r?r:r-1)}})),void 0===t.__proxy__&&s(t,"__proxy__",{}),void 0===t.__watchers__[e]&&(t.__watchers__[e]=[],c||(o=!0));for(var _=0;_<t.__watchers__[e].length;_++)if(t.__watchers__[e][_]===n)return;t.__watchers__[e].push(n),o&&!function(){var n=(0,i["default"])(t,e);void 0!==n?!function(){var r={enumerable:n.enumerable,configurable:n.configurable},o=["get","set"];o.forEach(function(e){void 0!==n[e]&&(r[e]=function(){for(var r=arguments.length,o=Array(r),i=0;r>i;i++)o[i]=arguments[i];return n[e].apply(t,o)})});var i=["writable","value"];i.forEach(function(t){void 0!==n[t]&&(r[t]=n[t])}),(0,a["default"])(t.__proxy__,e,r)}():t.__proxy__[e]=t[e];var o=function(){return t.__proxy__[e]},c=function(n){var o=t.__proxy__[e];if(0!==r&&t[e]&&(u(t[e])||f(t[e]))&&!t[e].__watchers__)for(var i=0;i<t.__watchers__[e].length;i++)g(t[e],t.__watchers__[e][i],void 0===r?r:r-1);o!==n&&(t.__proxy__[e]=n,p(t,e,n,o,"set"))};l(t,e,o,c)}()},g=function P(t,e,n){if("string"!=typeof t&&(t instanceof Object||f(t)))if(f(t)){if(y(t,"__watchall__",e,n),void 0===n||n>0)for(var r=0;r<t.length;r++)P(t[r],e,n)}else{var o=[];for(var i in t)({}).hasOwnProperty.call(t,i)&&o.push(i);b(t,o,e,n)}},w=function(t,e,n,r){"string"!=typeof t&&(t instanceof Object||f(t))&&(_(t[e])||(null!==t[e]&&(void 0===r||r>0)&&g(t[e],n,void 0!==r?r-1:r),y(t,e,n,r)))},b=function(t,e,n,r){if("string"!=typeof t&&(t instanceof Object||f(t)))for(var o=0;o<e.length;o++){var i=e[o];w(t,i,n,r)}},x=function(t,e,n){if(t.__watchers__[e])if(void 0===n)delete t.__watchers__[e];else for(var r=0;r<t.__watchers__[e].length;r++)t.__watchers__[e][r]===n&&t.__watchers__[e].splice(r,1)},O=function(t,e,n){for(var r in e)e.hasOwnProperty(r)&&x(t,e[r],n)},j=function S(t,e){var n=[];for(var r in t)t.hasOwnProperty(r)&&(t[r]instanceof Object&&S(t[r],e),n.push(r));O(t,n,e)},m=function(t,e){if(!(t instanceof String||!t instanceof Object&&!f(t)))if(f(t)){for(var n=["__watchall__"],r=0;r<t.length;r++)n.push(r);O(t,n,e)}else j(t,e)}},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e,n){t.exports={"default":n(5),__esModule:!0}},function(t,e,n){t.exports={"default":n(6),__esModule:!0}},function(t,e,n){var r=n(2);t.exports=function(t,e,n){return r.setDesc(t,e,n)}},function(t,e,n){var r=n(2);n(17),t.exports=function(t,e){return r.getDesc(t,e)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(7);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(13),o=n(1),i=n(9),c="prototype",a=function(t,e,n){var f,u,_,s=t&a.F,l=t&a.G,p=t&a.S,v=t&a.P,h=t&a.B,d=t&a.W,y=l?o:o[e]||(o[e]={}),g=l?r:p?r[e]:(r[e]||{})[c];l&&(n=e);for(f in n)u=!s&&g&&f in g,u&&f in y||(_=u?g[f]:n[f],y[f]=l&&"function"!=typeof g[f]?n[f]:h&&u?i(_,r):d&&g[f]==_?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[c]=t[c],e}(_):v&&"function"==typeof _?i(Function.call,_):_,v&&((y[c]||(y[c]={}))[f]=_))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(8);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(11),o=n(1),i=n(12);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],c={};c[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",c)}},function(t,e,n){var r=n(14),o=n(10);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(16);n(15)("getOwnPropertyDescriptor",function(t){return function(e,n){return t(r(e),n)}})}])});