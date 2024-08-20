// reduce() -> Sử dụng reduce() khi muốn nhận về 1 giá trị duy nhất sau khi tính toán

let member = [
  {
    id: 1,
    name: "banana",
    coin: 100,
  },
  {
    id: 2,
    name: "apple",
    coin: 150,
  },
  {
    id: 3,
    name: "orange",
    coin: 200,
  },
  {
    id: 4,
    name: "grape",
    coin: 50,
  },
];

var i = 0;
var result = member.reduce((acc, currentValue, currentIndex, array) => {
  i++;
  console.table({
    "index: ": i,
    "accumulator: ": acc,
    "currentValue: ": currentValue.coin,
    "Result: ": acc + currentValue.coin,
  });
  return acc + currentValue.coin;
}, 0);
console.log(result);
