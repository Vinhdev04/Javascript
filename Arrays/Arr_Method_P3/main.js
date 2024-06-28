// Array Method in JS P3

// delete()
let arr1 = [1, 2, 3, 4];
delete arr1[1];
console.log(arr1); // 1, empty, 3,4
console.log(arr1.length); // 4  -> not 3

let arr = [1, 2, 3];
delete arr[1];

for (let i in arr) {
  console.log(arr[i]); // 1, undefined, 3
}

// copyWithin(target, start, end-1)
const arr3 = ["Banana", "Apple", "Orange", "Mango"];
console.log(arr3.copyWithin(2, 0)); // Sao chép vào chỉ mục 2, tất cả các phần tử từ chỉ mục 0: -> [banana apple banana apple]

const arr4 = [0, 1, 2, 3, 4, 5, 6];
console.log(arr4.copyWithin(2, 1, 3)); // 0 1 1 2 4 5 6

// flat() -> biến thảnh mảng ko lồng nhau
let arr5 = [1, 2, 3, [4, 5], [6, 7, 8]];
console.log(arr5.flat()); // 1 2 3 4 5 6 7 8

// 15. splice(start,deleteCount,item1,....)
let arr6 = [0, 2, 4, 6, 8, 10];
arr6.splice(3, 1); // từ vị trí số  start = 3, xóa đi 1 phần tử -> delete(3)
console.log(arr6); // 0 2 4 7 8 10

// với start = giá trị âm => tính từ cuối  mảng
let arr7 = [1, 3, 5, 7, 9];
arr7.splice(-1, 2); // delete [9]
console.log(arr7); // 1 3 5 7

// nếu delete = 0 => ko xóa
let arr8 = [1, 3, 5, 7, 9];
arr8.splice(-1);
console.log(arr8); // 1 3 5 5 7 9

// thay thế item
let arr9 = [0, 1, 2, 3, 4];
arr9.splice(2, 1, 5); // delete [2] và insert [2] = 5
console.log(arr9); //  0 1 5 3 4

// thêm item
let arr10 = [1, 2, 3, 6, 7];
arr10.splice(2, 0, 9); // insert[2] = 9 , delete = 0
console.log(arr10); // 1 2 9 3 6 7
