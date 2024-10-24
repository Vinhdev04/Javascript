// ClassList property

// add
// contains -> check class
// remove
// toggle -> nếu đã tồn tại class -> gọi sẻ xóa , và chưa có khi gọi sẻ thêm vào class đó

const boxElement = document.querySelector(".box");
console.log(boxElement.classList.length);

boxElement.classList.add("box-title");
boxElement.id = "title";
console.log(boxElement.classList.length);
boxElement.classList.add("red", "blue");
console.log(boxElement.classList.contains("box-title")); // true

// boxElement.classList.remove("red");

/* The `setTimeout` function is used to delay the execution of a function by a specified amount of
time. In this case, the code inside the `setTimeout` function will toggle the "red" class on the
`boxElement` after a delay of 3000 milliseconds (3 seconds). This means that after 3 seconds, the
"red" class will either be added to or removed from the `boxElement`, depending on its current
state. */
// setTimeout(() => {
//   // boxElement.classList.remove("red");
//   boxElement.classList.toggle("red");
// }, 3000);

setInterval(() => {
  boxElement.classList.toggle("red");
}, 5000);
