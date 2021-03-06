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

document.querySelector('.header').classList.add('header--js');

const navMenuElm = document.querySelector('.nav-menu');
navMenuElm.classList.add('nav-menu--js');
navMenuElm.classList.remove('nav-menu--open');

const navBtnElm = document.querySelector('.header__btn-nav');
navBtnElm.classList.add('header__btn-nav--js');

navBtnElm.addEventListener('click', e => {
	e.target.classList.toggle('btn--burger-open');
	navMenuElm.classList.toggle('nav-menu--open');
});
