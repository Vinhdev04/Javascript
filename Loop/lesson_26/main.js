// Bài tập 2: Viết chương trình nhập vào só a
/* 
  Nếu a chẵn thì tính tổng các số chẵn từ  0 -> a
  Nếu a lẻ thì in ra dòng chữ "Exit" và thoát
*/

let n = Number(prompt("Enter a: "));
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Vui lòng nhập lại: "));
}
console.log(n);

if (n % 2 === 0) {
  let tong = 0;
  for (let i = 0; i <= n; i += 2) {
    tong += i;
  }
  alert(`Tổng các số chẵn từ 0 tới ${n} là ${tong}`);
} else {
  console.log("Exiting...");
}
