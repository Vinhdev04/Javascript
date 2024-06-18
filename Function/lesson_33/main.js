// Bài tập 01: Viết hàm tính n!

function tinhGiaiThua(n) {
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  return gt;
}

let n = Number(prompt("Enter n: "));
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Enter again: "));
}

let kq = tinhGiaiThua(n);
console.log(`Kết quả ${n}! là: ${kq}`);
