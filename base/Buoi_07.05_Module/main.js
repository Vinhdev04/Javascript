// main.js
import { sum } from "./sum.js"; // Đừng quên thêm .js vào đường dẫn
//import { sumX, add, subtract, divide } from "./Calculator.js";
// C2: rename import
import {
  getSum as sumX,
  getAdd as add,
  getSubtract as subtract,
  getDivide as divide,
} from "./Calculator.js";

let a = 10;
let b = 20;
let c = sum(a, b);
console.log(c); // In ra 30
console.log();

console.log(sumX(a, b));
console.log(add(a, b));
console.log(subtract(a, b));
console.log(divide(a, b));
