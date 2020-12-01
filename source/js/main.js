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


//sliders on resize
const advantages = document.querySelector('.features__wrapper');


let varietySwiper;
let audienceSwiper;


let advantagesSwiper;

function mobileSlider() {
	if (window.innerWidth <= 767 && advantages.dataset.mobile == 'false') {
		advantagesSwiper = new Swiper(advantages, {
			slidesPerView: 'auto',
			spaceBetween: 30,
			slideClass: 'advantages-card',
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
		});

		advantages.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767) {
		advantages.dataset.mobile = 'false';
		if (advantages.classList.contains('swiper-container-initialized')) {
			advantagesSwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});
