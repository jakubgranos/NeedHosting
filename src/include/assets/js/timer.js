function timerUpdate() {        
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();

	setTimeout(timerUpdate,1000);
	
	document.getElementById("hours").innerHTML = h + '<span>hours</span>';
	document.getElementById("minutes").innerHTML = m + '<span>minutes</span>';
	document.getElementById("seconds").innerHTML = s + '<span>seconds </span>';
}
timerUpdate();