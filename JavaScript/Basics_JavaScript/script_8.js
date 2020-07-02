let page = document.querySelector('.page');
page.classList.remove('light-theme');
page.classList.add('dark-theme');

let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function () {
  console.log('Кнопка нажата!');  
};