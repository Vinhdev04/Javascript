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
