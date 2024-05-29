// Làm việc với String

// Length
var isName = "Vinh";
console.log(isName.length);

// Find index -> Start = 0
console.log(isName.indexOf("n")); // 2
var isName1 = "vinhhhhhh";
console.log(isName.indexOf("h")); // 3

var isName2 = "Js is number one Js my love Js";
console.log(isName2.indexOf("Js", 14)); // 17
console.log(isName2.lastIndexOf("Js")); // 28

// search -> hỗ trợ tìm kiếm biểu thức chính quy và ko hỗ trợ tìm theo tham số index như hàm indexOf
console.log(isName2.search("Js")); // 28

// Cut string -> slice(start, end)
console.log(isName.slice(0, 2)); // vi
console.log(isName2.slice(2)); // is number one Js my love Js

// Replace(string,string_replace)
console.log(isName.replace("Vinh", "Nam"));

// Convert to uppercase
var upperC = "phạm công vinh";
console.log(upperC.toUpperCase()); // PHẠM CÔNG VINH

// Convert to Lowercase

var lowerC = "PHẠM CÔNG VINH";
console.log(lowerC.toLowerCase()); // phạm công vinh

// Trim -> xóa khoảng trắng ở 2 đầu chuỗi
var isTrim = "   ABC XYZ  ";
console.log(isTrim.length);
console.log(isTrim.trim());

// Split -> cắt chuỗi thành 1 arrays dựa vào điểm chung
var isLanguage = "PHP,JS,HTML,CSS,PYTHON";
console.log(isLanguage.split(","));

var language = "javascript";
console.log(language.split(""));

// Get a character by index
var charIndex = "languages";
console.log(charIndex.charAt(0));
