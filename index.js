let inputDuraiton = document.querySelector('#duration');
let startBtn = document.querySelector('#start');
let pauseBtn = document.querySelector('#pause');
let circle = document.querySelector('circle');

let perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration; 

let timer = new Timer(inputDuraiton, startBtn, pauseBtn, {
  onStart(totalDuration ) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', (perimeter * timeRemaining)/ duration - perimeter);
  },
  onComplete() {
    var audio = new Audio('https://freesound.org/data/previews/415/415510_5121236-lq.mp3');
    audio.play();
  },
});
