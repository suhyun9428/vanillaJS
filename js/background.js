const images = ["1.jpg", "2.jpg", "3.jpg"];

const randomBg = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");

body.style.backgroundImage = `url(./img/${randomBg})`;
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";