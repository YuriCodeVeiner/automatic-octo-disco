let myImage = document.querySelector('img'); //Итак, мы сохраняем ссылку на наш элемент <img> в переменной myImage.//

myImage.onclick = function() {               //Далее, мы создаём этой переменной обработчик события onclick с анонимной функцией. Теперь, каждый раз, когда на этот элемент изображения щёлкнут//
    let mySrc = myImage.getAttribute('src');//мы получаем значение из атрибута src изображения.//
    //Мы используем условие для проверки значения src, равен ли путь к исходному изображению://
    if(mySrc === 'images/test-image.jpg') {         //Если это так, мы меняем значение src на путь ко 2-му изображению, заставляя другое изображение загружаться внутри элемента <image>.//
      myImage.setAttribute ('src','images/test-image2.jpg');
    } else {                                      //Если это не так (значит, оно должно было уже измениться), мы меняем значение src, возвращаясь к первоначальному пути изображения, каким он был изначально.
      myImage.setAttribute ('src','images/test-image.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Как твое имя, путник.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Макима ахуенна, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Макима ахуенна, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }