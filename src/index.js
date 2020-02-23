//Global variables
let userInput = document.querySelectorAll('.user-input'); 
let userCurrentLevel = document.getElementById('userCurrentLevel');
let levelToReach = document.getElementById('levelToReach');
let userForm = document.getElementById('user-form');
let resetForm = document.getElementById('reset-form');
let infoContainer = document.getElementsByClassName('info-container')[0];
let enterKeyClicked = false;
let submitBtnClicked = false;
let firstInputCorrectValue = false;
let secondInputCorrectValue = false;


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


function calculateLevelPerDay() {
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
        enterKeyClicked = true;
      } else {
        if (!((key == 8) || (key ==9) || (key == 46) || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105))) {
          e.preventDefault();
        }
      }
    });
  });
}; preventLettersOnInput();


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
    enterKeyClicked = false;
    submitBtnClicked = false;
    firstInputCorrectValue = false;
    secondInputCorrectValue = false;
  });
}; resetBtnInit();


function submitBtnInit() {
  let submitBtn = document.getElementsByClassName('submit-btn')[0];
  submitBtn.addEventListener('click', function() {
    submitBtnClicked = true;
    let firstInputOnSubmit = userCurrentLevel.value;
    let secondInputOnSubmit = levelToReach.value;
    if ( firstInputOnSubmit >= 1 && secondInputOnSubmit >= 1 && firstInputOnSubmit <= 99 && secondInputOnSubmit <= 100 ) {
      if ( submitBtnClicked == true && secondInputCorrectValue == true && firstInputCorrectValue == true && firstInputOnSubmit < secondInputOnSubmit ) {
        calculateLevelPerDay();
        resetForm.classList.remove('d-none');
        resetForm.classList.add('d-block');
        userForm.classList.remove('d-block');
        userForm.classList.add('d-none');
      } else if ( submitBtnClicked == true && firstInputOnSubmit >= 1 && firstInputOnSubmit <= 99 && secondInputOnSubmit >= 1 && secondInputOnSubmit <= 100 && firstInputOnSubmit > secondInputOnSubmit ) {
        event.preventDefault();
        alert('Enter a level higher than your current level');
        firstInputCorrectValue = false;
        secondInputCorrectValue = false;
        enterKeyClicked = false;
        submitBtnClicked = false;
      } else if ( submitBtnClicked == true && firstInputOnSubmit >= 1 && firstInputOnSubmit <= 99 && secondInputOnSubmit >= 1 && secondInputOnSubmit <= 100 && firstInputOnSubmit == secondInputOnSubmit ) {
        event.preventDefault();
        alert('Level reached');
        firstInputCorrectValue = false;
        secondInputCorrectValue = false;
        enterKeyClicked = false;
        submitBtnClicked = false;
      }
    } else if ( submitBtnClicked == true && firstInputOnSubmit == 100 ) {
      event.preventDefault();
      alert('Max level reached');
      firstInputCorrectValue = false;
      enterKeyClicked = false;
      submitBtnClicked = false;
    } else if ( submitBtnClicked == true && firstInputOnSubmit == 0 || firstInputOnSubmit >= 100 ) {
      event.preventDefault();
      alert('Please enter a number between 1 and 99');
      firstInputCorrectValue = false;
      enterKeyClicked = false;
      submitBtnClicked = false;
    } else if ( submitBtnClicked == true && secondInputOnSubmit == 0 || secondInputOnSubmit >= 101 ) {
      event.preventDefault();
      alert('Please enter a number between 1 and 100');
      secondInputCorrectValue = false;
      enterKeyClicked = false;
      submitBtnClicked = false;
    }
  });
}; submitBtnInit();


function firstInput(secondInputVal) {
  userCurrentLevel.addEventListener('keyup', function() {
    let firstInputVal = parseInt(this.value);
    if ( firstInputVal >= 1 && firstInputVal <= 99 ) {
      firstInputCorrectValue = true;
      if ( enterKeyClicked == true && secondInputCorrectValue == true && firstInputCorrectValue == true && firstInputVal < secondInputVal ) {
        calculateLevelPerDay();
        resetForm.classList.remove('d-none');
        resetForm.classList.add('d-block');
        userForm.classList.remove('d-block');
        userForm.classList.add('d-none');
      } else if ( enterKeyClicked == true && firstInputVal >= 1 && firstInputVal <= 99 &&  firstInputVal > secondInputVal ) {
        event.preventDefault();
        alert('Enter a level higher than your current level');
        firstInputCorrectValue = false;
        enterKeyClicked = false;
        submitBtnClicked = false;
      } else if ( enterKeyClicked == true && firstInputVal >= 1 && firstInputVal <= 99 && firstInputVal == secondInputVal ) {
        event.preventDefault();
        alert('Level reached');
        firstInputCorrectValue = false;
        enterKeyClicked = false;
        submitBtnClicked = false;
      }
    } else if ( enterKeyClicked == true && firstInputVal == 100 ) {
      event.preventDefault();
      alert('Max level reached');
      firstInputCorrectValue = false;
      enterKeyClicked = false;
      submitBtnClicked = false;
    } else if ( enterKeyClicked == true && firstInputVal == 0 || firstInputVal >= 100 ) {
      event.preventDefault();
      alert('Please enter a number between 1 and 99');
      firstInputCorrectValue = false;
      enterKeyClicked = false;
      submitBtnClicked = false;
    }
    secondInput(firstInputVal); //This passes the input value to the second input function
  });
}; firstInput();


function secondInput(firstInputVal) {
  levelToReach.addEventListener('keyup', function() {
    let secondInputVal = parseInt(this.value);
    if ( secondInputVal >= 1 && secondInputVal <= 100 ) {
      secondInputCorrectValue = true;
      if ( enterKeyClicked == true && secondInputCorrectValue == true && firstInputCorrectValue == true && firstInputVal < secondInputVal ) {
        calculateLevelPerDay();
        resetForm.classList.remove('d-none');
        resetForm.classList.add('d-block');
        userForm.classList.remove('d-block');
        userForm.classList.add('d-none');
      } else if ( enterKeyClicked == true && secondInputVal >= 1 && secondInputVal <= 100 && firstInputVal > secondInputVal ) {
        event.preventDefault();
        alert('Enter a level higher than your current level');
        secondInputCorrectValue = false;
        enterKeyClicked = false;
        submitBtnClicked = false;
      } else if ( enterKeyClicked == true && secondInputVal >= 1 && secondInputVal <= 100 && firstInputVal == secondInputVal ) {
        event.preventDefault();
        alert('Level reached');
        secondInputCorrectValue = false;
        enterKeyClicked = false;
        submitBtnClicked = false;
      }
    } else if ( enterKeyClicked == true && secondInputVal == 0 || secondInputVal >= 101 ) {
      event.preventDefault();
      alert('Please enter a number between 1 and 100');
      secondInputCorrectValue = false;
      enterKeyClicked = false;
      submitBtnClicked = false;
    }
    firstInput(secondInputVal); //This passes the input value to the first input function
  });
}; secondInput();
