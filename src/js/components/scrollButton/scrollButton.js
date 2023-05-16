// const throttle = require('lodash.throttle');

import { throttle } from 'lodash';

const button = document.querySelector('.scroll-btn');

button.addEventListener('click', scrollToTop);

const throttledScrollFunction = throttle(scrollFunction, 2000);

window.onscroll = function () {
  throttledScrollFunction();
};

function scrollFunction() {
  var scrollButton = document.querySelector('.scroll-btn');

  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollButton.style.bottom = '20px';
  } else {
    scrollButton.style.bottom = '-100px';
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
