// while(condition)
let i = 1;
while (i <= 10) {
  console.log(i); // 1,2,3,4,5,6,7,8,9,10
  i++;
}

let n = prompt("Nhập vào số nguyên: ");
console.log(n);

while (isNaN(n) || n < 1 || n > 99 || n % 1 !== 0) {
  n = Number(prompt("Vui lòng nhập lại"));
}

alert("Bạn đã nhập số: " + n);
