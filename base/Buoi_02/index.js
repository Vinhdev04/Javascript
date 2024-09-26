// Data Type
// 1. Kiểu dữ liệu nguyên thủy(Primitive data): Number, String,Boolean,Undefined,Null,Symbol -> giá trị ko thể thay đổi được

// 1 Number:
let a = 10;
let b = 10.5;
let c = Infinity;
let d = -Infinity;
let e = 10 / "123a"; // NaN
let f = `abc`;
let h = true;
let g; // undefined
let x = null;
console.log(x); // null
console.log(g); // undefined
console.log(e); // NaN

// Null -> là 1 kiểu dữ liệu được gán cho biến , thường được hiểu là không có
// undefined -> là 1 giá trị mặc định cảu 1 biến sau khi được khởi tạo mà không được gán giá trị

// 2. Kiểu dữ liệu phức tạp(Complex data): function,Object,Array...

// Function
function sum(a, b) {
  console.log(a + b);
}
sum(10, 90);

// Object
let infoUsers = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
    email: "john@example.com",
  },
  sumAB: function (x, y) {
    console.log(x + y);
  },
};
console.log("Email: ", infoUsers.address.email);
infoUsers.sumAB(1, 5);
console.log("Data Type: ", typeof infoUsers);

// Array
let array = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(array);
console.log(array[1]); // 4 5 6

console.log("Data type: ", typeof array);

let arr = ["John", "John Smith", "Ronaldo"];
console.log(arr);
console.log(arr[1]); // John Smith
arr.add = function (a, b) {
  alert(a + b);
};
arr.add(10, 10);
arr.age = 20;

// 3. Function Built-in: alert(),prompt(),confirm()

// alert(message) -> hiển thị nội dung popup
alert("Hello world!");

prompt("Let me know");

// confirm(message) -> hiển thị nội dung popup kèm theo option
let result = confirm("Do you want to continue");
if (result === true) {
  console.warn("Loading...");
} else {
  console.error("Exit...");
}
console.log(result); // tru

// prompt(title,messageDefault) -> thu thập dữ liệu người dùng
const name = prompt("Please enter your name", "John");
alert(name);

// console() -> in ra nội dung ở tab console
console.log("Please...");
console.warn("Warning...");
console.error("Error...");
console.info("Info...");

// setTimeout(function(){},time) -> chạy 1 lần duy nhất sau 1 khoảng thời gian chỉ định
setTimeout(function () {
  console.log("Setting...");
}, 5000);

// setInterval(function(){},time) -> chạy nhiều lần theo thời gian chỉ định
setInterval(function () {
  console.log("Interval...");
}, 2000);
