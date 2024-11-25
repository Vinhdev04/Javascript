// Rest parameters
const sum = (a, b, ...res) => {
  console.log(res); // [30,40,50,60]
  return a + b; // 10 + 20 = 30
};
console.log(sum(10, 20, 30, 40, 50, 60));
console.log();

function getSum(...res) {
  return res.reduce((acc, val) => acc + val, 0);
}
const result = getSum(10, 20, 30, 40, 50, 60);
console.log(result);
