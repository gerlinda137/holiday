var mySwiper = new Swiper('.programmes__slider', {
  spaceBetween: 10,
  slidesPerView: 'auto',
  spaceBetween: 60,
});

let nav = document.querySelector('.main-nav');
let burger = nav.querySelector('.main-nav__burger');

burger.onclick = function() {
  nav.classList.toggle('main-nav--menu-opened')
};


//sliders on resize



// let varietySwiper;
// let audienceSwiper;


// let advantagesSwiper;

// function mobileSlider() {
// 	if (window.innerWidth <= 767 && advantages.dataset.mobile == 'false') {
// 		advantagesSwiper = new Swiper(advantages, {
// 			slidesPerView: 1,
// 			spaceBetween: 30,
// 			slideClass: 'features__item',
// 			// pagination: {
// 			// 	el: '.swiper-pagination',
// 			// 	clickable: true,
// 			// },
// 		});

// 		advantages.dataset.mobile = 'true';
// 	}

// 	if (window.innerWidth > 767) {
// 		advantages.dataset.mobile = 'false';
// 		if (advantages.classList.contains('swiper-container-initialized')) {
// 			advantagesSwiper.destroy();
// 		}
// 	}
// }

// mobileSlider()

// window.addEventListener('resize', () => {
// 	mobileSlider();
// });
const advantages = document.querySelector('.features');
const pageWidthMobileThreshold = 767;

let advantagesSwiper = null;

function checkCreateAdvantagesMobileSwiper() {
  console.log('inner ' + window.innerWidth);
  // return;
  if (window.innerWidth <= pageWidthMobileThreshold) {

    console.log('malo');
    if (advantagesSwiper === null) {
      console.log('create');

      advantagesSwiper = new Swiper(advantages, {
        // Optional parameters
        // direction: 'vertical',

        // If we need pagination
        spaceBetween: 20,
        // slidesPerView: 'auto',
        // width: 400,
        // centeredSlides: true,
        // visibilityFullFit: true,

        // pagination: {
        //   el: '.sale-chairs__pagination',
        //   type: 'progressbar',
        // },

        wrapperClass: 'features__wrapper',

        slideClass: 'features__item',

    })
    }

  } else {
    console.log('mnogo');
    if (advantagesSwiper !== null) {
      console.log('destroy');
      advantagesSwiper.destroy();
      advantagesSwiper = null;
    }
  }
}


checkCreateAdvantagesMobileSwiper();
window.addEventListener('resize', checkCreateAdvantagesMobileSwiper);
