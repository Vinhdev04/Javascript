// DOM events

// Attribute events
// Assign event using the element node

// onclick -> khi click chuột vào phần tử
const element = document.querySelector("h1");
element.onclick = function () {
  console.log((Math.random() * 10).toFixed(2));
};

// onmouseover -> khi di chuột hover vào
element.onmouseover = function () {
  element.style.color = "red";
};

// onmouseout -> khi hủy  hover
element.onmouseout = function () {
  element.style.color = "black";
};

// Assign event using the element node
const h2Element = document.querySelector("h2");
h2Element.onclick = function (e) {
  alert("Hello!...");
  console.log(e.target);
};
