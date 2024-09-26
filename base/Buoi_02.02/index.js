// Làm việc với Number

// 1. isNaN -> kiểm tra 1 biến có phải là NaN không (Not a Number)
let a = 10; // number
let b = "01234567a"; // string
let result = a / b;
console.log(result); // NaN
console.log(isNaN(result)); // true

// 2. toString() -> chuyển kiểu số -> string
let c = 10;
let d = c.toString();
console.log(c); // 10
console.log(typeof c); // number
console.log(d); // 10
console.log(typeof d); // string

// 3. toFixed(digits) -> làm tròn số thập phân ( nếu số ngay sau >= 5 -> làm tròn lên, < 5 -> làm tròn xuống)
let a1 = 12.3456;
console.log(a1.toFixed()); // 12
console.log(a1.toFixed(1)); // 12.3
console.log(a1.toFixed(2)); // 12.35
console.log(a1.toFixed(3)); // 12.346
