// Date and Time in JavaScript:

// 1. Tạo đối tượng date:
let currentDate = new Date();
console.log(currentDate); // Output: current: The day - Month - Day - Year hours: minute : second GMT+0700(Múi giờ)
console.log(typeof currentDate); // Output: object

// Method:
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; //  0 < month < 11 => month + 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// console.log(` ${year} ${month} ${day} ${hours} ${minutes}`);
console.log(`Năm hiện tại: ${year}`);
console.log(`Tháng hiện tại: ${month}`);
console.log(`Ngày hiện tại: ${day}`);
console.log(`Giờ hiện tại: ${hours}`);
console.log(`Phút hiện tại: ${minutes}`);
console.log(`Giây hiện tại: ${seconds}`);

console.log(
  `Bây giờ là ${hours}:${minutes}:${seconds} Ngày ${day} - Tháng ${month} - Năm ${year}`
);

// Timestamp
const timeStamp = new Date(0);
console.log(timeStamp); // Output: Thu Jan 01 1970 08:00:00 GMT+0800 (Indochina Time)

const currentTime = new Date().getTime();
console.log("Thời gian hiện tại:" + currentTime); // Output: 1720799650940
