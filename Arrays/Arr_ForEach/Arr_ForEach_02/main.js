// Tìm hiểu forEach() in JS:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.forEach(consoleNumber);
// forEach() với function
function consoleNumber(elements, index, array) {
  console.log(`a[${index}] = ${elements}`); // Output: 1 2 3 4 5 6 7 8
}

// forEach() với Arrow function
numbers.forEach((item, index, arr) => {
  console.log(`arr[${index}] = ${item}`); // Output: 1 2 3 4 5 6 7 8
});

// Tính tổng mảng

let sum = 0;
numbers.forEach((item, index, arr) => {
  sum += item;
});
console.log(`sum = ${sum}`); // Output: 1 2 3 4

// forEach() với Objects
let characters = ["a", "b", "c", "d", "a", "b", "a"];

let characterCount = {};
characters.forEach((item, index, arr) => {
  if (characterCount[item]) {
    characterCount[item]++;
  } else {
    characterCount[item] = 1;
  }
}, 0);

console.log(characterCount); // Output: a:3, b:2, c:1, d:1
