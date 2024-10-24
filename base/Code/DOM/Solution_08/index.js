// DOM style
const boxElement = document.querySelector(".box");
boxElement.style.width = "100px";
boxElement.style.height = "100px";
boxElement.style.backgroundColor = "violet";
boxElement.style.borderRadius = "10px";

// cách để thêm nhiều thuộc tính bằng Object.assign() -> add css inline
Object.assign(boxElement.style, {
  width: "100px",
  height: "100px",
  backgroundColor: "green",
  borderRadius: "10px",
});

// get value css
console.log(boxElement.style.backgroundColor); // green
console.log(boxElement.style.borderRadius); // 10px
