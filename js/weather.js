const API_KEY = "5ec9e8ded81e2d1bcceae8bb9d1a441d";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherTop = document.querySelector("#box__weather");
      const humidity = weatherTop.querySelector(
        "li:first-child span:last-child"
      );
      const clouds = weatherTop.querySelector(
        "li:nth-child(2) span:last-child"
      );
      const wind = weatherTop.querySelector("li:last-child span:last-child");

      const temp = document.querySelector("#box__main--weather h3");
      const minMax = document.querySelector(
        "#box__main--weather p:first-child"
      );
      const feelsLike = document.querySelector(
        "#box__main--weather p:nth-child(2)"
      );
      humidity.innerText = data.main.humidity + "%";
      clouds.innerText = Math.floor(`${data.clouds.all}`) + "%";
      wind.innerText = data.wind.speed + "m/s";
      temp.innerText = Math.floor(`${data.main.temp}`);
      minMax.innerText =
        Math.floor(`${data.main.temp_min}`) +
        "℃ /" +
        Math.floor(`${data.main.temp_max}`) +
        "℃";
      feelsLike.innerText =
        "feels like" + Math.floor(`${data.main.feels_like}`) + "℃";
    });
}
function onGeoError() {
  alert("Can't access your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
