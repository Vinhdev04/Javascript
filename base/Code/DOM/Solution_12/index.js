const form = document.querySelector("#login");
console.log(form);

const userName = document.querySelector("#name");
console.log(userName);
const password = document.querySelector("#pass");

const btnDelete = document.querySelector("#delete");
const btnSubmit = document.querySelector("#submit");
const btnReset = document.querySelector("#reset");

const list = document.querySelector("#list");

// button delete li
btnDelete.addEventListener("click", function (e) {
  e.preventDefault();
  const listItem = document.querySelectorAll("li");
  if (listItem.length > 0) {
    listItem[listItem.length - 1].remove();
  } else {
    alert("Not found item!");
  }
});

// button add li
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(userName.value);

  // initial item
  const item = document.createElement("li");
  item.innerText = userName.value;
  list.append(item);
});

// button reset input

btnReset.addEventListener("click", function (e) {
  e.preventDefault();
  userName.value = "";
  password.value = "";
});
