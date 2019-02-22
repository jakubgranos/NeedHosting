const hour = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
let hourCount = 56;
let minCount = 59;
let secCount = 59;
function timer() {
  sec.innerHTML = secCount;
  --secCount;
  if (secCount <= -1) {
    secCount = 59;
    min.innerHTML = minCount;
    --minCount;
    if (minCount <= -1) {
      minCount = 59;
      hour.innerHTML = hourCount;
      --hourCount;
      if (hourCount <= -1) {
        hourCount = 56;
      }
    }
  }
}
const setTime = setInterval(timer, 1000);