// const ulCategoriesEl = document.querySelector('#categories');
// const totalUlCat = ulCategoriesEl.childElementCount;
// console.log(`В списке ${totalUlCat} категории.`);

const ulCategor = document.querySelectorAll('.item');
console.log(`В списке ${ulCategor.length} категории.`);

//varian--1/////////////////////////

ulCategor.forEach(carrentEl =>
  console.log(`Категория: ${carrentEl.firstElementChild.innerText}
Количество элементов: ${carrentEl.lastElementChild.childElementCount}`)
);


//varian--2//////////////////////////

const allTegs = [...ulCategor];
allTegs.forEach(element => console.log(
    `Категория: ${element.querySelector('h2').textContent} \n
    Количество єлементов: ${element.querySelectorAll('li').length}`
  )
)