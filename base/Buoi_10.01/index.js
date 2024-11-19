const btn = document.getElementById("btn");
console.log("🚀 ~ btn :", btn);
const input = document.querySelector("input[type=password]");
console.log("🚀 ~ input:", input);
const list = document.querySelector("#list");
console.log("🚀 ~ list:", list);
const items = document.createElement("li");

// # setItem() in sessionStorage
btn.addEventListener("click", function () {
  const name = input.name;
  const value = input.value;
  console.log(name, value);
  sessionStorage.setItem(name, value);
  input.value = "";
});

// # getItem() in sessionStorage
const btnAdd = document.getElementById("btn-add");
console.log("🚀 ~ btnAdd:", btnAdd);
btnAdd.addEventListener("click", function () {
  const node = sessionStorage.getItem("password");
  items.innerHTML = node;
  list.appendChild(items);
  console.log(list);
});

// # removeItem() in sessionStorage
const btnDelete = document.querySelector("#btn-remove");
console.log("🚀 ~ btnDelete:", btnDelete);
btnDelete.addEventListener("click", function () {
  sessionStorage.removeItem("password");
  list.innerHTML = "";
  console.log(list);
});

// # clear() in sessionStorage
const btnClear = document.querySelector("#btn-clear");
console.log("🚀 ~ btnClear:", btnClear);
btnClear.addEventListener("click", function () {
  sessionStorage.clear();
  list.innerHTML = "";
  console.log(list);
});

// # key() in sessionStorage
const btnKey = document.querySelector("#btn-getKey");
console.log("🚀 ~ btnKey:", btnKey);
btnKey.addEventListener("click", function () {
  console.log(sessionStorage.key(0));
});
