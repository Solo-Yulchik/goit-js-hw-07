'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const spanColor = document.querySelector('.color');
const btn = document.querySelector('.change-color');
btn.addEventListener('click', hundleFun);

function hundleFun() {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
}
