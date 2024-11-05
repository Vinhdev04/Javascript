// 1. Call back
function test1() {
  console.log("Testing 1...");
  test2();
}
test1(test2);

function test2() {
  console.log("Testing 2...");
}

// test1();
// test2();

// ----------- Example -----------
// function checkPositive(number) {
//   if (number >= 0) {
//     console.log("Number is positive");
//   } else {
//     console.log("Number is negative");
//   }
// }

// function checkNumber(num) {
//   if (num % 2 == 0) {
//     console.log("Number is even");
//   } else {
//     console.log("Number is odd");
//   }
// }

// callback
// function sum(a, b, check) {
//   let result = a + b;
//   console.log(result);

//   // checkPositive(result);
//   // checkNumber(result);

//   check(result);
// }
import { sum } from "./Modules/sum.js";
import { checkNumber } from "./Modules/checkNumber.js";
import { checkPositive } from "./Modules/checkPositive.js";
sum(10, 20, checkNumber);
sum(10, 21, checkPositive);
