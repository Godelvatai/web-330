"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Dustin Craven
      Date:   3/24/24

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
//timer constructor function
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

//timer runPause method that pauses/plays the timer
timer.prototype.runPause = function(timer, minBox, secBox) {
  if(timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    timer.timeID = window.setInterval(function(){countdown(timer)}, 1000);
  }
}

//countdown function for the timer interval
function countdown(timer) {
  //Reduce seconds by 1 until 0, then minutes by 1 while resetting seconds to 59 until 0:0
  if(timer.seconds > 0) {
    timer.seconds -= 1;
  } else if(timer.minutes > 0) {
    timer.minutes -= 1;
    timer.seconds = 59;
  } else {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  }

  //set the value of HTML boxes to current timer value
  minBox.value = timer.minutes;
  secBox.value = timer.seconds;
}



/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

let myTimer = new timer(minBox.value, secBox.value);
minBox.addEventListener("change", function(){myTimer.minutes = minBox.value});
secBox.addEventListener("change", function(){myTimer.seconds = secBox.value});

runPauseTimer.addEventListener("click", function() {myTimer.runPause(myTimer, minBox, secBox)});