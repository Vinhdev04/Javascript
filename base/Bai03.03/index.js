// While
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// Do while (statements) -> luông thức hiện ít nhất 1 lần lặp sau đó mới kiểm tra điều kiện
let number = 0;
do {
  console.log(number); // x = 5
  if (number == 2) break; // thoát vòng lặp
  number++;
} while (number <= 3);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
for (let item of arr) {
  if (item == 10) continue;
  console.log(item);
}
