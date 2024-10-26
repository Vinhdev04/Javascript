// Kiểm tra xem phần tử có thuộc tính (class, id,...) không
const title = document.querySelector("#heading_title");
title.setAttribute("style", "color: blue;");

const firstListItem = document.querySelector(".list");
console.log(firstListItem.hasAttribute("class")); // true
console.log(title.hasAttribute("id")); // true

// Xóa thuộc tính
title.removeAttribute("style");
console.log(title);
console.log(title.hasAttribute("style")); // false

// Xóa toàn bộ thẻ <a> có thuộc tính title
const elements = document.getElementsByTagName("a");
console.log(elements);

// Chuyển đổi HTMLCollection sang mảng để sử dụng forEach
Array.from(elements).forEach((element) => {
  element.removeAttribute("title");
});
