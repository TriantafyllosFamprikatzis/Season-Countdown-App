//Variables
let submitBtn = document.getElementsByClassName('submit-btn')[0];
let userInput = document.getElementsByClassName('user-input')[0]; 

function calculateRemainingDays() {
  // setInterval( function() { // Set interval for every 1sec
    today = new Date();
    seasonEndDay = new Date("March 09, 2020");
    msPerDay = 24 * 60 * 60 * 1000 ;
    timeLeft = (seasonEndDay.getTime() - today.getTime());
    daysLeftRaw = timeLeft / msPerDay;
    daysLeft = Math.floor(daysLeftRaw);
    hrsLeftRaw = (daysLeftRaw - daysLeft)*24;
    hrsLeft = Math.floor(hrsLeftRaw);
    minsLeft = Math.floor((hrsLeftRaw - hrsLeft)*60);

    document.write("<p><b>FELLOW GUARDIAN</b></p>");
    document.write("<p>There are only <b>" + daysLeft + " days " + hrsLeft +" hours and " + minsLeft + " minutes left </b> Until March 09 2020</p>");
  // }, 1000);
};

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
};

function calculateLevelPerDay() {
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const maxLevel = 100;
    let infoContainer = document.getElementsByClassName('info-container')[0];
    let currentLevel = userInput.value;
    let levelPerDayRaw = (maxLevel - currentLevel) / daysLeft;
    let levelPerDay = Math.round(levelPerDayRaw * 100) / 100;

    const result = "<p> You need  to get <b>" + levelPerDay + " Level experience</b> per day  to reach <b>100lvl</b> before season ends</p>";

    infoContainer.innerHTML = result; 
  });
    // this.value = ''; // Clears input // This has bug!!!!!
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
    // this.value = ''; // Clears input // This has bug!!!!!
  });
};


// Hit button to start again 
function buttonReset() {};








function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = 'March 09 2020 23:59:59';

initializeClock('clockdiv', deadline);









//Functions
calculateRemainingDays();
preventLettersOnInput();
showLevel();
buttonReset();
