(()=>{"use strict";var e={578:(e,t,i)=>{i.d(t,{Z:()=>u});var r=i(645),n=i.n(r),o=i(667),a=i.n(o),s=i(740),l=i(119),d=n()((function(e){return e[1]})),c=a()(s),f=a()(l);d.push([e.id,'@font-face{font-family:"Rye";src:url('+c+') format("truetype")}@font-face{font-family:"Sanchez";src:url('+f+') format("truetype")}body{margin:0}#grid{display:grid;margin:0;padding:0;min-height:100vh;grid-template-rows:1fr 4fr 1fr 2fr;justify-items:center;align-items:center}header{grid-row:1;justify-self:start;padding-left:2em}header h1{margin:0;padding:0;font-family:Rye;font-weight:100}header h1#day{font-family:Sanchez;display:inline}#plant{grid-row:2;background-color:#90ee90;width:40%;height:100%;border-radius:30px}#controls{grid-row:3;display:grid;grid-template-columns:1fr 1fr 1fr;justify-items:center;align-items:center}#controls span#left,#controls span#right{width:0;height:0;display:block;border:1em solid transparent;opacity:.5}#controls span#left:hover,#controls span#right:hover{opacity:1}#controls span#right{margin-left:1em;padding-left:1em;border-left:1.6em solid #000;border-right:0 solid transparent}#controls span#left{margin-right:1em;padding-right:1em;border-right:1.6em solid #000;border-left:0 solid transparent}#fact{font-family:Sanchez;font-size:1.5em;align-self:start;width:50%;grid-row:4}#fact p{margin:0;padding:0}',""]);const u=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,r){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(n[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&n[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},604:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var r=i(379),n=i.n(r),o=i(578);n()(o.Z,{insert:"head",singleton:!1});const a=o.Z.locals||{}},379:(e,t,i)=>{var r,n=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),o=[];function a(e){for(var t=-1,i=0;i<o.length;i++)if(o[i].identifier===e){t=i;break}return t}function s(e,t){for(var i={},r=[],n=0;n<e.length;n++){var s=e[n],l=t.base?s[0]+t.base:s[0],d=i[l]||0,c="".concat(l," ").concat(d);i[l]=d+1;var f=a(c),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(o[f].references++,o[f].updater(u)):o.push({identifier:c,updater:y(u,t),references:1}),r.push(c)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=i.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=n(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,c=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,i,r){var n=i?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=c(t,n);else{var o=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function u(e,t,i){var r=i.css,n=i.media,o=i.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function y(e,t){var i,r,n;if(t.singleton){var o=h++;i=p||(p=l(t)),r=f.bind(null,i,o,!1),n=f.bind(null,i,o,!0)}else i=l(t),r=u.bind(null,i,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var i=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<i.length;r++){var n=a(i[r]);o[n].references--}for(var l=s(e,t),d=0;d<i.length;d++){var c=a(i[d]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}i=l}}}},21:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dayText=t.oppositeVisibility=void 0,t.oppositeVisibility=function(e){return"hidden"===e.style.visibility?"visible":"hidden"},t.dayText=function(e){return"day "+e.toString()}},607:(e,t,i)=>{i(604);var r=i(21),n=new Date("12/1/2020").getTime(),o=document.getElementById("left"),a=document.getElementById("right"),s=document.getElementById("day");if(!o||!a||!s)throw Error("Garden failed to grow");var l=(new Date).getTime(),d=Math.ceil((l-n)/864e5),c=d>1?d:1,f=c;s.innerText=r.dayText(f),o.style.visibility=1===f?"hidden":"visible",a.style.visibility=f===c?"hidden":"visible",o.addEventListener("click",(function(){1!==f&&(f-=1,"hidden"===a.style.visibility&&(a.style.visibility=r.oppositeVisibility(a)),1===f&&(o.style.visibility=r.oppositeVisibility(o)),s.innerText=r.dayText(f))})),a.addEventListener("click",(function(){f!==c&&(f+=1,"hidden"===o.style.visibility&&(o.style.visibility=r.oppositeVisibility(o)),f===c&&(a.style.visibility=r.oppositeVisibility(a)),s.innerText=r.dayText(f))}))},740:(e,t,i)=>{e.exports=i.p+"bff4a2a70ddd1da45295.ttf"},119:(e,t,i)=>{e.exports=i.p+"fd9ee3410a5673725a99.ttf"}},t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={id:r,exports:{}};return e[r](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),i(607)})();