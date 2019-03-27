import Swiper from 'swiper';
const sliders = function() {
	const slider = new Swiper('.swiper1', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
	
	const slider1 = new Swiper('.swiper2', {
		pagination: {
			el: '.swiper-pagination2',
		}
	});
}
export default sliders;