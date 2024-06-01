// Bài tập 1: Viết chương trình nhập vào số nguyên n, in ra kết quả n!
/*
  1. dùng vòng lặp for
  2. dùng vòng lặp while
*/

let n = Number(prompt("Nhập số nguyên n"));
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Nhập lại số nguyên n"));
}
console.log(n);

// For
let gt = 1;
for (let i = 1; i <= n; i++) {
  gt *= i;
}
console.log(n + "! " + " = " + gt);

// While
let gt2 = 1;
let i1 = 1;
while (i1 <= n) {
  gt2 *= i1;
  i1++;
}
console.log(n + "! " + " = " + gt2);
