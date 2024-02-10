import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let dateSelect = 0;
console.log("Test");

const startBtn = document.querySelector("button");
const displayClock = {};
displayClock.days = document.querySelector("[data-days]");
displayClock.hours = document.querySelector("[data-hours]");
displayClock.minutes = document.querySelector("[data-minutes]");
displayClock.seconds = document.querySelector("[data-seconds]");
startBtn.disabled = true;

function convertMs(ms) {
// Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

// Remaining days
  const days = Math.floor(ms / day);
// Remaining hours
  const hours = Math.floor((ms % day) / hour);
// Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
// Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function actualTime(timeData) {
  displayClock.days.textContent = addLeadingZero(timeData.days);
  displayClock.hours.textContent = addLeadingZero(timeData.hours);
  displayClock.minutes.textContent = addLeadingZero(timeData.minutes);
  displayClock.seconds.textContent = addLeadingZero(timeData.seconds);
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function timerDecrementClock() {
  const date = new Date();
  let timerMs = dateSelect.getTime() - date.getTime();
  if (timerMs >=0) {
    actualTime(convertMs(timerMs));
  }
  else {
    clearInterval(timerId);
  }
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();
    dateSelect = selectedDates[0];
    if (date.getTime() > dateSelect.getTime()) {
      Notify.failure('Please choose a date in the future');
      actualTime(convertMs(0));
      startBtn.disabled = true;
    }
    else{
      startBtn.disabled = false;
    }
  },
};

flatpickr("input[type=datetime-local]", options);

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  timerId = setInterval(() => {
  timerDecrementClock();
  }, 1000);
});




