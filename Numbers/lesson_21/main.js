let x1 = 10;
console.log(typeof x1 + " " + x1); // number 10

let x2 = "10";
console.log(typeof x2 + " " + x2); // string 10

let x3 = 100;
let x4 = "Banana";
let resuilt = x3 / x4;
console.log(typeof resuilt + " " + resuilt); // number NaN

let x5 = 100 / "10";
console.log(typeof x5 + " " + x5); // number 10
console.log(isNaN(x5)); // false

let x6 = NaN;
console.log(typeof x6); // number

let x7 = Infinity;
console.log(typeof x7); // number

numberF = new Number(100);
numberS = new Number(100);
console.log(numberF == numberS); // false
console.log(numberF === numberS); // false
console.log(typeof numberF); // object

let x8 = 10;
let x10 = 10;
console.log(x8 == x10); // true
console.log(typeof x8); // number
console.log(x8 === x10); // true
