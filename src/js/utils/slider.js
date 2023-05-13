import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiper = new Swiper('.swiper', {
  allowTouchMove: false,
  effect: 'creative',
  creativeEffect: {
    next: {
      translate: ['100%', 0, 0]
    }
  },
  direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  navigation: {
    nextEl: '.swiper-button'
  },

});
