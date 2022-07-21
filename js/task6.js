const inputValidation = document.querySelector('#validation-input');

  // const validLength = inputValidation.getAttribute('data-length');
const validLength = inputValidation.dataset.length;

inputValidation.addEventListener('blur', onValidInputOfBlur);

function onValidInputOfBlur(event) {
  // event.preventDefault();
  if (event.currentTarget.value.length === Number(validLength)) {
    inputValidation.classList.add('valid');
    inputValidation.classList.remove('invalid');
  } else {
    inputValidation.classList.add('invalid');
    inputValidation.classList.remove('valid');
  }
}