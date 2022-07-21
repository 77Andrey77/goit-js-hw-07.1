
const refs = {
  inputFontSizeControl: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.inputFontSizeControl.addEventListener('input',onChangeRangeInput);

function onChangeRangeInput(event) {
refs.text.style.fontSize = `${event.currentTarget.value}px`;
};
