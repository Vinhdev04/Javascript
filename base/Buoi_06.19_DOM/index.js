const list = document.querySelector("#list");

// 1. removeChild
const items = document.querySelector("#item2");
list.removeChild(items);

const itemsX = document.querySelector("#item3");
itemsX.parentElement.removeChild(itemsX);
itemsX.parentElement.remove(itemsX);

// 2. remove()
const items2 = document.querySelector("#item4");
items2.remove();
