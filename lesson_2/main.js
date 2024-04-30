// ------------------------------------------------------ //
// Kiểu Number:
let soNguyen = 20;
let soThuc = 3.14;

console.log(soNguyen + " DataType: " + typeof soNguyen);
console.log(soThuc + " DataType: " + typeof soThuc);

console.log("Số nguyên an toàn tối đa: " + " " + Number.MAX_SAFE_INTEGER);
console.log("Số nguyên an toàn tối thiểu: " + " " + Number.MIN_SAFE_INTEGER);

// ------------------------------------------------------ //
// Kiểu String:

let mySt1 = `abc`;
let mySt2 = "123";
let mySt3 = "x0x";

console.log(mySt1 + " DataType: " + typeof mySt1);
console.log(mySt2 + " DataType: " + typeof mySt2);
console.log(mySt3 + " DataType: " + typeof mySt3);

// ------------------------------------------------------ //
// Kiểu Boolean:

let isChecked = true;
console.log(isChecked + " DataType: " + typeof isChecked);

// ------------------------------------------------------ //
// Kiểu Undefined:

let isUndefined;
console.log(isUndefined + " DataType: " + typeof isUndefined);

// ------------------------------------------------------ //
// Kiểu Null:

let isNull = null;
console.log(isNull + " DataType: " + typeof isNull);

// ------------------------------------------------------ //

// BigInt
// const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
// x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// // Number
// Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992

// ------------------------------------------------------ //

// xuất dữ liệu với console:

let soA = 25;
let soB = 5;

// Cách 1:
console.log("Căn bậc 2 của a: " + soB);

// Cách 2:
console.log("Căn bậc 2 của số a:", soB);

// Cách 3:
console.log(`Căn bậc 2 của  số ${soA} là số: ${soB}`);

// Cách 4:
console.log(`Căn bậc 2 của %s là: %s`, soA, soB);

// ------------------------------------------------------ //
// Vận dụng:

let a = 4,
  b = 3,
  kq = a * b;

console.log("Kết quả " + a + " * " + b + " : " + kq);
console.log("Kết quả " + a + " * " + b + " : ", kq);
console.log(`Kết quả ${a} * ${b} : ${kq}`);
console.log(`Kết quả %s * %s: %s`, a, b, kq);

// ------------------------------------------------------ //
