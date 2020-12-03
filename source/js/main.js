const moreButtons = document.querySelectorAll('.programmes__card-mobile-preview-btn');
const cardInfos = document.querySelectorAll('.programmes__card-info');
const previews = document.querySelectorAll('.programmes__card-mobile-preview');

for (let i = 0; i < moreButtons.length; i++) {
  const moreButton = moreButtons[i];
  const cardInfo = cardInfos[i];
  const preview = previews[i];
  moreButton.onclick = function () {
    preview.classList.add('programmes__card-mobile-preview--hidden');
    cardInfo.classList.add('programmes__card-info--visible');
  }

}

const pageWidthMobileThreshold = 767;

var mySwiper = new Swiper('.programmes__slider', {
  spaceBetween: 30,
  slidesPerView: 'auto',
});

let nav = document.querySelector('.main-nav');
let burger = nav.querySelector('.main-nav__burger');

burger.onclick = function() {
  nav.classList.toggle('main-nav--menu-opened')
};


const advantages = document.querySelector('.features');


let advantagesSwiper = null;

function checkCreateAdvantagesMobileSwiper() {
  if (window.innerWidth <= pageWidthMobileThreshold) {

    if (advantagesSwiper === null) {

      advantagesSwiper = new Swiper(advantages, {
        spaceBetween: 5,
        slidesPerView: 'auto',
        wrapperClass: 'features__wrapper',

        slideClass: 'features__item',

    })
    }

  } else {
    if (advantagesSwiper !== null) {
      advantagesSwiper.destroy();
      advantagesSwiper = null;
    }
  }
}
checkCreateAdvantagesMobileSwiper();

const variety = document.querySelector('.variety__wrapper');

let varietySwiper = null;

function checkCreateVarietyMobileSwiper() {
  if (window.innerWidth <= pageWidthMobileThreshold) {

    if (varietySwiper === null) {
      console.log('create');

      varietySwiper = new Swiper(variety, {
        spaceBetween: 30,
        slidesPerView: 'auto',
        wrapperClass: 'variety__list',
        slideClass: 'variety__list-item',

    })
    }

  } else {
    if (varietySwiper !== null) {
      varietySwiper.destroy();
      varietySwiper = null;
    }
  }
}

checkCreateVarietyMobileSwiper();
window.addEventListener('resize', checkCreateAdvantagesMobileSwiper, checkCreateVarietyMobileSwiper);
