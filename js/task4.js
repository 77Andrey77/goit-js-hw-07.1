
const refs = {
decrementBtn :document.querySelector('[data-action="decrement"]') ,
incrementBtn :document.querySelector('[data-action="increment"]') ,
valueCounter :document.querySelector('#value'),
}

let counterValue = 0;

refs.decrementBtn.addEventListener('click', decrement);
refs.incrementBtn.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  refs.valueCounter.textContent =counterValue;
};

function increment() {
  counterValue += 1;
  refs.valueCounter.textContent =counterValue;
};