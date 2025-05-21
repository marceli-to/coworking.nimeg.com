import Swiper, { Navigation, Autoplay } from 'swiper';
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Autoplay],
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 7000,
  },
  navigation: {
    nextEl: '.swiper-btn'
  },
});