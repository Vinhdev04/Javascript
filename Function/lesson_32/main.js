// Xet bai toan tinh tong a,b:

let a = 5;
let b = 9;
let sum = a + b;
console.log(sum);

// dung function
function getSum() {
  return a + b;
}
console.log(getSum(5, 9));

// dung function(parameter)
function getSumX() {
  let x = 10;
  let y = 5;
  return x + y;
}
console.log(getSumX());

// dung function(parameter)

let nameX = prompt("Enter your name: ");
function printHellloX(name) {
  console.log(`Hello, ${name}`);
}
console.log(printHellloX("Vinh"));
console.log(printHellloX(nameX));

function getDiv(x1, x2) {
  let resuilt = Number(x1 / x2);
  return resuilt;
}
alert(getDiv(20, 10));

// ----------------------------- Function Declarations ----------------------------- //
// Function declarations
function getValue(number1, number2) {
  return number1 * number2;
}
console.log(getValue(10, 10));

// ----------------------------- Function Expression ----------------------------- //
// Function Expression
let thuong = function (numberX, numberY) {
  return numberX / numberY;
};
console.log(thuong(10, 10));

// ----------------------------- Arrows Function ----------------------------- //
// Arrows Function đơn giản:
let mul = (numA, numB) => numA * numB;
console.log(mul(10, 10));

// Arrows Function phức tạp:
let mul2 = (numA, numB) => {
  let kq1 = numA + numB; // 15
  let kq2 = numA - numB; // 5
  let kq3 = numA * numB; // 50
  return kq1 * kq2 + kq3; // 125
};
console.log(mul2(10, 5));

// ----------------------------- Gọi hàm trong hàm ----------------------------- //
// Functions Calling Other Functions
function tinhTong(a1, b1) {
  return a1 + b1;
}

function tinhTich(a3, b3) {
  return a3 * b3;
}

function tinhTongTich(number_1, number_2, number_3) {
  let tong = tinhTong(number_1, number_2); // 2 + 3 = 5
  let tich = tinhTich(tong, number_2); // 5 * 3 = 15
  return tich; // 15
}
let resuilt = tinhTongTich(2, 3, 4);
console.log("Tổng tíchs: " + resuilt);

// ----------------------------- Hoisting ----------------------------- //
// 1. var
// var var_X;
// console.log(var_X); // undefined
// var_X = 9;

console.log(var_X); // undefined
var var_X = 9;

// Phạm vi sử dụng var -> function scope
// Cách 1: Thông thường
function exampleFunctionScope_01() {
  if (true) {
    var scope_01 = 20;
    console.log(scope_01); // có thể truy cập từ bên trong block
  }
  console.log(scope_01); // có thể truy cập từ bên ngoài block
}
exampleFunctionScope_01();

// Cách 2: Function scope -> Js nhận diện và triển khai lại code
function exampleFunctionScope_02() {
  var scope_02; // hoisting
  if (true) {
    scope_02 = 30;
    console.log(scope_02); // có thể truy cập từ bên trong block
  }
  console.log(scope_02); // có thể truy cập từ bên ngoài block
}
exampleFunctionScope_02();

// 2. let and const
console.log(myLet); // ReferenceError: myLet is not defined
let myLet = 3;

console.log(myConst); // ReferenceError: myConst is not defined
const myConst = 5;

// Phạm vi sử dụng let, const -> Block scope
function exampleFunctionScope_03() {
  if (true) {
    let b = 22;
    console.log(b); // có thể truy cập từ bên trong block
  }
  console.log(b); // ReferenceError: b is not defined
}
exampleFunctionScope_03();

// ----------------------------- Hoisting in Function ----------------------------- //
// Declaration function:
declarationsHoisting(); // có thể gọi hàm trước khi khai báo -> bình thường
function declarationsHoisting() {
  alert("Hoisting in declarations function");
}

// Expression function:
expressionHoisting(); // Error
let expressionHoisting = function () {
  alert("Hoisting in expression function");
};

// Arrows function:
arrowsHoisting(); // Error
let arrowsHoisting = () => {
  alert("Hoisting in Arrows function");
};
