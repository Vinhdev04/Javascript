// Bài tập 6: Số Hoàn Hảo trong Phạm Vi 1-1000
for (let n = 1; n <= 1000; n++) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  if (sum === n) {
    console.log(n);
  }
}

// Bài tập 7: Kiểm tra số nguyên tố
while (true) {
  let isNum = Number(prompt("Enter a number "));
  while (!Number.isInteger(isNum) || isNum <= 0) {
    isNum = Number(prompt("Again: "));
  }
  alert("Number is: " + isNum);
  let isPrime = true;
  for (let i = 2; i < isNum; i++) {
    if (isNum % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    alert(isNum + " is a prime number");
  } else {
    alert(isNum + " is not a prime number");
  }
}
