// hoisting -> sử dụng 1 biến xong sau đó mới cần khai báo biến đó
// -> JavaScript tự động di chuyển toàn bộ các khai báo lên đầu chương trình
// -> những dòng code có sử dụng biến mà chưa khai báo sẻ không bị lỗi

//console.log(a); // undefined
// let a;

let x;
console.log(x); // undefined
x = 10;

// const b;
// console.log(b); //  Missing initializer in const declaration
// b = 120;

// --------------- function Hoisting ---------------
let a1 = 10;
let b1 = 20;
let c1 = sum(a1, b1);
console.log(c1); // 30

// 1. Declaration function -> hoisting
// function sum(x1, y1) {
//   return x1 + y1; // 30
// }

// 2. Expression function -> not hoisting
var sum = function (x, y) {
  return x + y; // sum is not a function
};

// 3. Arrow function
var sum = (x, y) => {
  return x + y; // sum is a function -> not hoisting
};
