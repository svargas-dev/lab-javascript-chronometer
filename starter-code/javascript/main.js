const chronometer = new Chronometer();
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const minDec = document.getElementById('min-dec');
const minUni = document.getElementById('min-uni');
const secDec = document.getElementById('sec-dec');
const secUni = document.getElementById('sec-uni');
const milDec = document.getElementById('mil-dec');
const milUni = document.getElementById('mil-uni');
const split = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  setInterval(() => {
    minDec.innerText = chronometer
      .twoDigitsNumber(chronometer.getMinutes())
      .charAt(0);
    minUni.innerText = chronometer
      .twoDigitsNumber(chronometer.getMinutes())
      .charAt(1);
  }, 60000);
}

function printSeconds() {
  setInterval(() => {
    secDec.innerText = chronometer
      .twoDigitsNumber(chronometer.getSeconds())
      .charAt(0);
    secUni.innerText = chronometer
      .twoDigitsNumber(chronometer.getSeconds())
      .charAt(1);
  }, 1000);
}

function printMilliseconds() {}

function printSplit() {
  split.innerHTML += `<li>${chronometer.splitClick()}</li>`;
}

function clearSplits() {
  split.innerHTML = '';
}

function setStopBtn() {
  btnLeft.className = 'btn start';
  btnLeft.innerText = 'START';
  btnRight.className = 'btn reset';
  btnRight.innerText = 'RESET';
  chronometer.stopClick();
}

function setSplitBtn() {
  btnRight.className = 'btn split';
  btnRight.innerText = 'SPLIT';
  printSplit();
}

function setStartBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerText = 'STOP';
  btnRight.className = 'btn split';
  btnRight.innerHTML = 'SPLIT';
  chronometer.startClick();
  printTime();
}

function setResetBtn() {
  btnRight.className = 'btn split';
  btnRight.innerText = 'SPLIT';
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  //My solution
  switch (btnLeft.className) {
    case 'btn start':
      setStartBtn();
      break;
    case 'btn stop':
      setStopBtn();
      break;
  }

  // Ze's solution -- not checking the instance of the chronometer NOT the html
  // const isRunning = typeof chronometer.intervalId !== 'undefined';
  // if (isRunning) {
  //   btnLeft.innerText = 'START';
  //   btnLeft.className = 'btn start';
  //   btnRight.innerText = 'RESET';
  //   btnRight.className = 'btn reset';
  //   chronometer.stopClick();
  // } else {
  //   btnLeft.innerText = 'STOP';
  //   btnLeft.className = 'btn stop';
  //   btnRight.innerText = 'SPLIT';
  //   btnRight.className = 'btn split';
  //   chronometer.startClick();
  // }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  //My solution
  if (btnLeft.className === 'btn stop') {
    setSplitBtn();
  } else {
    setResetBtn();
    if (split.innerHTML != '') {
      clearSplits();
    }
  }

  // Ze's solution - same as above
  // const isRunning = typeof chronometer.intervalId !== 'undefined';
  // if (isRunning) {
  //   printSplit(chronometer);
  // } else {
  //   chronometer.resetClick();
  // }
});
