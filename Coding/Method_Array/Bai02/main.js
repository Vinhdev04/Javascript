// Làm phẳng 1 mảng phần tử Depth array cho trước bằng reduce()

// C1
let arr = [1, 2, 3, 4, 5, 6, [7, 8, 9, 10], 20];
let result = arr.reduce(function (output, array) {
  return output.concat(array);
}, []);
console.log(result);

// C2
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = [];
for (var i = 0; i < depthArray.length; i++) {
  if (depthArray[i].length > 0) {
    for (var j = 0; j < depthArray[i].length; j++) {
      flatArray.push(depthArray[i][j]);
    }
  } else flatArray.push(depthArray[i]);
}

console.log(flatArray);

// C3
let arr1 = [1, 2, 3, [4, 5, 6, [7, 8, 9, 10]], 20];
function flattenArray(arr1) {
  let i = 0;
  while (i < arr1.length) {
    if (Array.isArray(arr1[i])) {
      // Xoá phần tử mảng và nối các phần tử của mảng con vào vị trí hiện tại
      // arr1.splice(i, 1, ...arr1[i]);
      arr1.splice(i, 1, ...arr1[i]);
    } else {
      i++;
    }
  }
  return arr1;
}

let flattenedArray = flattenArray(arr1);
console.log(flattenedArray); // Kết quả: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]
