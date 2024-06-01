// Bài tập 3: Viết chương trình tính tổng các số lẻ từ 1-> n và bỏ qua ko cộng tổng với số 3 -> in ra kết quả
// Ví dụ 1+5+7 = 13 và break khi n = 3

let n = Number(prompt("Number : "));
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Vui lòng nhập lại "));
}
console.log(n);

let sum = 0;
for (let i = 1; i <= n; i++) {
  if (n === 3) {
    continue;
  }
  sum += i;
}
alert(`Tổng các số lẻ từ 1 tới ${n} là ${sum}`);
