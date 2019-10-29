const chronometer = new Chronometer();
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const minDec = document.getElementById('min-dec');
const minUni = document.getElementById('min-uni');
const secDec = document.getElementById('sec-dec');
const secUni = document.getElementById('sec-uni');
const milDec = document.getElementById('mil-dec');
const milUni = document.getElementById('mil-uni');

// function testFunct () {
//   chronometer.getMinutes();
//   chronometer.getSeconds();
// }

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  setInterval(() => {
    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0);
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1);
    // console.log(`Minutes: ${chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0) + chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1)}`) 
  }, 60000);
}

function printSeconds() {
  setInterval(() => {
    secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(0);
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1);
    // console.log(`Seconds: ${chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(0) + chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1)}`);
  }, 1000);
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {

}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  switch (btnLeft.className) {
    case 'btn start':
      btnLeft.className = 'btn stop';
      btnLeft.innerText = 'STOP';
      chronometer.startClick();
      printTime();
      break;
    case 'btn stop':
      btnLeft.className = 'btn start';
      btnLeft.innerText = 'START';
      chronometer.stopClick();
      break;
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  switch (btnRight.className) {
    case 'btn reset':
      btnRight.className = 'btn split';
      btnRight.innerText = 'SPLIT';
      chronometer.resetClick();
      break;
    case 'btn split':
      btnRight.className = 'btn reset';
      btnRight.innerText = 'RESET';
      chronometer.resetClick();
      break;
  }
});
