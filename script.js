let hr = 0;
let min = 0;
let sec = 0;
let milisec = 0;
let displayHr = 0;
let displayMin = 0;
let displaySec = 0;
let displayMilisec = 0;
let lapnow = null;
let interval;

let isRunning = false;

const startStop = () => {
  if (!isRunning) {
    interval = window.setInterval(start, 10);
    isRunning = true;
    document.getElementById("start").innerHTML = "Stop";
  } else {
    window.clearInterval(interval);
    isRunning = false;
    document.getElementById("start").innerHTML = "Start";
  }
};

const start = () => {
  milisec++;
  if (milisec / 100 == 1) {
    milisec = 0;
    sec++;
    if (sec / 60 == 1) {
      sec = 0;
      min++;
    }
    if (min / 60 == 1) {
      min = 0;
      hr++;
    }
  }

  if (milisec < 10) {
    displayMilisec = "0" + milisec;
  } else {
    displayMilisec = milisec;
  }
  if (sec < 10) {
    displaySec = "0" + sec;
  } else {
    displaySec = sec;
  }
  if (min < 10) {
    displayMin = "0" + min;
  } else {
    displayMin = min;
  }
  if (hr < 10) {
    displayHr = "0" + hr;
  } else {
    displayHr = hr;
  }

  document.getElementById("hr").innerHTML = displayHr;
  document.getElementById("min").innerHTML = displayMin;
  document.getElementById("sec").innerHTML = displaySec;
  document.getElementById("milisec").innerHTML = displayMilisec;
};

const reset = () => {
  window.clearInterval(interval);
  isRunning = false;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("milisec").innerHTML = "00";
  // Clear lap records
  document.getElementById("lap-list").innerHTML = "";
};

const lap = () => {
  lapnow =
    displayHr + ":" + displayMin + ":" + displaySec + ":" + displayMilisec;
  const lapElement = document.createElement("p");
  lapElement.textContent = lapnow;
  document.getElementById("lap-list").appendChild(lapElement);
};
