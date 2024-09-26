// Làm việc với String

// 1. Length -> lấy ra độ dài chuổi bao gồm khoảng trắng
let myName = "Vinh Pham";
console.log(`lenght: ${myName.length}`); // 9

// 2. IndexOf(searchValue,start) -> Tìm vị trí đầu tiên của 1 chuỗi nằm trong 1 chuỗi -> ko tìm thấy : return -1

let myString = "Xin chào, Tôi tên là Vinh, Tôi đến từ Hà Tĩnh";
console.log(`Vị trí index cần tìm nằm ở: ${myString.indexOf("Tôi")}`); // 10
console.log(`Vị trí index cần tìm nằm ở: ${myString.indexOf("Hà Nội")}`); // -1
console.log(`Vị trí index cần tìm nằm ở: ${myString.indexOf("Tôi", 11)}`); // 27

// 3. LastIndexOf(searchValue, start) -> Tìm vị trí cuối cùng của 1 chuỗi nằm trong 1 chuỗi
let myStr = "Xin chào, Tôi tên là Vinh, Tôi đến từ Hà Tĩnh";
console.log(
  `Vị trí index cuối cùng cần tìm nằm ở: ${myStr.lastIndexOf("Tôi")}`
); // 27

// 4. slice(start, end-1) -> cắt 1 chuỗi và trả về chuỗi mới -> không thay đổi chuỗi ban đầu
let myStr01 = "Xin chào Việt Nam";
console.log(myStr01);
console.log(myStr01.slice(8)); // Việt Nam
console.log(myStr01.slice(8, 13)); // Việt
console.log(myStr01.slice(0, 1)); // X
console.log(myStr01.slice(-1)); // m
console.log(myStr01); // Xin chào Việt Nam

// 5. Replace(searchValue,newValue) -> thay thế 1 chuỗi bầng 1 chuỗi mới dầu tiên mà nó tìm thấy
let myStr02 = "tôi học C#,tôi là C#,tôi yêu C#,love it...";
console.log(myStr02.replace("học", "code"));
// Regular Expression
console.log(myStr02.replace(/tôi/g, "code")); // g -> global

// 6. concat(searchValue,newValue) -> nối 2 chuỗi với nhau
let myStr03 = "Tôi là";
let myStr04 = "FrontEnd";
let myStr05 = myStr03 + " ".concat(myStr04);
console.log(myStr05);

// 7. toUpperCase, toLowerCase
console.log(myStr05.toLowerCase());
console.log(myStr05.toUpperCase());

// 8. trim() -> loại bỏ khoảng trắng 2 đầu chuỗi
let myStr06 = "  Hi, tạm biệt   bạn     ";
console.log(myStr06.trim());

// 9. charAt(index) -> lấy kí tự thông qua index
let myStr07 = "Phạm Công Vinh";
console.log(myStr07.charAt(5)); // C
console.log(myStr07.charAt()); // P
console.log(myStr07.charAt(0)); // P
console.log(myStr07.charAt(myStr07.length - 1)); // h

// 10. split() -> chuyển chuỗi -> array (với điều kiện tìm ra điểm chung của chuỗi)
let myStr08 = "HTML,CSS,JS";
console.log(myStr08.split()); // [ 'HTML,CSS,JS' ]
console.log(myStr08.split("")); // [  'H', 'T', 'M', 'L',...]
console.log(myStr08.split(",")); // [ 'HTML', 'CSS', 'JS' ]
console.log(myStr08.split(",", 2)); // [ 'HTML', 'CSS' ]
