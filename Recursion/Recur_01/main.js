// Recursion in JS:

// Bài toán : Tính n!

function factorial(n) {
  // điều kiện dừng
  if (n === 1) {
    return 1;
    // quy luật tính
  } else {
    // gọi lại chính nó
    return n * factorial(n - 1);
  }
}

var resuilt = factorial(5);
console.log(resuilt);

let getFactorial = (n) => {
  // điều kiện dừng
  if (n === 1) {
    return 1;
    // quy luật tính
  } else {
    // gọi lại chính nó
    return n * getFactorial(n - 1);
  }
};
console.log(getFactorial(5));
