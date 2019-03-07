const hour = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");

const currentDate = new Date();
let currentHour = currentDate.getHours();
let currentMin= currentDate.getMinutes();
let currentSec = currentDate.getSeconds();

const counterDate = new Date("October 29, 1999 23:59:59");
let counterHour = counterDate.getHours();
let counterMin = counterDate.getMinutes();
let counterSec = counterDate.getSeconds();


//obliczenia
let  subtractionSec = counterSec - currentSec;
let  subtractionMin = counterMin - currentMin;
let  subtractionHour = counterHour - currentHour;
function timer() {
	sec.innerHTML = subtractionSec;
	 --subtractionSec;
	if(subtractionSec === 0){
		subtractionSec = 59;
		--subtractionSec;
		
		min.innerHTML = subtractionMin;
		--subtractionMin;
		if(subtractionMin === 0) {
			subtractionMin = 59;
			--subtractionMin;

			hour.innerHTML = subtractionHour;
			--subtractionHour;
			if(subtractionHour === 0) {
				subtractionhour = 23;
				--subtractionhour;
			}
		}
	}
	sec.innerHTML = subtractionSec;
	min.innerHTML = subtractionMin;
	hour.innerHTML = subtractionHour;
}
const setTime = setInterval(timer, 1000);

