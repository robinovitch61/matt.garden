(()=>{"use strict";var e={578:(e,t,i)=>{i.d(t,{Z:()=>u});var n=i(645),r=i.n(n),o=i(667),a=i.n(o),s=i(740),d=i(119),l=r()((function(e){return e[1]})),c=a()(s),f=a()(d);l.push([e.id,'@font-face{font-family:"Rye";src:url('+c+') format("truetype")}@font-face{font-family:"Sanchez";src:url('+f+') format("truetype")}body{margin:0;box-sizing:border-box}@media screen and (max-width: 600px){body{font-size:12px;-webkit-tap-highlight-color:transparent}}#grid{display:grid;margin:0;padding:0;grid-template-rows:1fr 4fr 1fr 2fr;justify-items:center;align-items:center}header{grid-row:1;justify-self:start;padding-left:2em}@media screen and (max-width: 600px){header{padding-top:.5em;padding-bottom:.5em}}h1{margin:0;padding:0;font-family:Rye;font-weight:100}h1#day{font-family:Sanchez;font-style:normal;font-weight:normal}#plant{grid-row:2;background-color:#c5ffe3;width:40%;height:100%;border-radius:30px}@media screen and (max-width: 600px){#plant{width:90%}}#controls{grid-row:3;display:grid;grid-template-columns:1fr 1fr 1fr;justify-items:center;align-items:center}#controls span#left,#controls span#right{width:0;height:0;display:block;border:1em solid transparent;opacity:.5}@media(hover: none){#controls span#left,#controls span#right{opacity:1}}#controls span#left:hover,#controls span#right:hover{opacity:1}#controls span#right{margin-left:1em;padding-left:1em;border-left:1.6em solid #000;border-right:0 solid transparent}#controls span#left{margin-right:1em;padding-right:1em;border-right:1.6em solid #000;border-left:0 solid transparent}#fact{font-family:Sanchez;font-size:1.5em;align-self:start;width:50%;grid-row:4}@media screen and (max-width: 600px){#fact{width:90%;font-size:.9rem}}#fact p{margin:0;padding:0}',""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);n&&r[d[0]]||(i&&(d[2]?d[2]="".concat(i," and ").concat(d[2]):d[2]=i),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},604:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var n=i(379),r=i.n(n),o=i(578);r()(o.Z,{insert:"head",singleton:!1});const a=o.Z.locals||{}},379:(e,t,i)=>{var n,r=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),o=[];function a(e){for(var t=-1,i=0;i<o.length;i++)if(o[i].identifier===e){t=i;break}return t}function s(e,t){for(var i={},n=[],r=0;r<e.length;r++){var s=e[r],d=t.base?s[0]+t.base:s[0],l=i[d]||0,c="".concat(d," ").concat(l);i[d]=l+1;var f=a(c),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(o[f].references++,o[f].updater(u)):o.push({identifier:c,updater:m(u,t),references:1}),n.push(c)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=i.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,c=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,i,n){var r=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=c(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function u(e,t,i){var n=i.css,r=i.media,o=i.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,h=0;function m(e,t){var i,n,r;if(t.singleton){var o=h++;i=p||(p=d(t)),n=f.bind(null,i,o,!1),r=f.bind(null,i,o,!0)}else i=d(t),n=u.bind(null,i,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var i=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var r=a(i[n]);o[r].references--}for(var d=s(e,t),l=0;l<i.length;l++){var c=a(i[l]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}i=d}}}},21:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dayText=t.oppositeVisibility=void 0,t.oppositeVisibility=function(e){return"hidden"===e.style.visibility?"visible":"hidden"},t.dayText=function(e){return"day "+e.toString()}},607:(e,t,i)=>{i(604);var n=i(21),r=new Date("12/1/2020").getTime(),o=document.getElementById("left"),a=document.getElementById("right"),s=document.getElementById("day"),d=document.getElementById("grid");if(!(o&&a&&s&&d))throw Error("Garden failed to grow");d.style.height=window.innerHeight+"px",d.addEventListener("click",(function(){return{}}));var l=(new Date).getTime(),c=Math.ceil((l-r)/864e5),f=c>1?c:1,u=f;s.innerText=n.dayText(u),o.style.visibility=1===u?"hidden":"visible",a.style.visibility=u===f?"hidden":"visible",o.addEventListener("click",(function(){1!==u&&(u-=1,"hidden"===a.style.visibility&&(a.style.visibility=n.oppositeVisibility(a)),1===u&&(o.style.visibility=n.oppositeVisibility(o)),s.innerText=n.dayText(u))})),a.addEventListener("click",(function(){u!==f&&(u+=1,"hidden"===o.style.visibility&&(o.style.visibility=n.oppositeVisibility(o)),u===f&&(a.style.visibility=n.oppositeVisibility(a)),s.innerText=n.dayText(u))}))},740:(e,t,i)=>{e.exports=i.p+"bff4a2a70ddd1da45295.ttf"},119:(e,t,i)=>{e.exports=i.p+"fd9ee3410a5673725a99.ttf"}},t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),i(607)})();