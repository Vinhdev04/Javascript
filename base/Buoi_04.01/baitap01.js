//1. Tính tổng chãn mảng: [1,2,3,4,5,6,7,8,9,10]
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let getSumEven = function () {
  let sum = 0;
  for (const element of arr) {
    if (element % 2 == 0) {
      sum += element;
    }
  }
  return sum;
};
let result = getSumEven(arr);
console.log(result);

let getSumEven2 = (...arr) => {
  let sum = 0;
  for (const element of arr) {
    if (element % 2 == 0) {
      sum += element;
    }
  }
  return sum;
};
let result1 = getSumEven2(arr);
console.log(result1);

//2. Viết chương trình nhập n số > 0, tính n theo: x = 1/n + 2/n + 3/n +..+ n/n

let input;

do {
  input = Number(prompt("Enter a number: "));
  if (input <= 0) {
    console.warn("Again..");
  } else {
    let kq = getValue(input);
    console.log(kq);
  }
} while (input <= 0);

function getValue(n) {
  console.log(n);
  let sumN = 0;
  for (let i = 1; i <= n; i++) {
    sumN += i / n;
  }
  return sumN;
}
