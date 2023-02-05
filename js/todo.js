const todoBox = document.querySelector("#box__todo--form");
const todoInput = todoBox.querySelector("input");
const todoList = document.querySelector("#todo-list");

function delToDo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", delToDo);
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintToDo(newTodo);
}
todoBox.addEventListener("submit", handleTodoSubmit);
