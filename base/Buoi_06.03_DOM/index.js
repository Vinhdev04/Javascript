// DOM Event -> là một tac động lên html , qua đó ta có thể bắt sự kiện và viết code js
// Syntax: element.eventElement = function(){}

// 1. onload -> khi trình duyệt đã chạy xong(image,js,css,..) -> mới bắt đầu chạy
window.onload = function () {
  const listItem = document.querySelector("#list");
  console.log(listItem);
};

// 2. onblur -> kích hoạt phần tử mất trọng tâm -> ko được focus vào nữa
const inputName = document.querySelector("#inputName");
console.log(inputName);
inputName.onblur = function () {
  // alert("Please select...");
  console.log(inputName.value.toUpperCase());
  inputName.value = inputName.value.toUpperCase();
  inputName.classList.remove("focus");
};

// 3. onfocus -> kích hoạt phần tử đang focus vào
inputName.onfocus = function () {
  inputName.classList.add("focus");
};

// 4. onkeydown -> kích hoạt khi 1 phím được nhấn -> chạy hàm trước sau đó mới tới giao diện
const inputText = document.querySelector("#inputText");
console.log(inputText);
inputText.onkeydown = function () {
  console.log("On keydown");
  alert("On keydown");
};

// 5. onkeyup -> kích hoạt khi 1 phím được nhả ra -> ưu tiên hiển thị giao diện trước sau đó mới chạy hàm
inputText.onkeyup = function () {
  console.log("On keyup");
  alert("On keyup");
};

// 6. onclick -> kích hoạt khi người dùng click vào phần tử
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
const btnClose = document.querySelector("#btnClose");

btnMenu.onclick = function () {
  menu.classList.add("show");
};

btnClose.onclick = function () {
  menu.classList.remove("show");
};

// 7. onchange -> kích hoạt giá trị được thay đổi khác đi so với giá trị trước đó
const getColors = document.querySelector("#colors");
console.log(getColors);
getColors.onchange = function () {
  let currentColor = getColors.value;
  console.log("Color: ", currentColor);
};
