// forEach in JS
let arr = [1, 2, 3, 4, 5];
let sum = 0;

// không thể gán biến trả về kq trực tiếp cho forEach()
let result1 = arr.forEach((sum, value) => {
  sum += value;
}, 0);
console.log(result1); //  Output: undefined

let result2 = arr.forEach((value) => {
  sum += value;
}, 0);
console.log(sum); //  Output: 15

let arr2 = [0, 2, 4, 6, 8, 10];
arr2.forEach(myFunction);
function myFunction(element, index) {
  arr2[index] = element * 2;
}
console.log(arr2); // Output: 0 4 8 12 16 20
