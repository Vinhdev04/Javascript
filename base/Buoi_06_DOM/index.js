// DOM -> Document Object Model -> mô hình các đối tượng trong HTML
// Thông qua DOM Có thể truy xuất đến các thẻ HTML dễ dàng
// DOM gồm: Element, Attributes,Text

// 1. Sử dụng getElementById để tìm theo ID -> -> chỉ tìm được 1 thẻ
const content = document.getElementById("content");
content.classList.add("dark");
console.log(content);

const list = document.getElementById("list");
console.log(list);

// 2. Sử dụng getElementsByTagName để tìm theo thẻ html -> trả về 1 mảng các Object
let element = document.getElementsByTagName("li");
element[0].classList.add("dark");
element[1].classList.add("light");

// 3. Sử dụng getElementsByClassName -> để tìm theo class -> trả về 1 HTMLCollection
const textPara = document.getElementsByClassName("text-txt");
console.log(textPara);
textPara[1].classList.add("dark");
textPara[4].classList.add("dark");
textPara[2].classList.add("text-detail");

[...textPara].forEach((item) => {
  console.log(item);
  item.classList.add("text-sub");
  item.classList.remove("text");
});

// 4. Sử dụng querySelector -> tìm theo CSS Selector -> chỉ tìm được 1 thẻ
const itemActive = document.querySelector(".link");
console.log(itemActive);
itemActive.classList.add("active");

// 5. Sử dụng querySelectorAll -> tìm theo CSS Selector All -> tìm tất cả thẻ -> trả về NodeList
const itemActiveAll = document.querySelectorAll(".link");
console.log(itemActiveAll);
[...itemActiveAll].forEach((item) => {
  item.classList.add("test");
});
