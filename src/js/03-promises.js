import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return Promise.resolve(position, delay);
  } else {
    return Promise.reject(position, delay);
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

// const makeGreeting = guestName => {
//   if (guestName === "" || guestName === undefined) {
//     return Promise.reject("Guest name must not be empty");
//   }

//   return Promise.resolve(`Welcome ${guestName}`);
// };

// makeGreeting("")
//   .then(greeting => Notify.success(`✅ Fulfilled promise `))
//   .catch (error => Notify.failure(`❌ Rejected promise `));
  