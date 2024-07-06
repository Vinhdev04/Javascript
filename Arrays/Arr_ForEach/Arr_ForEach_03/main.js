let courses = [
  {
    id: 1,
    name: "Js",
    coin: 100,
  },
  {
    d: 2,
    name: "html,css",
    coin: 200,
  },
  {
    id: 3,
    name: "React",
    coin: 300,
  },
  {
    id: 4,
    name: "Vue",
    coin: 400,
  },
  {
    id: 5,
    name: "Angular",
    coin: 500,
  },
];

// Xét bài toán :    tính tổng coin

// Cách 1: For loop
let totalCoin = 0;
for (let course of courses) {
  totalCoin += course.coin;
}
console.log(totalCoin); // Output: 1500

// Cách 2: Array.prototype.reduce()
let totalCoinX = courses.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.coin;
}, 0);
console.log(totalCoinX); // Output: 1500

// Cách 3: forEach()
let totalCoinY = 0;
let result = courses.forEach((item) => {
  totalCoinY += item.coin;
});
console.log(totalCoinY); // Output: 1500

// Cách 4: Filter() -> ko đúng, ko dùng để tính tổng
let totalCoinZ = 0;
let resultX = courses.filter((item) => {
  totalCoinZ += item.coin;
}, 0);
console.log(totalCoinZ); // Output: 1500

// In ra bảng cấu trúc hoạt động cảu reduce()
let i = 0;
let total = courses.reduce((accumulator, currentValue, currentIndex, array) => {
  i++;
  let Value = accumulator + currentValue.coin;
  console.table({
    "Lượt chạy": i,
    "Gía trị tích lũy": accumulator,
    "Gía trị trị coin": currentValue.coin,
    "Tổng coin": Value,
  });
  return Value;
}, 0);

console.log(total);
