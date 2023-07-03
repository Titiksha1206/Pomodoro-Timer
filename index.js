const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const timerE1 = document.getElementById("timer");
// 25 min is equal to 1500 sec.
let timeLeft = 1500;
function updateTime() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  // let formatedTime = minutes + ':' + seconds;

  // to make 1 to 01 so that is remain formatted , in js we have method called padStart.
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  timerE1.innerHTML = formattedTime;
}
let interval;
const startSound = new Audio("mouse-click-153941.mp3");
const pauseSound = new Audio("mixkit-alert-quick-chime-766.wav");
const resetSound = new Audio("mouse-click-153941.mp3");

pauseTimer = () => {
  pauseSound.play();
  clearInterval(interval);
  alert("Time Stops, Get back to work!");
};
resetTimer = () => {
  resetSound.play();
  clearInterval(interval);
  timeLeft = 1500;
  updateTime();
  interval=undefined;
};

startButton.addEventListener("click", () => {
  if (interval === undefined) {
    startSound.play();
    interval = setInterval(() => {
      timeLeft--;
      updateTime();
      if (timeLeft === 0) {
        alert("Time's Up!");
        clearInterval(interval);
        timeLeft = 1500;
        updateTime();
      }
    }, 1000);
  } else {
    pauseSound.play();
    alert("Already Running");
  }
});
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
