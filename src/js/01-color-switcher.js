const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
  timerId = setInterval(() => {
      document.body.style.background = getRandomHexColor(); 
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});
