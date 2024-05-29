// String in Js

// cách 1:
var fullNameX = "Pham Công Vinh";

// cách 2:
var fullNameY = new String("fullName");

// Nên ưu tiên cách 1 để có kiểu dữ liệu hợp lý khi muốn
console.log(typeof fullNameX); // string
console.log(typeof fullNameY); // objects

// Blackslash:
var isName = "Phạm Công Vinh";
console.log(isName);

var isName1 = "Phạm Công Vinh 'Là Superman'";
console.log(isName1);

var isName2 = "Phạm Công Vinh \\Là Superman\\";
console.log(isName2);

//  Xem độ dài chuỗi:

var isName3 = "Phạm Công Vinh";
console.log("Độ dài chuỗi: ", isName3.length);

// Lưu ý độ dài khi code -> xuống dòng  hoặc dùng nối chuỗi con

// Temaplate ES6
var nameX = "Phạm";
var nameY = "Vinh";
console.log("Tên tôi là: " + nameX + " " + nameY);

console.log(`Tên tôi la: ${nameX}  ${nameY}`);
