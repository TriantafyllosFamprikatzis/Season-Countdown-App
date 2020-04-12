
import './styles/styles.scss';

// //Global variables
let userInput = document.querySelectorAll('.user-input'); 
let userCurrentLevel = document.getElementById('userCurrentLevel');
let levelToReach = document.getElementById('levelToReach');
let userForm = document.getElementById('user-form');
let resetForm = document.getElementById('reset-form');
let infoContainer = document.getElementsByClassName('info-container')[0];


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
let deadline = 'March 09 2021 23:59:59';
initializeClock('clockdiv', deadline);


function calculateLevelPerDay() {
  let today = new Date();
  let seasonEndDay = new Date(deadline);
  let msPerDay = 24 * 60 * 60 * 1000 ;
  let timeLeft = (seasonEndDay.getTime() - today.getTime());
  let daysLeftRaw = timeLeft / msPerDay;
  let daysLeft = Math.floor(daysLeftRaw);
  let hrsLeftRaw = (daysLeftRaw - daysLeft)*24;
  let hrsLeft = Math.floor(hrsLeftRaw);
  // let minsLeft = Math.floor((hrsLeftRaw - hrsLeft)*60); // Not used for now
  let maxLevel = levelToReach.value;
  let currentLevel = userCurrentLevel.value;
  let daysWithHours = Math.floor((hrsLeft / 24) * 100) / 100 + daysLeft;
  let levelPerDay = Math.round(((maxLevel - currentLevel) / daysWithHours) * 100) / 100;
  let result = "<p> You need  to level up by <b>" + levelPerDay + " lvl experience</b> per day to reach <b>" + maxLevel + "lvl</b> before season ends</p>";
  infoContainer.innerHTML = result;
  userForm.classList.add('hide');
  resetForm.classList.remove('hide');
  resetForm.classList.add('show');
};


function preventLettersOnInput() {
  userInput.forEach( item => {
    item.addEventListener('keydown', function(e) {
      let key = e.keyCode;
      if ( e.shiftKey || e.ctrlKey || e.altKey ) {
        e.preventDefault();
      } else if (key == 13) {
        inputValueInit();
      } else {
        if (!((key == 8) || (key ==9) || (key == 46) || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105))) {
          e.preventDefault();
        }
      }
    });
  });
}; preventLettersOnInput();


function inputValueInit() {  
  let firstInputValue = parseInt(userCurrentLevel.value, 10);
  let secondInputValue = parseInt(levelToReach.value, 10);
  if ( firstInputValue >= 1 && secondInputValue >= 1 && firstInputValue <= 99 && secondInputValue <= 100 ) {
    if ( firstInputValue < secondInputValue ) {
      calculateLevelPerDay();
      resetForm.classList.remove('d-none');
      resetForm.classList.add('d-block');
      userForm.classList.remove('d-block');
      userForm.classList.add('d-none');
    } else if ( firstInputValue >= 1 && firstInputValue <= 99 && secondInputValue >= 1 && secondInputValue <= 100 && firstInputValue > secondInputValue ) {
      event.preventDefault();
      alert('Enter a level higher than your current level');
    } else if ( firstInputValue >= 1 && firstInputValue <= 99 && secondInputValue >= 1 && secondInputValue <= 100 && firstInputValue == secondInputValue ) {
      event.preventDefault();
      alert('Level reached');
    } else if ( firstInputValue >= 1 && firstInputValue <= 99 && secondInputValue >= 1 && secondInputValue <= 100 && firstInputValue < secondInputValue ) {
      event.preventDefault();
      alert('Current level cannot be higher from level to reach');
    }
  } else if ( firstInputValue == 100 ) {
    event.preventDefault();
    alert('Max level reached');
  } else if ( firstInputValue == 0 || firstInputValue >= 100 ) {
    event.preventDefault();
    alert('Please enter a number between 1 and 99');
  } else if ( secondInputValue == 0 || secondInputValue >= 101 ) {
    event.preventDefault();
    alert('Please enter a number between 1 and 100');
  }
};


function submitBtnInit() {
  let submitBtn = document.getElementsByClassName('submit-btn')[0];
  submitBtn.addEventListener('click', function() {
    inputValueInit();
  });
}; submitBtnInit();


function resetBtnInit() {
  let resetBtn = document.getElementsByClassName('reset-btn')[0];
  resetBtn.addEventListener('click', function() {  
    userForm.classList.remove('d-none');
    userForm.classList.add('d-block');
    resetForm.classList.remove('d-block');
    resetForm.classList.add('d-none');
    infoContainer.removeChild(infoContainer.childNodes[0]); 
    levelToReach.value = "";
    userCurrentLevel.value = "";
  });
}; resetBtnInit();
