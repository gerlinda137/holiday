var mySwiper = new Swiper('.swiper-container', {
  spaceBetween: 10,
  slidesPerView: 'auto',
  spaceBetween: 60,
});

let nav = document.querySelector('.main-nav');
let burger = nav.querySelector('.main-nav__burger');

burger.onclick = function() {
  nav.classList.toggle('main-nav--menu-opened')
};
