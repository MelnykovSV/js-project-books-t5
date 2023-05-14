import Swiper, { Navigation } from 'swiper';
import { renderFoundsList } from './foundsList';
import { founds } from './founds';

const foundsSliderEl = document.querySelector('.js-founds-slider');

foundsSliderEl.innerHTML = renderFoundsList(founds);

new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 6,
    },
  },
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button',
  },
});
