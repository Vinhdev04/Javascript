// Định dạng và xuất dữ liêu ngày tháng năm:

// 1. toLocalDateString():
const myDate = new Date();
myDate.setFullYear(2024);
myDate.setMonth(0);
myDate.setDate(4);
console.log(myDate.toLocaleDateString()); // Output: 1/4/2024

// 2. Xuất theo mong muốn:
console.log(
  `Ngày ${myDate.getDay()}/Tháng ${
    myDate.getMonth() + 1
  }/Năm ${myDate.getFullYear()}`
);

// Thêm số 0 vào trước ngày tháng năm: 01,02,...
let preDate = myDate.getDate() < 10 ? "0" : "";
let preMonth = myDate.getMonth() < 10 ? "0" : "";
console.log(
  `Ngày ${preDate}${myDate.getDate()}/Tháng ${preMonth}${
    myDate.getMonth() + 1
  }/Năm ${myDate.getFullYear()}`
);
