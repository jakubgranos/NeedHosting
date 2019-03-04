const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navigation");

hamburger.onclick = function() {
	if(nav.className == "active") {
		nav.className = "desactive"

	}
	else {
		nav.className = "active"
		
	}
}