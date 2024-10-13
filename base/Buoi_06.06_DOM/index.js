// DOM Node

// 1.document.createElement() -> tạo node mới ko liên quán đến thẻ html đang hiển thị trên website

const newNode = document.createElement("div");
newNode.innerHTML = "Node is created by javascript";
console.log(newNode);

// chèn nội dung từ thẻ tạo trong js vào thẻ có sẵn trên html
const test = document.querySelector("#test");
//test.innerHTML = newNode; // -> object ->  lỗi ko thể truyền
test.appendChild(newNode);

// 2. document.createTextNode() -> tạo node text mới -> là một chuỗi string và ko phải là thẻ html
const content = document.querySelector("#content");
const text = document.createTextNode("Content is created by javascript");
console.log(content);
content.appendChild(text);

// 3. element.appendChild() -> thêm vào cuối cùng của đối tượng một thẻ html nào đó
const title = document.createElement("p");
const textTile = document.createTextNode(" " + "Append title...");
newNode.appendChild(textTile);

const btnAdd = document.querySelector("#btn-add");
const btnRemove = document.querySelector("#btn-remove");
const menu = document.querySelector("#menu");
// const newItem = document.createElement("li");
// newItem.innerHTML = "new Item";
// console.log(newItem);

// add new item to last menu
btnAdd.onclick = function () {
  const newItem = document.createElement("li");
  newItem.innerHTML = "New Last Item";

  menu.appendChild(newItem);
};

// remove last item
btnRemove.onclick = function () {
  const lastItem = menu.lastElementChild;
  menu.removeChild(lastItem);
};

// 4. element_parent.insertBefore(node_insert,node_child) -> thêm một node mới vào trước node chỉ định
const firstItem = menu.firstElementChild;
const btn = document.querySelector("#btn");
btn.onclick = function () {
  const newItem = document.createElement("li");
  newItem.innerHTML = "New First Item";
  menu.insertBefore(newItem, firstItem);
};

// 5. element.removeChild(node_remove) -> xóa node con ra khỏi node hiện tại
btnRemove.onclick = function () {
  const lastItem = menu.lastElementChild;
  menu.removeChild(lastItem);
};

// 6. element.replaceChild(new_node, old_node) -> thay thế node con bằng node mới
const listItem = document.querySelectorAll("li");
listItem.forEach((item) => {
  item.onclick = function () {
    const newItem = document.createElement("li");
    newItem.innerHTML = "New Item...";

    menu.replaceChild(newItem, item);
  };
});
