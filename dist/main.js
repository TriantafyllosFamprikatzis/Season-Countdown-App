!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){let n=document.querySelectorAll(".user-input"),r=document.getElementById("userCurrentLevel"),a=document.getElementById("levelToReach"),l=document.getElementById("user-form"),s=document.getElementById("reset-form"),o=document.getElementsByClassName("info-container")[0],d=!1,u=!1,c=!1,i=!1;function f(){let e=a.value,t=r.value,n=Math.floor(hrsLeft/24*100)/100+daysLeft,d="<p> You need  to level up by <b>"+Math.round((e-t)/n*100)/100+" lvl experience</b> per day to reach <b>"+e+"lvl</b> before season ends</p>";o.innerHTML=d,l.classList.add("hide"),s.classList.remove("hide"),s.classList.add("show")}function v(e){r.addEventListener("keyup",(function(){let t=parseInt(this.value);t>=1&&t<=99?(c=!0,1==d&&1==i&&1==c&&t<e?(f(),s.classList.remove("d-none"),s.classList.add("d-block"),l.classList.remove("d-block"),l.classList.add("d-none")):1==d&&t>=1&&t<=99&&t>e?(event.preventDefault(),alert("Enter a level higher than your current level"),c=!1,d=!1,u=!1):1==d&&t>=1&&t<=99&&t==e&&(event.preventDefault(),alert("Level reached"),c=!1,d=!1,u=!1)):1==d&&100==t?(event.preventDefault(),alert("Max level reached"),c=!1,d=!1,u=!1):(1==d&&0==t||t>=100)&&(event.preventDefault(),alert("Please enter a number between 1 and 99"),c=!1,d=!1,u=!1),m(t)}))}function m(e){a.addEventListener("keyup",(function(){let t=parseInt(this.value);t>=1&&t<=100?(i=!0,1==d&&1==i&&1==c&&e<t?(f(),s.classList.remove("d-none"),s.classList.add("d-block"),l.classList.remove("d-block"),l.classList.add("d-none")):1==d&&t>=1&&t<=100&&e>t?(event.preventDefault(),alert("Enter a level higher than your current level"),i=!1,d=!1,u=!1):1==d&&t>=1&&t<=100&&e==t&&(event.preventDefault(),alert("Level reached"),i=!1,d=!1,u=!1)):(1==d&&0==t||t>=101)&&(event.preventDefault(),alert("Please enter a number between 1 and 100"),i=!1,d=!1,u=!1),v(t)}))}!function(e,t){let n=document.getElementById(e),r=n.querySelector(".days"),a=n.querySelector(".hours"),l=n.querySelector(".minutes"),s=n.querySelector(".seconds");function o(){let e=function(e){let t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),r=Math.floor(t/1e3/60%60),a=Math.floor(t/36e5%24);return{total:t,days:Math.floor(t/864e5),hours:a,minutes:r,seconds:n}}(t);r.innerHTML=e.days,a.innerHTML=("0"+e.hours).slice(-2),l.innerHTML=("0"+e.minutes).slice(-2),s.innerHTML=("0"+e.seconds).slice(-2),e.total<=0&&clearInterval(d)}o();let d=setInterval(o,1e3)}("clockdiv","March 09 2020 23:59:59"),today=new Date,seasonEndDay=new Date("March 09 2020 23:59:59"),msPerDay=864e5,timeLeft=seasonEndDay.getTime()-today.getTime(),daysLeftRaw=timeLeft/msPerDay,daysLeft=Math.floor(daysLeftRaw),hrsLeftRaw=24*(daysLeftRaw-daysLeft),hrsLeft=Math.floor(hrsLeftRaw),minsLeft=Math.floor(60*(hrsLeftRaw-hrsLeft)),n.forEach(e=>{e.addEventListener("keydown",(function(e){let t=e.keyCode;e.shiftKey||e.ctrlKey||e.altKey?e.preventDefault():13==t?d=!0:8==t||9==t||46==t||t>=35&&t<=40||t>=48&&t<=57||t>=96&&t<=105||e.preventDefault()}))}),document.getElementsByClassName("reset-btn")[0].addEventListener("click",(function(){l.classList.remove("d-none"),l.classList.add("d-block"),s.classList.remove("d-block"),s.classList.add("d-none"),o.removeChild(o.childNodes[0]),a.value="",r.value="",d=!1,u=!1,c=!1,i=!1})),document.getElementsByClassName("submit-btn")[0].addEventListener("click",(function(){u=!0;let e=r.value,t=a.value;e>=1&&t>=1&&e<=99&&t<=100?1==u&&1==i&&1==c&&e<t?(f(),s.classList.remove("d-none"),s.classList.add("d-block"),l.classList.remove("d-block"),l.classList.add("d-none")):1==u&&e>=1&&e<=99&&t>=1&&t<=100&&e>t?(event.preventDefault(),alert("Enter a level higher than your current level"),c=!1,i=!1,d=!1,u=!1):1==u&&e>=1&&e<=99&&t>=1&&t<=100&&e==t&&(event.preventDefault(),alert("Level reached"),c=!1,i=!1,d=!1,u=!1):1==u&&100==e?(event.preventDefault(),alert("Max level reached"),c=!1,d=!1,u=!1):1==u&&0==e||e>=100?(event.preventDefault(),alert("Please enter a number between 1 and 99"),c=!1,d=!1,u=!1):(1==u&&0==t||t>=101)&&(event.preventDefault(),alert("Please enter a number between 1 and 100"),i=!1,d=!1,u=!1)})),v(),m()}]);