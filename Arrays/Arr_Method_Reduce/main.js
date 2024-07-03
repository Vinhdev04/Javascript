// Xét mảng và tính tổng ko sử dụng reduce():
// Cách 1: For()
let arr1 = [2, 1, 4, 5, 6, 3];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}
console.log(sum); // Output: 21

// Cách 2: For of()
let sumX = 0;
for (let element of arr1) {
  sumX += element;
}
console.log(sumX); // Output: 21

// Cách 3: reduce(accumulator, currentValue, currentIndex, array,option[initialValue])
let sumY = arr1.reduce(
  // sử dụng  arrow function
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  },
  // initialValue ->  giá trị khởi tạo ban đầu
  0
);
console.log(sumY); // Output: 21

// Khi ko gán initialValue -> mặc định sẻ giá trị accumulator từ thứ nhất của mảng và bắt đầu chạy từ phần tử thứ 2
// Nếu mảng rỗng và ko có initialVlue -> báo lỗi
let arr2 = [1, 2, 3, 4, 5];
let sumZ = arr2.reduce(
  function getSum(
    // accumulator,
    // currentValue,
    // currentIndex,
    // array
    x,
    y
  ) {
    // return accumulator + currentValue;
    return x + y;
  }
  // 0 -> ko gán initialValue
);
console.log(sumZ); // Output: 15
