const bikes = [
  {
    title: 'Велосипед STELS Navigator 510 HD 26 2022',
    description: '<p>Данный велосипед с колесами 26 дюймов хорошо подходит высоким подросткам. Прогиб рамы и небольшой размер рамы расчитан на рост от 135 до 165 см.</p><p>Суммарный вес велосипеда был снижен до 16,9 кг, так как рама была изготовлена с учетом использования велосипеда подростками.</p',
  },
  {
    title: 'Велосипед SCHWINN Traveler women 2022',
    description: '<p>Женский велосипед со стальной рамой Classic step-true lightweight позволяет девушкам без проблем его перемещать.</p><p>На данном велосипеде имеется 7 скоростей с переключателями от Shimano, а жесткая вилка обеспечивает отличную управляемость. Подходит для катания по асфальтированным поверхностям.</p>'
  }
]

let productTitle = document.getElementById("product-title");
let productDescription = document.getElementById("product-description");

productTitle.innerHTML = `${bikes[0].title}`
productDescription.innerHTML=`${bikes[0].description}`

for (let i = 0; i < bikes.length; i++) {
  let navButton = document.getElementById(`${i+1}`);
  let productImage = document.getElementById("product-image");
  navButton.addEventListener('click', () => {
    productImage.style.backgroundImage = `url(./images/image${i+1}.png)`
    productTitle.innerHTML = `${bikes[i].title}`
    productDescription.innerHTML=`${bikes[i].description}`
    const activeButtons = document.getElementsByClassName('navigation__list navigation__list_active')
    const activeButtonArray = Array.from(activeButtons)
    activeButtonArray.forEach(element => {
      element.classList.remove('navigation__list_active')
    });
    navButton.classList.add('navigation__list_active')
  });  
  }