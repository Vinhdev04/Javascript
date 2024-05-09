// Hàm Number(value) -> chuyển value -> số, nếu ko chuyển được trả về NaN
var str = "123";
console.log(typeof str); // string
var num = Number(str);
console.log(num); // 123
console.log(typeof num); // number

var invalidStr = "abc";
var invalidNum = Number(invalidStr);
console.log(typeof invalidNum);
console.log(invalidNum); // NaN -> Not a Number

// Hàm isNaN(value) -> kiểm tra xem giá trị (hoặc biểu thức) truyền vào:
// Kiểm tra value ko phải định dạng  số: NaN (Not a Number),
// Hoặc không thể chuyển sang định dang số:
// + Step 1: Cố gắng chuyển đổi về kiểu number
// + Step 2: -> trả về true, nếu giá trị sau chuyển đổi ko phải là kiểu số (number)
// -> trả về false, nếu giá trị sau chuyển đổi là kiểu số (number).

let a = 123;
console.log(isNaN(a)); // false
let b = "123";
console.log(isNaN(b)); // false

let c = "321ab";
console.log(isNaN(c)); // true


console.log(isNaN("abc")); // true
console.log(isNaN("123")); // false
console.log(isNaN(123)); // false
console.log(isNaN("NaN")); // true
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN("ablablaa")); // true
console.log(isNaN(true)); //false
console.log(isNaN(null)) // false
console.log(isNaN(" ")) // false
console.log(isNaN("")) // false



// Hàm Number.isNaN -> được giới thiệu trong ECMAScript 2015 (ES6)
// -> chỉ trả về true nếu value hoặc biểu thứ truyền vào có giá trị NaN
console.log(Number.isNaN(NaN)); // true
console.log("abc" / "bcd"); // NaN
console.log(Number.isNaN("abc" / "bcd")); // true
console.log(Number.isNaN(0 / 0)); // true
console.log(Number.isNaN({})); // false
