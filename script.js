'use strict';

const button1 = document.querySelector('.btn--hole1');
const button2 = document.querySelector('.btn--hole2');
const button3 = document.querySelector('.btn--hole3');
const button4 = document.querySelector('.btn--hole4');
const button5 = document.querySelector('.btn--hole5');
const button6 = document.querySelector('.btn--hole6');
const button7 = document.querySelector('.btn--hole7');
const button8 = document.querySelector('.btn--hole8');
const button9 = document.querySelector('.btn--hole9');
const button10 = document.querySelector('.btn--hole10');
const button11 = document.querySelector('.btn--hole11');
const button12 = document.querySelector('.btn--hole12');
const button13 = document.querySelector('.btn--hole13');

const wormMoves = [0, -1, 1];
// button1.classList.add('worm');

let wormStart = Math.trunc(Math.random() * 13) + 1;
console.log(wormStart);

let wormCurrent = wormStart;
let wormPrevious = wormStart;
let lastHoleClicked = 0;
let hits = 0;
// let viewWorm = true;

// document.querySelector('.worm--image').addEventListener('click', function () {
//   viewWorm === true ? (viewWorm = false) : (viewWorm = true);
//   document.querySelector(`.btn--hole${wormCurrent}`).classList.add('worm');
// });
document.querySelector('.winner').classList.add('hidden');
document.querySelector(`.btn--hole${wormStart}`).classList.add('worm');

const updateHits = function () {
  document.querySelector('.hits').textContent = `Hits: ${hits}`;
};

const holeClick = function () {
  hits++;
  updateHits();
  if (lastHoleClicked === wormCurrent) {
    console.log('You Win!');
    document.querySelector('.winner').classList.remove('hidden');
  } else if (wormCurrent === 1) {
    wormPrevious = wormCurrent;
    wormCurrent++;
    document.querySelector(`.btn--hole${wormCurrent}`).classList.add('worm');
    document
      .querySelector(`.btn--hole${wormPrevious}`)
      .classList.remove('worm');
  } else if (wormCurrent === 13) {
    wormPrevious = wormCurrent;
    wormCurrent--;
    document.querySelector(`.btn--hole${wormCurrent}`).classList.add('worm');
    document
      .querySelector(`.btn--hole${wormPrevious}`)
      .classList.remove('worm');
  } else wormJumps();
  document.querySelector(`.btn--hole${wormCurrent}`).classList.add('worm');
  document.querySelector(`.btn--hole${wormPrevious}`).classList.remove('worm');
  //   } else wormJumps();
};

const wormJumps = function () {
  wormPrevious = wormCurrent;
  wormCurrent += wormMoves[Math.trunc(Math.random() * 2) + 1];
};

button1.addEventListener('click', function () {
  //   button1.classList.add('worm');
  lastHoleClicked = 1;
  holeClick();
  console.log(`worm: ${wormCurrent}`);
});

button2.addEventListener('click', function () {
  //   button1.classList.add('worm');
  lastHoleClicked = 2;
  holeClick();
  console.log(`worm: ${wormCurrent}`);
});

button3.addEventListener('click', function () {
  //   button1.classList.add('worm');
  lastHoleClicked = 3;
  holeClick();
  console.log(`worm: ${wormCurrent}`);
});

button4.addEventListener('click', function () {
  //   button1.classList.add('worm');
  lastHoleClicked = 4;
  holeClick();
  console.log(`worm: ${wormCurrent}`);
});

button5.addEventListener('click', function () {
  //   button1.classList.add('worm');
  lastHoleClicked = 5;
  holeClick();
  console.log(`worm: ${wormCurrent}`);
});

button6.addEventListener('click', function () {
  //   button1.classList.add('worm');
  lastHoleClicked = 6;
  holeClick();
  console.log(`worm: ${wormCurrent}`);
});

button7.addEventListener('click', function () {
  //   button1.classList.add('worm');
  lastHoleClicked = 7;
  holeClick();
  console.log(`worm: ${wormCurrent}`);
});

button8.addEventListener('click', function () {
  //   button1.classList.add('worm');
  lastHoleClicked = 8;
  holeClick();
  console.log(`worm: ${wormCurrent}`);
});

button9.addEventListener('click', function () {
  //   button1.classList.add('worm');
  lastHoleClicked = 9;
  holeClick();
  console.log(`worm: ${wormCurrent}`);
});

button10.addEventListener('click', function () {
  //   button1.classList.add('worm');
  lastHoleClicked = 10;
  holeClick();
  console.log(`worm: ${wormCurrent}`);
});

button11.addEventListener('click', function () {
  //   button1.classList.add('worm');
  lastHoleClicked = 11;
  holeClick();
  console.log(`worm: ${wormCurrent}`);
});

button12.addEventListener('click', function () {
  lastHoleClicked = 12;
  holeClick();
  console.log(`worm: ${wormCurrent}`);
});

button13.addEventListener('click', function () {
  lastHoleClicked = 13;
  holeClick();
  console.log(`worm: ${wormCurrent}`);
});
