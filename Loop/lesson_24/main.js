// do while(condition):
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// while(condition):
let x = 1;
while (x <= 10) {
  console.log(x); // 1,2,3,4,5,6,7,8,9,10
  x++;
}

let y = prompt("Nhập vào số nguyên: ");
console.log(y);

while (isNaN(y) || y < 1 || y > 99 || y % 1 !== 0) {
  y = Number(prompt("Vui lòng nhập lại"));
}
alert("Bạn đã nhập số: " + y);

// while(true):
let n = 0;
while (true) {
  n++;
  console.log(n);
  if (n == 9) break;
}

// for():

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// Continue
for (let i = 0; i <= 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}
// Break
let x1 = 0;
while (x1 < 5) {
  x1++;
  if (x1 === 4) {
    break;
  }
  console.log(x1);
}
