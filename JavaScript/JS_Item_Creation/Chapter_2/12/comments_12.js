let commentList = document.querySelector('.comment-list');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();
  let newComment = document.createElement('li');
commentList.append(newComment);

};

