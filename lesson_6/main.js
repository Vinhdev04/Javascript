// So sánh toán tử "==" và "==="

let a = 3;
let b = 3;
let c = "3";
let d = '3';

console.log(a == b); // true
console.log(b == c); // true
console.log(a == c); // true
console.log(a === b); // true
console.log(a === c); // false
console.log(b === c); // false

console.log(c==d);
console.log(c===d);

// So sánh toán tử "!=" và "!=="

console.log(a != b); // false
console.log(a != c); // false
console.log(a !== b); // false
console.log(a !== c); // true

console.log(c != d); // false
console.log(c !== d); // false
