// Bài tập 5: Viết chương trình: Tính tổng S = 1! + 2! + 3! + ....+ n!

let sum = 0;
for (let n = 1; n <= 10; n++) {
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  sum += gt;
}
alert(`Tông ${1} ! tới ${10} ! = ${sum}`);
