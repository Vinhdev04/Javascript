// Viết chương trình nhập mảng và in ra kết quả
let arr = [];
let n;
while (true) {
  n = Number(
    prompt(`
    Nhập vào số lượng phần tử của mảng (n>0):`)
  );

  // Kiểm tra n số nguyên và n > 0
  if (Number.isInteger(n) && n > 0) {
    break;
  }
}
console.log(`Số lượng phần tử của mảng: ${n}`);
for (let i = 0; i < n; i++) {
  console.log(i);
  let value = Number(prompt(`Nhập phần tử thứ: ${i + 1}`));
  arr.push(value); // thêm phần tử vào mảng
}
console.log(arr);
