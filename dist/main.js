!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){let n=document.getElementsByClassName("submit-btn")[0],r=document.querySelectorAll(".user-input"),o=document.getElementById("userCurrentLevel"),a=document.getElementById("levelToReach"),s=document.getElementById("user-form"),l=document.getElementById("reset-form");!function(e,t){let n=document.getElementById(e),r=n.querySelector(".days"),o=n.querySelector(".hours"),a=n.querySelector(".minutes"),s=n.querySelector(".seconds");function l(){let e=function(e){let t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),r=Math.floor(t/1e3/60%60),o=Math.floor(t/36e5%24);return{total:t,days:Math.floor(t/864e5),hours:o,minutes:r,seconds:n}}(t);r.innerHTML=e.days,o.innerHTML=("0"+e.hours).slice(-2),a.innerHTML=("0"+e.minutes).slice(-2),s.innerHTML=("0"+e.seconds).slice(-2),e.total<=0&&clearInterval(u)}l();let u=setInterval(l,1e3)}("clockdiv","March 09 2020 23:59:59"),today=new Date,seasonEndDay=new Date("March 09 2020 23:59:59"),msPerDay=864e5,timeLeft=seasonEndDay.getTime()-today.getTime(),daysLeftRaw=timeLeft/msPerDay,daysLeft=Math.floor(daysLeftRaw),hrsLeftRaw=24*(daysLeftRaw-daysLeft),hrsLeft=Math.floor(hrsLeftRaw),minsLeft=Math.floor(60*(hrsLeftRaw-hrsLeft)),r.forEach(e=>{e.addEventListener("keydown",(function(e){if(e.shiftKey||e.ctrlKey||e.altKey)e.preventDefault();else{let t=e.keyCode;8==t||46==t||t>=35&&t<=40||t>=48&&t<=57||t>=96&&t<=105||e.preventDefault()}}))}),r.forEach(e=>{e.addEventListener("change",(function(){let e=parseInt(this.value);e>=1&&e<=99?n.addEventListener("click",(function(e){e.preventDefault();const t=a.value;let n=document.getElementsByClassName("info-container")[0],r=o.value,u=Math.floor(hrsLeft/24*100)/100+daysLeft,c="<p> You need  to level up by <b>"+Math.round((t-r)/u*100)/100+" experience</b> per day to reach <b>"+t+"lvl</b> before season ends</p>";n.innerHTML=c,s.classList.add("hide"),l.classList.remove("hide"),l.classList.add("show")})):100==e?alert("Max level reached"):alert("Please ennter a number between 1 and 99")}))}),document.getElementsByClassName("reset-btn")[0].addEventListener("click",(function(){s.classList.remove("hide"),s.classList.add("show"),l.classList.remove("show"),l.classList.add("hide")}))}]);