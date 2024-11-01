const form = document.querySelector("#form");
const listItem = document.querySelector("#list_item");
const username = document.querySelector("#username");
const message = document.querySelector("#message");
const btn = document.querySelector("#btn");
const listItemLi = document.querySelectorAll("li");
console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

btn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.innerHTML = username.value + ": " + message.value;
  listItem.appendChild(newItem);

  // username.value = "";
  // message.value = "";
  form.reset(); // Reset form
});

for (let li of listItemLi) {
  li.addEventListener("click", function () {
    // delete old li
    li.remove();
  });
}

// not delete new li
listItem.addEventListener("click", function (e) {
  const deleteNewLi = e.target;
  //deleteNewLi.remove();
  // check item === li -> delete
  if (deleteNewLi.tagName === "LI") {
    console.log(e.target.tagName);

    deleteNewLi.remove();
  } else {
    console.log("Not found li");
  }
});
