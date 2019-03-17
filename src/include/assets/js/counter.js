const counterElement = document.getElementById('counter-user');
const counterElement2 = document.getElementById('counter-newspaper');
const counterElement3 = document.getElementById('counter-comments');
const counterElement4 = document.getElementById('counter-envelope');
let startTime = 0;
function myTimer() {
	counterElement.innerHTML = startTime;
	counterElement2.innerHTML = startTime;
	counterElement3.innerHTML = startTime;
	counterElement4.innerHTML = startTime;
	startTime++;
	if(startTime >= 1000){
		clearInterval(stopTimer);
	}

}
const stopTimer = setInterval(myTimer, 10);