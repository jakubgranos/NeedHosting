const navigation = document.querySelector('#header-navigation');
const navContainer = document.querySelector(".container");
const navTop = navigation.offsetTop;

function sticky() {

	if (window.scrollY > 50) {
		navigation.className = "sticky";
		navContainer.className = "containerAbs";
	} else if (window.scrollY < 20) {
		navigation.className = "header-navigation";
		navContainer.className = "container";
	}
}
window.addEventListener('scroll', sticky);