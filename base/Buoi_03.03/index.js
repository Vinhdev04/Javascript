// Variable: let, var, const

// 1. let -> phạm vi là block scope -> tối tưu cho trường hợp cần khai báo 1 biến chỉ sử dụng tạm thời trong phạm vi nhất định, vẫn có thể gán lại giá trị
if (true) {
  let a = 10;
  console.log(a); // có thể truy cập từ bên trong block
}
// console.log(a); // -> a is not defined

// 2. var -> phạm vi là function scope -> dùng được bên ngoài,vẫn có thể gán lại giá trị
if (true) {
  var b = 10;
  console.log(b); // có thể truy cập từ bên trong block
}
console.log(b); // b -> có thể truy xuất

// 3. const -> phạm vi là block scope -> dùng để khai báo giá trị , giữ nguyên giá trị đó (không thể thay đổi sau khi khai báo)
const x = 10;
x = 50;
console.log(x); // Assignment to constant variable
