import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return Promise.resolve({ position, delay });
  } else {
    return Promise.reject({ position, delay });
  }
}
  
function myPromise(position, delay) {
  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {useIcon: false});
  })
  .catch(({ position, delay }) => {
    Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`, {useIcon: false});
  });
}

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  for (i = 0; i < Number(form.elements.amount.value); i += 1){
    const delayTime = Number(form.elements.delay.value) + Number(form.elements.step.value) * i;
    timerId = setTimeout((position, delay) => {
      myPromise(position, delay);
    }, delayTime, i + 1, delayTime);
  };
});