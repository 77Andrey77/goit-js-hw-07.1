const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');


// const addIngred = ingredients.map(
//   elem => {
//     const liEl = document.createElement('li');
//     liEl.textContent = elem;
//     liEl.style.color = 'red';
//     liEl.style.fontSize = '34px';

//     return liEl;
//     }
// );
// ingredientsEl.append(...addIngred);


const makeLiIngredientEl = options=> {
  return options.map(option => {
      const liEl = document.createElement('li');
      liEl.textContent = option;
      liEl.style.color = 'red';
      liEl.style.fontSize = '34px';

      return liEl;
    }
  );
};
const elem = makeLiIngredientEl(ingredients);
ingredientsEl.append(...elem);
