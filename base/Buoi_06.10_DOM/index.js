// DOM Events

// 1. preventDefault
const elements = document.querySelectorAll("a");
console.log(elements);
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function (e) {
    if (!e.target.href.startsWith("https://f8.edu.vn")) {
      e.preventDefault();
    }
  };
}

const input = document.querySelector("input");
const list = document.querySelector("ul");
console.log(input);
console.log(list);

list.onmousedown = function (e) {
  e.preventDefault();
};

list.onclick = function (e) {
  //list.style.display = "block";
  console.log(e.target);
};

// 2. stopPropagation
const elementDiv = document.querySelector("div");
console.log(elementDiv);
const btnElement = document.querySelector("button");
console.log(btnElement);

elementDiv.onclick = function (e) {
  console.log("content Clicked");
};

btnElement.onclick = function (e) {
  e.stopPropagation();
  console.log("button Clicked");
};
