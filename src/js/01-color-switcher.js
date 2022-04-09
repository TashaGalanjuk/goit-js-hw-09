function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const bodyColor = document.querySelector('body');
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
;
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', true);
});

