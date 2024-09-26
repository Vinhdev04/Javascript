// var button = document.querySelector("button");
// button.onclick = function () {
//   alert("Hello!...");
// };

// Variable
let x = 10;
let y = 20;
let c = x + y;
console.log(c);

let myObj = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(myObj);

var a = 1;
var b = 2;
var d = a + b;
console.log(d);

var $fullName = "Cristiano Ronaldo";
console.log("Hello " + $fullName);

// Operators
let x1 = 10;
let x2 = "11";
let y1 = 20;
let sum1 = x1 + y1;
let sum2 = x1 + x2;
let sub1 = x1 - y1;
let sub2 = x2 - y1;
let mul = x1 * y1;
let div = x1 / y1;
let per = x1 % y1;
let l = x1 ** y1;

console.log("sum1: ", sum1);
console.log("sum2: ", sum2); // "+" vs string -> string
console.log("sub1: ", sub1);
console.log("sub2: ", sub2);
console.log("mul: ", mul);
console.log("div: ", div);
console.log("percent: ", per);
console.log("l:", l);

let a1 = 2;
let b1 = a1++;
console.log("a1++ ", b1); // 2
// a++ -> a1 = b1 = 2 -> b1 = 2 + 1

let a2 = 2;
let b2 = ++a2;
console.log("++a2 ", b2); // 3
// ++a -> a2 = a2 + 1 -> b2 = 3

let z = 1;
let d1 = z++ + ++z + z++ + z++ + ++z;
//     = 1   + 3   + 3   + 4   + 6 => 17
console.log(d1); // 17

let z2 = 10;
let d2 = z2++ + ++z2 + z2++ + z++ + ++z2;
//     = 10   + 12   + 12   + 13   + 15 => 62
console.log(d2); // 62

let g = 5;
let k = g-- - g++ + g--;
//    = 5 -  4    + 5 = 6
console.log(k);

let m = 10;
let n = --m + m-- - ++m + m-- - m++ + ++m;
//    =  9  + 9   - 9   + 9   - 8   + 10  = 20
console.log(n); // 20
