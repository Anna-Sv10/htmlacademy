let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

priority.onclick = function () {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
};

form.onsubmit = function (evt) {
let Li = document.createElement('li');
  console.log(Li);

  Li.innerHTML = input.value;
  console.log(Li);
  console.log(input.value);
  list.appendChild(Li);
  console.log(list);
  if (priority.classList.contains('is-important')) {
    Li.classList.add("is-important");
  } 
  
  input.value = '';
  
  evt.preventDefault();
};