'use strict';

const form = document.querySelector('.login-form');
form.addEventListener('submit', hundleFun);

function hundleFun(event) {
  event.preventDefault();
  const obj = {};
  const emailEl = event.target.elements.email.value.trim();
  const passwordEl = event.target.elements.password.value.trim();

  if (emailEl === '' || passwordEl === '') {
    alert('All form fields must be filled in');
  } else {
    obj.email = emailEl;
    obj.password = passwordEl;
    console.log(obj);
    form.reset();
  }
}
