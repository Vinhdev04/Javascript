function getCountDown(numbers) {
  if (numbers > 0) {
    console.log(numbers);
    return getCountDown(numbers - 1);
  } else {
    return numbers;
  }
}
getCountDown(10);

let showArray = () => {};

// Bài toán :
// input:  arr1 = ['a', 'b', 'c', 'd', 'a','a','c']
// output: arr1 = ['a', 'b', 'c', 'd']

// Sử dụng vòng lặp
function getArray(array) {
  let resuilt = [];
  for (let i = 0; i < array.length; i++) {
    if (!resuilt.includes(array[i])) {
      resuilt.push(array[i]);
    }
  }
  return resuilt;
}

let arr3 = ["a", "b", "c", "d", "a", "a", "c"];
let kq = getArray(arr3);
console.log(kq);

// Sử dụng đệ quy
function removeDuplicateArr(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[0] === arr[i]) {
      arr.splice(i, 1);

      return removeDuplicateArr(arr);
    }
  }

  return [arr[0]].concat(removeDuplicateArr(arr.slice(1)));
}
let arr = ["a", "b", "c", "d", "a", "a", "c"];
console.log(...[removeDuplicateArr(arr)]);
