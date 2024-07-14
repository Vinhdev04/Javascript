// JavaScript Date Formats:
// 1. ISO 8601: (YYYY-MM-DD)
const d = new Date("2025-03-25");
console.log(d); // Output: 2025 03 25

const d1 = new Date("2025-01");
console.log(d1); // Output: 2025 01

const d2 = new Date("2025");
console.log(d2); // Output: 2025

// 2.  (YYYY-MM-DDTHH:MM:SSZ): Date and time is separated with a capital T.UTC time is defined with a capital letter Z.
const d3 = new Date("2015-03-25T12:00:00Z");
console.log(d3); // Output: 2015-03-25

const d4 = new Date("2015-03-25T12:00:00-06:30");
console.log(d4); // Output: 2015-03-25

// 3.  "MM/DD/YYYY":
const d5 = new Date("03/03/2024");
console.log(d5); // Output:

// 4. "MMM DD YYYY"
const d6 = new Date("March 1, 2015");
const d7 = new Date("01,March, 2015");
const d8 = new Date("2015,01,March");
console.log(d6); // Output: 2015-03-01
console.log(d7); // Output: 2015-03-01
console.log(d8); // Output: 2015-03-01

// 5. Check Date :
let msec = Date.parse("2015, March,01");
console.log(msec); // Output: 1425142800000 = 1015-03-01 (miliseconds)
const d9 = new Date(msec);
console.log(d9); // Output: 2015- 03-01
