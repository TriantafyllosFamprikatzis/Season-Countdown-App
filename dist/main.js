!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(1);let o=document.querySelectorAll(".user-input"),r=document.getElementById("userCurrentLevel"),i=document.getElementById("levelToReach"),a=document.getElementById("user-form"),s=document.getElementById("reset-form"),c=document.getElementsByClassName("info-container")[0];function l(){let n=parseInt(r.value,10),e=parseInt(i.value,10);n>=1&&e>=1&&n<=99&&e<=100?n<e?(!function(){let n=new Date,e=(new Date("March 09 2020 23:59:59").getTime()-n.getTime())/864e5,t=Math.floor(e),o=24*(e-t),l=Math.floor(o),d=i.value,f=r.value,u=Math.floor(l/24*100)/100+t,p="<p> You need  to level up by <b>"+Math.round((d-f)/u*100)/100+" lvl experience</b> per day to reach <b>"+d+"lvl</b> before season ends</p>";c.innerHTML=p,a.classList.add("hide"),s.classList.remove("hide"),s.classList.add("show")}(),s.classList.remove("d-none"),s.classList.add("d-block"),a.classList.remove("d-block"),a.classList.add("d-none")):n>=1&&n<=99&&e>=1&&e<=100&&n>e?(event.preventDefault(),alert("Enter a level higher than your current level")):n>=1&&n<=99&&e>=1&&e<=100&&n==e?(event.preventDefault(),alert("Level reached")):n>=1&&n<=99&&e>=1&&e<=100&&n<e&&(event.preventDefault(),alert("Current level cannot be higher from level to reach")):100==n?(event.preventDefault(),alert("Max level reached")):0==n||n>=100?(event.preventDefault(),alert("Please enter a number between 1 and 99")):(0==e||e>=101)&&(event.preventDefault(),alert("Please enter a number between 1 and 100"))}!function(n,e){let t=document.getElementById(n),o=t.querySelector(".days"),r=t.querySelector(".hours"),i=t.querySelector(".minutes"),a=t.querySelector(".seconds");function s(){let n=function(n){let e=Date.parse(n)-Date.parse(new Date),t=Math.floor(e/1e3%60),o=Math.floor(e/1e3/60%60),r=Math.floor(e/36e5%24);return{total:e,days:Math.floor(e/864e5),hours:r,minutes:o,seconds:t}}(e);o.innerHTML=n.days,r.innerHTML=("0"+n.hours).slice(-2),i.innerHTML=("0"+n.minutes).slice(-2),a.innerHTML=("0"+n.seconds).slice(-2),n.total<=0&&clearInterval(c)}s();let c=setInterval(s,1e3)}("clockdiv","March 09 2020 23:59:59"),o.forEach(n=>{n.addEventListener("keydown",(function(n){let e=n.keyCode;n.shiftKey||n.ctrlKey||n.altKey?n.preventDefault():13==e?l():8==e||9==e||46==e||e>=35&&e<=40||e>=48&&e<=57||e>=96&&e<=105||n.preventDefault()}))}),document.getElementsByClassName("submit-btn")[0].addEventListener("click",(function(){l()})),document.getElementsByClassName("reset-btn")[0].addEventListener("click",(function(){a.classList.remove("d-none"),a.classList.add("d-block"),s.classList.remove("d-block"),s.classList.add("d-none"),c.removeChild(c.childNodes[0]),i.value="",r.value=""}))},function(n,e,t){var o=t(2);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0};t(4)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){(e=n.exports=t(3)(void 0)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Ubuntu);",""]),e.push([n.i,'/*------------------------------------*\\\n  #MIXINS\n\\*------------------------------------*/\n/*------------------------------------*\\\n  #VARIABLES\n\\*------------------------------------*/\n/*------------------------------------*\\\n  #NORMALIZE\n\\*------------------------------------*/\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\n/*------------------------------------*\\\n  #BASE\n\\*------------------------------------*/\n* {\n  box-sizing: border-box; }\n\n:hover,\n:active,\n:focus,\n:visited {\n  outline: none !important;\n  outline: 0px !important;\n  box-shadow: none;\n  -webkit-appearance: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  min-height: 100vh;\n  font-family: "Roboto", sans-serif;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #28293b; }\n\nh1, h2, h3 {\n  font-family: "Spartan", sans-serif; }\n\nh1 {\n  font-weight: 100;\n  font-size: 35px;\n  margin: 10px 0px 10px; }\n\nh2 {\n  font-size: 2.2rem; }\n\nh3,\nli,\nbutton,\ninput,\nselect,\ntextarea,\np,\na {\n  font-size: 1.5rem; }\n\nheader .title-content {\n  color: #fff;\n  background-color: #12171c; }\n\nfooter {\n  padding: 5px 0;\n  color: #fff;\n  background-color: #12171c; }\n  footer p {\n    margin-top: 8px;\n    font-size: 1rem; }\n  footer .github {\n    background-position: center;\n    background-repeat: no-repeat;\n    display: inline-block;\n    text-indent: -9999px;\n    margin-left: 5px;\n    width: 30px;\n    height: 30px;\n    background-size: 30px 55px;\n    opacity: 0.5;\n    transition: all 0.4s; }\n    footer .github:hover {\n      opacity: 1; }\n\n/*------------------------------------*\\\n  #ANIMATIONS\n\\*------------------------------------*/\n/*------------------------------------*\\\n  #BUTTONS\n\\*------------------------------------*/\n.btn-primary {\n  border: 3px solid #000;\n  border-radius: 15px;\n  padding: 11px 30px 11px 55px;\n  background-color: #000;\n  position: relative;\n  font-size: 1.2rem;\n  font-weight: 700;\n  transition: all .25s ease-in-out; }\n  .btn-primary:before {\n    content: "";\n    background-repeat: no-repeat;\n    background-position: left center;\n    background-size: 27px;\n    position: absolute;\n    top: 7px;\n    left: 23px;\n    width: 27px;\n    height: 27px; }\n  .btn-primary:hover {\n    background-color: #000;\n    border: 3px solid #fff;\n    transition: all .25s ease-in-out; }\n  .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-primary.dropdown-toggle {\n    background-color: #000;\n    border-color: #fff; }\n\n.btn-primary.focus, .btn-primary:focus {\n  box-shadow: unset; }\n\n.btn-primary:not(:disabled):not(.disabled).active:focus,\n.btn-primary:not(:disabled):not(.disabled):active:focus,\n.show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: unset; }\n\n.clock-container {\n  margin: 15px 0 30px 0;\n  background-color: #080808;\n  border-radius: 5px;\n  padding: 25px 20px; }\n  .clock-container .clock__col {\n    text-align: center;\n    margin-right: 5px;\n    margin-left: 5px;\n    min-width: 66px;\n    position: relative; }\n    .clock-container .clock__col:not(:last-child):before {\n      top: 26%; }\n    .clock-container .clock__col:not(:last-child):after {\n      top: 40%; }\n    .clock-container .clock__col:not(:last-child):before, .clock-container .clock__col:not(:last-child):after {\n      content: "";\n      background-color: rgba(255, 255, 255, 0.3);\n      height: 5px;\n      width: 5px;\n      border-radius: 50%;\n      display: block;\n      position: absolute;\n      right: -9px; }\n    .clock-container .clock__col--timer {\n      color: #fff;\n      font-size: 3.2rem; }\n    .clock-container .clock__col--text {\n      color: rgba(255, 255, 255, 0.35);\n      font-size: 1.2rem;\n      margin-top: 10px; }\n\n/*------------------------------------*\\\n  #FORMS\n\\*------------------------------------*/\n.form-content .form-container .form-wrapper {\n  position: relative; }\n  .form-content .form-container .form-wrapper .user-input {\n    width: 90px;\n    padding: 11px 8px; }\n  .form-content .form-container .form-wrapper .posted-info-content.show {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n\n/*------------------------------------*\\\n  #MAIN\n\\*------------------------------------*/\n.main-container {\n  background: rgba(255, 255, 255, 0.6);\n  margin-top: 200px; }\n\n/*------------------------------------*\\\n  #NAVIGATION\n\\*------------------------------------*/\n/*------------------------------------*\\\n  #NOTIFICATIONS\n\\*------------------------------------*/\n/*------------------------------------*\\\n  #WIDGETS\n\\*------------------------------------*/\n@media (min-width: 1200px) {\n  .clock-container .clock__col {\n    margin-right: 28px;\n    margin-left: 28px;\n    min-width: 90px; }\n    .clock-container .clock__col--timer {\n      font-size: 4.2rem; }\n    .clock-container .clock__col:not(:last-child):before {\n      top: 35%; }\n    .clock-container .clock__col:not(:last-child):after {\n      top: 50%; }\n    .clock-container .clock__col:not(:last-child):before, .clock-container .clock__col:not(:last-child):after {\n      content: "";\n      right: -42px; } }\n',""])},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map((function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"}));return[t].concat(i).concat([r]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(n){var e={};return function(t){if(void 0===e[t]){var o=n.call(this,t);if(o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[t]=o}return e[t]}}((function(n){return document.querySelector(n)})),c=null,l=0,d=[],f=t(5);function u(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(v(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:s}}}}function p(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function h(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),d.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,r)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=d.indexOf(n);e>=0&&d.splice(e,1)}function m(n){var e=document.createElement("style");return n.attrs.type="text/css",g(e,n.attrs),h(n,e),e}function g(n,e){Object.keys(e).forEach((function(t){n.setAttribute(t,e[t])}))}function v(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var a=l++;t=c||(c=m(e)),o=w.bind(null,t,a,!1),r=w.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",g(e,n.attrs),h(n,e),e}(e),o=E.bind(null,t,e),r=function(){b(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(e),o=k.bind(null,t),r=function(){b(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return u(t,e),function(n){for(var o=[],r=0;r<t.length;r++){var a=t[r];(s=i[a.id]).refs--,o.push(s)}n&&u(p(n,e),e);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,x=(y=[],function(n,e){return y[n]=e,y.filter(Boolean).join("\n")});function w(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function k(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function E(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=f(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(n,e){var r,i=e.trim().replace(/^"(.*)"$/,(function(n,e){return e})).replace(/^'(.*)'$/,(function(n,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}}]);