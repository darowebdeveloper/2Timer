let inputDuraiton = document.querySelector('#duration');
let startBtn = document.querySelector('#start');
let pauseBtn = document.querySelector('#pause');

let timer = new Timer(inputDuraiton, startBtn, pauseBtn, {
  onStart() {
    console.log('Timer started...');
  },
  onTick() {
    console.log('Timer ticked down...');
  },
  onComplete() {
    console.log('Timer complete...');
  },
});
