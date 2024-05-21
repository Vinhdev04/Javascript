/*  Ternary operator(Toán tử 3 ngôi) : 
  condition_1 ? condition_2 : condition_3
*/

let numA = Number(prompt("Enter a number: "));
let resuilt = numA % 2 === 0 ? "chẵn" : "lẻ";
console.log(resuilt);

let resuilt_2 = numA >= 0 ? "số dương" : "số âm";
console.log(resuilt_2);

// Practice

let pointTB = Number(prompt("Enter a point: "));
let resuiltTB =
  pointTB >= 8
    ? "Giỏi"
    : pointTB >= 6.5
    ? "Khá"
    : pointTB >= 5
    ? "Trung bình"
    : "Yếu";
console.log(resuiltTB);

// Practice
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage);
