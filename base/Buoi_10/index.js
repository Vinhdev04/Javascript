const input = document.querySelector("#input");
console.log("🚀 ~ input :", input);
const btnAdd = document.querySelector("#btn-add");
console.log("🚀 ~  btnAdd :", btnAdd);
const btnUpdate = document.querySelector("#btn-update");
console.log("🚀 ~ btnUpdate :", btnUpdate);
const list = document.querySelector("#result");
console.log("🚀 ~ list:", list);

// # Save email to localStorage when user clicks "Add" button equal setItem()
btnAdd.addEventListener("click", () => {
  const value = input.value;
  console.log("🚀 ~ value :", value);
  const name = input.name;
  console.log("🚀 ~ name:", name);
  if (value) {
    localStorage.setItem("email", value);
  }
  input.value = "";
});

// # update email when user clicks "Update" equal getItem()
btnUpdate.addEventListener("click", function () {
  const item = localStorage.getItem("email");
  const li = document.createElement("li");
  li.innerHTML = item;
  list.append(li);
});

// # remove email when user clicks "Remove" button equal removeItem()
const btnRemove = document.querySelector("#btn-remove");
console.log(btnRemove);

btnRemove.addEventListener("click", function () {
  localStorage.removeItem("email");
  list.innerHTML = ""; // clear data ul
});

// # clear all data
const clear = document.querySelector("#btn-clear");
const btnAddItem = document.querySelector("#btn-addItem");

let count = 0;
btnAddItem.addEventListener("click", function () {
  count++;
  localStorage.setItem(`key${count}`, `value${count}`);
  const item = localStorage.getItem("email");
  const li = document.createElement("li");
  li.innerHTML = item;
  list.append(li);
});

clear.addEventListener("click", function () {
  localStorage.clear();
  list.innerHTML = ""; // clear data ul
});

// # get key[index]
const getKey = document.querySelector("#btn-getKey");
console.log(getKey);

getKey.addEventListener("click", function () {
  const indexKey = localStorage.key(0);
  console.log(indexKey);
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key, value);
  }
});
