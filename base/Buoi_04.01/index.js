// Functions: Declaration function, Expressions function, Arrow function

//1. Declaration function: -> có tính hoisting (có thể gọi hàm trước khi khao báo)
getDec();
function getDec() {
  console.log("Declaration function...");
}
getDec();

// hoisting
let result = getSum(1, 2, 3, 4, 5);
console.log(result);
function getSum() {
  let sum = 0;
  for (const element of arguments) {
    sum += element;
  }
  return sum;
}
// let result = getSum(1, 2, 3, 4, 5);
// console.log(result);

//2. Expression function: -> không có tính hoisting (không thể gọi hàm trước khi khai báo)

// let kq = getSub(1, 2, 3, 4, 5); //-> Not hoisting
// console.log(kq);
var getSub = function () {
  let sub = 0;
  for (const element of arguments) {
    sub += element;
  }
  return sub;
};
let kq = getSub(1, 2, 3, 4, 5);
console.log(kq);

//3. Arrow function: -> nhanh hơn function thông thường và không có tính hoisting (không thể gọi hàm trước khi khai báo), không có arguments thay vào đó là spread

// let kq1 = getSumX(1, 2); // -> not  hoisting
// console.log(kq1);
var getSumX = (a, b) => {
  return a + b;
};
let kq1 = getSumX(1, 2);
console.log(kq1);

// Arrow function ko có arguments thay vào đó dùng spread (...)
var getSums = (...number) => {
  console.log(number);

  let sum = 0;
  for (element of number) {
    sum += element;
  }
  return sum;
};
let kq2 = getSums(1, 2, 3, 4, 5); // arguments not defined
console.log(kq2);
