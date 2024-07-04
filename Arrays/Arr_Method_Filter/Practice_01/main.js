// ------------ Filter() ------------ //
let arr1 = [1, 2, 1, 3, 2, 4, 6, 7, 8, 9, 7, 8, 9, 1];
let valueFilter = arr1.filter(function getValue(
  currentValue,
  currentIndex,
  array
) {
  return currentValue % 2 === 0;
});
console.log(valueFilter); // Output: 2 2 4 6 8 8

// Xét bài toán : Tìm số lẻ
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valueNumber = numbers.filter((value, index, array) => value % 2 !== 0);
console.log(valueNumber); // Output: 1 3 5 7 9

let values = numbers.reduce((accumulator, currentValue) => {
  if (currentValue % 2 !== 0) {
    accumulator.push(currentValue); // đẩy phần tử vào mảng
  }
  return accumulator; // trả về giá trị là số lẻ
}, []); // thêm mảng rỗng
console.log(values); // Output: 1 3 5 7 9
