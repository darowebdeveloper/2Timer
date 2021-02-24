class Timer {
  constructor(inputDuration, startBtn, pauseBtn, callbacks) {
    this.inputDuration = inputDuration;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;

    if(callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startBtn.addEventListener('click', this.start);
    this.pauseBtn.addEventListener('click', this.pause);
  }
 
  // Use arrow function to avoid 'this' issue
  start = () => {
    if(this.onStart) {
      this.onStart(this.timeRemaining);
    }
    if(this.intervalId) {
      this.pause();
    }
    this.tick();
    this.intervalId = setInterval(this.tick, 50);
  }
  pause = () => {
    clearInterval(this.intervalId);
  }
  tick = () => {
    if(this.timeRemaining <= 0) {
      this.pause();
      if(this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - .05;
      if(this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  }
  // setter and getter
  get timeRemaining() {
    return parseFloat(this.inputDuration.value);
  }
  set timeRemaining(value) {
    if(isNaN(this.inputDuration.value)) {
      this.inputDuration.value = 0;
    } else {
      this.inputDuration.value = value.toFixed(2);
    }
  }
}