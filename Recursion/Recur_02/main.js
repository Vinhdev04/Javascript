// Bài toán : Tính Fibonacci

function fibonacci(n) {
  // điều kiện dừng
  if (n <= 2) {
    return 1;
    // giai thuật tính fibonacci
  } else {
    // gọi đệ quy và cộng số fibonacci của 2 số trước đó
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

let input = Number(prompt("Nhập n: "));
let result = fibonacci(input);
console.log(result);

// let resuilt = fibonacci(10);
// console.log(resuilt);

// Định nghĩa một đối tượng để lưu trữ kết quả đã tính
let memo = {};

function fibonacci(n) {
  // Kiểm tra nếu đã tính trước đó
  if (memo[n]) {
    return memo[n];
  }

  // Điều kiện dừng
  if (n <= 2) {
    return 1;
  } else {
    // Gọi đệ quy và lưu kết quả vào memoization
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
  }
}

let inputX = Number(prompt("Nhập n: "));
let resultX = fibonacci(inputX);
console.log(resultX);
