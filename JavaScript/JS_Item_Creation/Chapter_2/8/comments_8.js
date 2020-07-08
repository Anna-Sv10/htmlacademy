let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
commentList.textContent = 'Новый комментарий'

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

};
