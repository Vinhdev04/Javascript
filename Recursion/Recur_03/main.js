// Xét bài  toán làm phẳng mảng (Ko sử dụng các hàm có sẵn):
// input:  arr1 = ['a', 'b', 'c', 'd', 'a','a','c']
// output: arr1 = ['a', 'b', 'c', 'd']

// Cách 1: Constructor function: Set() -> phần tử trong set() là unique -> duy nhất
let arr1 = ["a", "b", "c", "d", "a", "a", "c"];
console.log(arr1);
console.log([...new Set(arr1)]); // sử dụng spread ... // Output: [ 'a', 'b', 'c', 'd' ]

// Cách 2: Sử dụng vòng lặp for và mảng phụ
function flattenArray(arr) {
  var uniqueArray = [];

  for (var i = 0; i < arr.length; i++) {
    var isDuplicate = false;
    // Kiểm tra xem phần tử hiện tại đã tồn tại trong uniqueArray chưa
    for (var j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    // Nếu chưa tồn tại, thêm vào uniqueArray
    if (!isDuplicate) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

// Example usage:
var arr2 = ["a", "b", "c", "d", "a", "a", "c"];
var flattenedArray = flattenArray(arr2);
console.log(flattenedArray); // Output: ['a', 'b', 'c', 'd']

// Cách 3: Sử dụng vòng lặp for và Object để đánh dấu
function flattenArray(arr) {
  var uniqueArray = [];
  var map = {}; // Object để lưu trữ các giá trị đã xuất hiện

  for (var i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = true; // Đánh dấu đã xuất hiện
      uniqueArray.push(arr[i]); // Thêm vào mảng kết quả
    }
  }

  return uniqueArray;
}

// Example usage:
var arr3 = ["a", "b", "c", "d", "a", "a", "c"];
var flattenedArray = flattenArray(arr1);
console.log(flattenedArray); // Output: ['a', 'b', 'c', 'd']

// Cách 4: sử dụng reduce()
function flattenArray(arr) {
  return arr.reduce(function (unique, item) {
    // Nếu phần tử chưa tồn tại trong mảng kết quả, thêm vào
    if (!unique.includes(item)) {
      unique.push(item);
    }
    return unique;
  }, []);
}

// Example usage:
var arr4 = ["a", "b", "c", "d", "a", "a", "c"];
var flattenedArray = flattenArray(arr4);
console.log(flattenedArray); // Output: ['a', 'b', 'c', 'd']
