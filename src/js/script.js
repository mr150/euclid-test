import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

const sliderElm = document.querySelector('.slider__list');
sliderElm.classList.add('swiper-wrapper');
Array.prototype.forEach.call(
	sliderElm.children, (item => item.classList.add('swiper-slide'))
);

const swiper = new Swiper(sliderElm.parentElement, {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
