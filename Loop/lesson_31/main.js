// Bài tập bonus:
/* 
        Viết một chương trình tính tổng của các số Fibonacci từ 1 đến n.
        Ví dụ: Nếu n = 8, tổng là 1 + 1 + 2 + 3 + 5 + 8 = 20. 

        Viết một chương trình tính tổng của các số hoàn hảo từ 1 đến n.
        Ví dụ: Nếu n = 28, tổng là 6 + 28 = 34.

        Viết một chương trình tính tổng của các số nguyên tố từ 1 đến n.
        Ví dụ: Nếu n = 10, tổng là 2 + 3 + 5 + 7 = 17

        Viết một chương trình tính tổng của các số chẵn từ 1 đến n.
        Ví dụ: Nếu n = 6, tổng là 2 + 4 + 6 = 12.

        Viết một chương trình tính tổng của các số từ 1 đến n (n là số nguyên dương nhập từ bàn phím).
        Ví dụ: Nếu n = 5, tổng là 1 + 2 + 3 + 4 + 5 = 15.
*/

//  bai1
let n = Number(prompt("Nhập một số nguyên dương: "));
while (!Number.isInteger(n) || n < 0) {
  n = Number(prompt("Vui lòng nhập lại số nguyên dương: "));
}
let giaiThua = 1;
for (let i = 1; i <= n; i++) {
  giaiThua *= i;
}
alert("Giai thừa của " + n + " là: " + giaiThua);

// bai2
