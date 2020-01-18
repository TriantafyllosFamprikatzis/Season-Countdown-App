//Global variables
let submitBtn = document.getElementsByClassName('submit-btn')[0];
let userInput = document.getElementsByClassName('user-input')[0]; 
let userForm = document.getElementById('user-form');
let resetForm = document.getElementById('reset-form');


//Functions
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}
let deadline = 'March 09 2020 23:59:59';
initializeClock('clockdiv', deadline);


function calculateRemainingDays() {
  today = new Date();
  seasonEndDay = new Date(deadline);
  msPerDay = 24 * 60 * 60 * 1000 ;
  timeLeft = (seasonEndDay.getTime() - today.getTime());
  daysLeftRaw = timeLeft / msPerDay;
  daysLeft = Math.floor(daysLeftRaw);
  hrsLeftRaw = (daysLeftRaw - daysLeft)*24;
  hrsLeft = Math.floor(hrsLeftRaw);
  minsLeft = Math.floor((hrsLeftRaw - hrsLeft)*60);
}; calculateRemainingDays();


function preventLettersOnInput() {
  // To allow only numbers
  userInput.addEventListener('keydown', function(e) {
    if ( e.shiftKey || e.ctrlKey || e.altKey ) {
      e.preventDefault();
    } else {
    let key = e.keyCode;
      if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105))) {
        e.preventDefault();
      }
    }
  });
}; preventLettersOnInput();


function calculateLevelPerDay() {
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const maxLevel = 100;
    let infoContainer = document.getElementsByClassName('info-container')[0];
    let currentLevel = userInput.value;
    let daysWithHours = Math.floor((hrsLeft / 24) * 100) / 100 + daysLeft;
    let levelPerDay = Math.round(((maxLevel - currentLevel) / daysWithHours) * 100) / 100;
    //create a variablw with max level
    let result = "<p> You need  to level up by <b>" + levelPerDay + " experience</b> per day  to reach <b>100lvl</b> before season ends</p>";
    infoContainer.innerHTML = result;
    userForm.classList.add('hide');
    resetForm.classList.remove('hide');
    resetForm.classList.add('show');
  });
};


function showLevel() {
  $('.user-input').on('change', function() {
    let val = parseInt(this.value);
    if ( val >= 1 && val <= 99 ) {
      calculateLevelPerDay();
    } else if ( val == 100 ) {
      alert('Max level reached');
    } else {
      alert('Please ennter a number between 1 and 99');
    }
  });
}; showLevel();


function resetBtn() {
  let resetBtn = document.getElementsByClassName('reset-btn')[0];
  resetBtn.addEventListener('click', function() {
    userForm.classList.remove('hide');
    userForm.classList.add('show');
    resetForm.classList.remove('show');
    resetForm.classList.add('hide');
  });
}; resetBtn()
