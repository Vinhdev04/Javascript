var course = [
  {
    id: 1,
    name: "Vinh",
    coin: 100,
  },
  {
    id: 1,
    name: "An",
    coin: 200,
  },
  {
    id: 3,
    name: "Halen",
    coin: 300,
  },
  {
    id: 4,
    name: "Luka",
    coin: 400,
  },
  {
    id: 5,
    name: "Lu",
    coin: 500,
  },
];

// Tính tổng coin
// Cách 1:

let sumCoint = 0;
for (element of course) {
  sumCoint += element.coin;
}
console.log(sumCoint); // Output: 1500

// Cách 2: reduce()
let sumCoinX = course.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.coin;
}, 0);
console.log(sumCoinX); // Output: 1500
