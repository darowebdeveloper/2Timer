class Timer {
  constructor(inputDuration, startBtn, pauseBtn) {
    this.inputDuration = inputDuration;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;

    this.startBtn.addEventListener('click', this.start);
    this.pauseBtn.addEventListener('click', this.pause);
  }
 
  // Use arrow function to avoid 'this' issue
  start = () => {
    this.tick();
    this.intervalId = setInterval(this.tick, 1000);
  }
  pause = () => {
    clearInterval(this.intervalId);
  }
  tick = () => {
    if(this.timeRemaining <= 0) {
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 1;
    }
  }
  // setter and getter
  get timeRemaining() {
    return parseFloat(this.inputDuration.value);
  }
  set timeRemaining(value) {
    this.inputDuration.value = value;
  }
}

let inputDuraiton = document.querySelector('#duration');
let startBtn = document.querySelector('#start');
let pauseBtn = document.querySelector('#pause');

let timer = new Timer(inputDuraiton, startBtn, pauseBtn);
