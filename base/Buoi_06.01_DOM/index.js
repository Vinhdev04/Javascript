// DOM html

// 1. Sử dụng innerHTML để lấy nội dung của 1 element và sửa đổi nội dung
const text = document.querySelector("h2");
console.log(text);

const newText = text.innerHTML;
text.innerHTML = "Text example";
console.log(newText);

const box = document.querySelector("#box");
box.innerHTML = newText;
console.log(box);

// ---------- Phân biệt innerHTML và textContent và innerText ----------
const myText = document.querySelector(".text-demo");
console.log(myText);

// textContent -> chỉ lấy được nội dung tất cả phần tử bao gồm phần tử bị ẩn đi.
const txtContent = myText.textContent;
console.log(txtContent);

// innerHTML -> lấy ra các thẻ html, nội dung bên trong thẻ đó
const txt = myText.innerHTML;
console.log(txt);

// innerText -> hỉ lấy nội dung của những phần tử là "human-readable" tức là những phần tử không bị ẩn đi và loại bỏ các khoảng trắng dư thừa
const innerTxt = myText.innerText;
console.log(innerTxt);

// 2. Sử dụng attributeName hoặc getAttribute để lấy ra thuộc tính HTML
const listItem = document.querySelectorAll(".product");
let card = [];
[...listItem].forEach((item) => {
  const idItem = item.getAttribute("data-id");
  // console.log(item);
  card.push({ id: idItem });
  console.log(idItem);
});
console.log(card);

// 3. Sử dụng attributeName hoặc setAttribute(attributeName,new) -> thay đổi thuộc tính thêm, sửa, xóa html
let categoryItem = [];
[...listItem].forEach((item) => {
  const idCategory = item.setAttribute("data-category", "Technology");
  item.setAttribute("class", "product product-category");
  categoryItem.push({ id: idCategory });
});
