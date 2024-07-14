// JavaScript Get Date Methods
const d = new Date();
console.log(d);

// 1. getFullYear() -> return years
console.log(d.getFullYear()); // Output: 2024

// 2. getMonth() -> return months (0-11)
console.log(d.getMonth()); // Output: June = 6
console.log(d.getMonth() + 1); // Output: July = 7

// 3. getDate() -> return days (1-31)
console.log(d.getDate()); // Output: 14

// 4. getHours() -> return hours
console.log(d.getHours()); // Output: 16h

// 5. getMinutes() -> return minutes
console.log(d.getMinutes()); // Output: 16h:24p

// 6. getSeconds() -> return seconds
console.log(d.getSeconds()); // Output: 16h:24p:20s

// 7. getMilliseconds() -> return milliseconds
console.log(d.getMilliseconds()); // Output: 341s

// 8. getDay() -> return day (0-6): start: Sunday
console.log(d.getDay()); //  Output: 0 = Sunday

// 9. getTime() -> return time the number of milliseconds since January 1, 1970
console.log(d.getTime()); // Output: 1720949322408 miliseconds

// 10. Date.now() -> return day the number of milliseconds since January 1, 1970
let ms = Date.now();
console.log(ms); // Output: 1720949415766

// 11 . getTimezoneOffset() -> return difference (in minutes) between local time an UTC time
let diff = d.getTimezoneOffset();
console.log(diff); // Output: -420
