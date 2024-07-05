// Bài tập vận dụng;
/* Viết chương trình nhập vào 1 mảng số nguyên (random) gồm n phần tử nhập từ bàn phím:
a. Xuất các giá trị trong mảng
b. Đảo ngược mảng, xuất kết quả
c. Sắp xếp mảng
d. Tính tổng mảng
e. Tìm các số chẵn và tính tổng 
f. Tìm các số lẻ và tính tổng 
g. Nhập 1 ký tự bất kì.Kiểm tra xem có trong mảng hay ko.Nếu có trả về vị trí và ko thì thoát chương trình */

// --------------------------------------------------------------------------------- //
function createArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100)); // random 0 -> 100
  }
  return arr;
}
let n = Number(prompt("Enter a random number: "));
let randomArr = createArray(n);

// a. Xuất các giá trị trong mảng
console.log(`========== Mảng ban đầu ==========`);
console.log(`${randomArr.join(", ")}`);

// b. Đảo ngược mảng, xuất kết quả
let reversedArr = randomArr.slice().reverse();
console.log(`========== Mảng sau khi đảo ngược ==========`);
console.log(`${reversedArr}`);

// c. Sắp xếp mảng
let sortedArr = [...randomArr].sort((a, b, arr) => a - b);
console.log(`========== Mảng sau khi sắp xếp tăng ==========`);
console.log(`${sortedArr}`);
console.log(`========== Mảng ban đầu ==========`);
console.log(`${randomArr.join(", ")}`);

let sortedArrs = [...randomArr].sort((a, b, arr) => b - a);
console.log(`========== Mảng sau khi sắp xếp giảm ==========`);
console.log(`${sortedArrs}`);
console.log(`========== Mảng ban đầu ==========`);
console.log(`${randomArr.join(", ")}`);

// d. Tính tổng mảng
function getSum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
console.log(`========== Tổng của mảng ==========`);
let resuilt = getSum(randomArr);
console.log(`Tổng: ${resuilt}`);

// e. Tìm các số chẵn và tính tổng
// dùng vòng lặp
let countEvenFirst = 0;
let sumEvenFirst = 0;
for (let i = 0; i < n; i++) {
  if (randomArr[i] % 2 === 0) {
    countEvenFirst++;
    sumEvenFirst += randomArr[i];
  }
}
console.log(`========== Mảng ban đầu ==========`);
console.log(`${randomArr.join(", ")}`);
console.log(`Các số chẵn trong mảng: ${countEvenFirst}`);
console.log(`Tổng các số chẵn: ${sumEvenFirst}`);

// Sử dụng Arrow function + reduce()
let { countEvenSecond, sumEvenSecond } = randomArr.reduce(
  (accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      accumulator.countEvenSecond++;
      accumulator.sumEvenSecond += currentValue;
    }
    return accumulator;
  },
  { countEvenSecond: 0, sumEvenSecond: 0 }
);

console.log(`Số lượng số chẵn: ${countEvenSecond}`);
console.log(`Tổng các số chẵn: ${sumEvenSecond}`);

// f. Tìm các số lẻ và tính tổng
let countOdd = 0;
let sumOdd = 0;
// dùng vòng lặp
for (let i = 0; i < n; i++) {
  if (randomArr[i] % 2 !== 0) {
    countOdd++;
    sumOdd += randomArr[i];
  }
}
console.log(`========== Mảng ban đầu ==========`);
console.log(`${randomArr.join(", ")}`);
console.log(`Số lượng số lẻ trong mảng: ${countOdd}`);
console.log(`Tổng các số lẻ: ${sumOdd}`);

// Sử dụng Arrow function + reduce()
let { countOddSecond, sumOddSecond } = randomArr.reduce(
  (accumulator, currentValue) => {
    if (currentValue % 2 !== 0) {
      accumulator.countOddSecond++;
      accumulator.sumOddSecond += currentValue;
    }
    return accumulator;
  },
  { countOddSecond: 0, sumOddSecond: 0 }
);
console.log(`Số lượng các số lẻ: ${countOddSecond}`);
console.log(`Tổng các số lẻ: ${sumOddSecond}`);

// g. Nhập 1 ký tự bất kì. Kiểm tra xem có trong mảng hay ko. Nếu có trả về vị trí và ko thì thoát chương trình
let indexNumber = [];
let searchNumbers = Number(prompt(`Nhập vào số cần tìm: `));
for (let i = 0; i < randomArr.length; i++) {
  if (searchNumbers == randomArr[i]) {
    indexNumber.push(i); // thêm i vào mảng
  }
}
console.log(
  `Vị trí phần tử${searchNumbers} cần tìm có vị trị là: ${indexNumber}`
);
if (indexNumber.length === 0) {
  console.log(`Số ${searchNumbers} không tồn tại trong mảng`);
}
