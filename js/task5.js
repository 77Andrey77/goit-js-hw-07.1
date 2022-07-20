
const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputNameChange);

function onInputNameChange(event) {
  console.log(event.currentTarget.value);
  refs.nameOutput.textContent = event.currentTarget.value;
}