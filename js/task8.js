const refs = {
  inputNumber: document.querySelector('#controls input'),
  render: document.querySelector('[data-action="render"]'),
  destroy: document.querySelector('[data-action="destroy"]'),

  boxes: document.querySelector('#boxes'),
}
 
refs.render.addEventListener('click', getAmount);
refs.destroy.addEventListener('click', onDestroyBoxes);

function getAmount() {
  let amount = Number(refs.inputNumber.value);
  onCreateBoxes(amount);
};
const divEl = [];

function onCreateBoxes(amount) {
  // console.log(amount);
  const basicSize = 30;

  for (let i = 0; i < amount; i++){
   
    const divElemrnt = document.createElement('div');
    let size = basicSize + i * 10;
    divElemrnt.style.width = `${size}px`;
    divElemrnt.style.height=`${size}px`;
    divElemrnt.style.backgroundColor = `rgba(${random()},${random()},${random()})`;
    // boxes.append(divElemrnt);
    divEl.push(divElemrnt);
  }
  boxes.append(...divEl); 
  
};

function onDestroyBoxes() {
  refs.boxes.innerHTML = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}