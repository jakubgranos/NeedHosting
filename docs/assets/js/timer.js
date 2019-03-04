const hour = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
let hourCount = 23;
let minCount = 58;
let secCount = 58;
function timer() {
  sec.innerHTML = secCount;
  --secCount;
  if (secCount <= -1) {
    secCount = 58;
    min.innerHTML = minCount;
    --minCount;
    if (minCount <= -1) {
      minCount = 58;
      hour.innerHTML = hourCount;
      --hourCount;
      if (hourCount <= -1) {
        hourCount = 23;
      }
    }
  }
}
const setTime = setInterval(timer, 1000);