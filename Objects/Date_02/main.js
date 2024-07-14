// Xử lý ngày tháng trong JavaScript, Date Set Methods , định dạng và hiển thị ngày tháng trong JS:

// Set thời gian: new Date(year,month,day,hour,minute,second,milliseconds)
const myDate = new Date(2024, 0, 4); // year month+1 day
console.log(myDate.toLocaleDateString()); // Output: 1/4/2024`
console.log(myDate); // Output: Thu Jan 04 2024 00:00:00 GMT+0700 (Indochina Time)

// new Date(dataString):
const myDate2 = new Date("2024-01-04T12:30:00");
console.log(myDate2.toLocaleDateString()); // Output: 1/4/2024
console.log(myDate2); // Output:  Thu Jan 04 2024 12:30:00 GMT+0700 (Indochina Time)

// setFullYear(),setMonth(),...
let myDate3 = new Date();
myDate3.setFullYear(2019);
myDate3.setMonth(0);
myDate3.setDate(27);

console.log(myDate3); // Output: Sun Jan 27 2019 23:11:05 GMT+0700 (Indochina Time)

const d = new Date(2024, 0, 27, 20, 30, 0);
console.log(d);

// Truyền vào số ngày vượt quá chuẩn -> số ngày dữ liệu  dữ ra sẻ được đẩy sang tháng tiếp theo => bằng cách đẩy ngày sang tháng tiếp theo
const dateX = new Date(2018, 5, 35, 10, 33, 30);
console.log(dateX);

const dateY = new Date(2018, 6, 5, 10, 33, 30);
console.log(dateY);

const dateZ = new Date(2024, 0, 34, 10, 10, 10); // 34 / 1 / 2024 10:10:10 => 34 - 31 = 3 days
console.log(dateZ); // Output: 03 / 2 / 2024 10:10:10

const dateL = new Date(2024, 1, 3, 10, 10, 10); // 3 / 2 / 2024  10:10:10
console.log(dateL);

// 1. Truyền (year, month, day, hour, minute, second)
const fullData = new Date(2025, 0, 4, 20, 20, 20);
console.log(fullData); // Output: 1 / 4 / 2025 20:20:20

// 2. Truyền (year, month, day, hour, minute)
const fiveData = new Date(2025, 0, 4, 20, 20);
console.log(fiveData); // Output: 1 / 4 / 2025 20:20:00

// 3. Truyền (year, month, day, hour)
const fourData = new Date(2025, 0, 4, 20);
console.log(fourData); // Output: 1 / 4 / 2025 20:00:00

// 3. Truyền (year, month, day)
const threeData = new Date(2025, 0, 4);
console.log(threeData); // Output: 1 / 4 / 2025 00:00:00

// 3. Truyền (year, month)
const twoData = new Date(2025, 0);
console.log(twoData); // Output: 1 / 2025 00:00:00

// 4. Bạn không thể bỏ qua tháng. Nếu bạn chỉ cung cấp một tham số thì tham số đó sẽ được coi là mili giây.
const oneData = new Date(2025);
console.log(oneData); // Output: 01 1970 08:00:02

// 5. Năm có một và hai chữ số sẽ được hiểu là 19xx:
const yearX = new Date(88, 11, 24);
console.log(yearX); // Output: 24 / 12 / 1988

// 01 -> 07 , 08 trở lên cần "" hoặc ''
const yearY = new Date("08", 11, 24);
console.log(yearY); // Output: 24 / 12 / 1908
