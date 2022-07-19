const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');

// galleryEl.innerHTML( `<li></li>`);

// const imgGallery = images.map(elem => {
//   return galleryEl.insertAdjacentHTML('beforeend', `<li>
// <img src="${elem.url}" alt="${elem.alt}">
//   </li>`);
// });

const makeImgRowMarkup = ({url,alt} )=> {
  return`<li><img src="${url}" alt="${alt}"></li>`;
};

const makeGallery = images.map(makeImgRowMarkup).join('');
galleryEl.insertAdjacentHTML('beforeend' ,makeGallery);


// const imgGallery = images.map(elem => {
//   const liElement = document.createElement('li');

//   const imgElement = document.createElement('img');
//   imgElement.src = elem.url;
//   imgElement.alt = elem.alt;
//   imgElement.classList.add('img')
//   liElement.appendChild(imgElement);

//   return liElement;
// });
// galleryEl.append(...imgGallery);

//функция для создания разметки
// const imgGallery = ({url,alt}) => {
//     const liElement = document.createElement('li');

//   const imgElement = document.createElement('img');
//   imgElement.src = url;
//   imgElement.alt = alt;
//   imgElement.classList.add('img')
//   liElement.appendChild(imgElement);

//   return liElement; 
// }

//создаем массив елементов
// const elementsGallery = images.map(imgGallery);

//добавляем в документ распыленные елементы 
// galleryEl.append(...elementsGallery);