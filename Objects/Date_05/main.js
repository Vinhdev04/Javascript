// JavaScript Set Date Methods:
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(days);
// Output:
const d = new Date("04-01-2004");
let day = days[d.getDay()];
console.log(`Today is ${day}`);

const d1 = new Date();
console.log("To day is " + days[d1.getDay()]);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d2 = new Date();
let month = months[d2.getMonth()];
console.log("Today is " + months[d2.getMonth()]);

// Set ngày tháng theo ý muốn
// 1. new Date(year,indexMonth,day,....)
let myDate1 = new Date(2024, 1, 14);
console.log(myDate1);
console.log(myDate1.toLocaleDateString()); // Output: 2/14/2014

// 2. new Date(dataString)
let myDate2 = new Date("2024-02-15T12:30:45"); // "T" dùng để phân cách ngày giờ
console.log(myDate2); // Output: 2/15/2024 12:30:45
console.log(myDate2.toLocaleDateString()); // Output: 2/15/2024

// 3. setFullYear(), setMonth(),...
let myDate3 = new Date();
console.log("--------------------------------");
console.log("Trước khi thay đổi: ");
console.log(myDate3);
console.log("--------------------------------");
myDate3.setFullYear(2025);
myDate3.setMonth(1);
myDate3.setDate(14);
myDate3.setHours(16);
myDate3.setMinutes(30);
myDate3.setSeconds(0);
console.log("Sau khi thay đổi: ");
console.log(myDate3); // Output: 2/16/2025T16:30:00
console.log("--------------------------------");
