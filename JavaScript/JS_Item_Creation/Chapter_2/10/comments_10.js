let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');


commentForm.onsubmit = function (evt) {
  evt.preventDefault();

};

let newComment = document.createElement('li');
console.log(newComment);