const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const mins = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  const days = date.getDay();
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
  clock.innerText = `${hours} : ${mins} : ${sec} (${weeks[days]}` + ")";
}
getClock();
setInterval(getClock, 1000);
