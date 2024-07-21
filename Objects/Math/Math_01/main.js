// Math Objects -> Is not a constructor

// 1 Math.PI
console.log(Math.PI);

// 2 Math.round()
console.log(Math.round(Math.PI)); // Output: 3
console.log(Math.round(3.44444444444444444444449)); // Output: 3
console.log(Math.round(3.5)); // Output: 4
console.log(Math.round(3.5666666)); // Output: 4
console.log(Math.round(3.8)); // Output: 4

// 3 Math.floor()
console.log(Math.floor(Math.PI)); // Output: 3
console.log(Math.floor(3, 9999999)); // Output: 3
console.log(Math.floor(3, 7)); // Output: 3

// 4 Math.ceil()
console.log(Math.ceil(Math.PI)); // Output: 4
console.log(Math.ceil(2.111111)); // Output: 3
console.log(Math.ceil(2.5555)); // Output: 3

// 5 Math.abs()
console.log(Math.abs(3)); // Output: 3
console.log(Math.abs(-3)); // Output: 3

// 6 Math.pow()
console.log(Math.pow(2, 3)); // Output: 2^3 = 8
console.log(Math.pow(2)); // Output: NaN

// 7 Math.sqrt()
console.log(Math.sqrt(4)); // Output: 2
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.sqrt(4.2)); // Output: 2.0493

// 8 Math.min()
console.log(Math.min(-2, 0, 1, -20, 1000, 99)); // Output: -20

// 9 Math.max()
console.log(Math.max(-2, 0, 1, 100, 20, 99)); // Output: 100

// 10 Math.random()
console.log(Math.random()); // 0 < x < 1
console.log(Math.random() * 5);

var random = Math.floor(Math.random() * 11);

var courses = [
  "10đ",
  "9đ",
  "8đ",
  "7đ",
  "6đ",
  "5đ",
  "4đ",
  "3đ",
  "2đ",
  "1đ",
  "0",
];
console.log(courses[random]);

function myPresent(username, itemA, itemB, itemC) {
  var randomX = Math.floor(Math.random() * 100);
  var resuilt;
  if (randomX < 10) {
    resuilt = `${username} nhận được ${itemA}`;
  } else if (randomX > 10 && randomX < 50) {
    resuilt = `${username} nhận được ${itemB}`;
  } else if (randomX < 50 && randomX < 100) {
    resuilt = `${username} nhận được ${itemC}`;
  } else {
    resuilt = `goodluck !`;
  }
  return resuilt;
}

console.log(myPresent("Alex", "Tablet", "Laptop", "PC"));

// Math.sin()
function getCircle(radian, radius) {
  return Math.sin(radian) * radius;
}

console.log(getCircle(1, 10)); // Output: 8.414709

// Math.cos()
function getX(x, y) {
  return Math.cos(x) * y;
}
console.log(getX(1, 10)); // Output: 5.403023058681398

// Math.exp() -> e^x
console.log(Math.exp(0)); // Output: 1
console.log(Math.exp(1)); // Output: e = 2.7
console.log(Math.exp(-1)); // Output: e = 0.3678

// Math.sign()
console.log(Math.sign(3));
// Expected output: 1

console.log(Math.sign(-3));
// Expected output: -1

console.log(Math.sign(0));
// Expected output: 0

console.log(Math.sign(-0));
// Expected output: -0

console.log(Math.sign("-3"));
// Expected output: -1

// Math.trunc()
console.log(Math.trunc(3.11111)); //  Output: 3
console.log(Math.trunc(3.9999)); //  Output: 3

// Math.log()
console.log(Math.log(0)); // Output: Infinity
console.log(Math.log(1)); // Output: 0
console.log(Math.log(2)); // Output: 0,6...

// Math.log10()
console.log(Math.log10(1000)); // Output: 3
console.log(Math.log10(0)); // Output: infinity

// Math.log2()
console.log(Math.log2(1000)); // Output: 9.965
console.log(Math.log2(1)); // Output: 0
