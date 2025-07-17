'use strict';

const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
inputEl.addEventListener('input', handleIn);

function handleIn(event) {
  const textEl = event.target.value.trim();

  if (textEl !== '') {
    spanEl.textContent = textEl;
  } else {
    spanEl.textContent = 'Anonymous';
  }
}
