let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
commentList.append('Новый комментарий');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

};