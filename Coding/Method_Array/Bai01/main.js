// // Bai 01: Reduce()

// let myCourses = [
//   {
//     id: 1,
//     name: "html",
//     coin: 100,
//   },
//   {
//     id: 2,
//     name: "css",
//     coin: 200,
//   },
//   {
//     id: 3,
//     name: "react",
//     coin: 300,
//   },
//   {
//     id: 4,
//     name: "php",
//     coin: 500,
//   },
// ];

// let i = 0;
// let getCoins = myCourses.reduce((acc, course) => {
//   i++;
//   console.table({
//     INDEX: i,
//     Accumulator: acc,
//     currentValue: course.coin,
//     Resuilt: acc + course.coin,
//   });
//   return acc + course.coin;
// }, 0);
// console.log(`My coin is: ${getCoins}`);

var sports = [
  {
    name: "Bơi lội",
    gold: 11,
  },
  {
    name: "Boxing",
    gold: 3,
  },
  {
    name: "Đạp xe",
    gold: 4,
  },
  {
    name: "Đấu kiếm",
    gold: 5,
  },
];

function getTotalGold(array) {
  return array.reduce((total, current) => {
    return total + current.gold;
  }, 0);
}

// Expected results:
console.log(getTotalGold(sports)); // Output: 23
