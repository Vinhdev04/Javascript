// Operators Assignments
let a = 20;
let b = 10;
b += a; // b = b + a = 10 + 20
b -= a; // b = b - a = 10
b *= a; // b = b * a = 200
b /= a; // b = b / a = 2
b %= a; // b = b % a = 10
console.log(b);

// Operators Comparison
let c = 10;
let d = 20;
console.log("c > d: ", c > d); // false
console.log("c < d: ", c < d); // true
console.log("c >= d: ", c >= d); // false
console.log("c <= d: ", c <= d); // true

let g = 101;
let h = 111;
let k = "111";
if (k === h) {
  console.log("True...");
} else {
  console.log("False..."); // 111 !+ "111" -> false
}
console.log(h == k); // 111 = "111" -> true

// Operator Logical
let m = 100;
let n = 100;
if (m != n && m > n) {
  console.log("m nho hon m va khac m...");
} else {
  console.log("m = n");
}

let isChecked = true;
let isCheck = false;
console.log(isChecked);
console.log(!isChecked);
