const loginBox = document.querySelector("#box__login--form");
const loginInput = document.querySelector("#box__login--form input");
const userTitle = document.querySelector("h1");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginBox.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}
function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  userTitle.innerText = `Hello ${username}`;
  userTitle.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginBox.classList.remove(HIDDEN_CLASSNAME);
  loginBox.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
