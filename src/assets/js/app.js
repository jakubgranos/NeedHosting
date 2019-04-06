import getWindowUserAgent from './modules/userAgent';
window.onload = () => {
	console.log('You are using:', getWindowUserAgent());
}

import "./modules/timer";
import "./modules/validation";
import "./modules/counter";
import "./modules/hamburger-menu";
import "./modules/sticky";
import "./modules/swiper";

import sliders from "./modules/swiper"
sliders();