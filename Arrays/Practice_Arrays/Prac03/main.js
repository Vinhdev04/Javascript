// Mức độ trung bình:
/*
  XÉT MẢNG ARRAY = ['Ana','Kimi','Yelu','Miki','Anata','Omelo',[0,3],[4,5]]
Đề bài 6:
  -> Thêm phần tử vào đầu mảng
  -> Tạo một mảng ban đầu và thêm một phần tử mới vào đầu mảng, sau đó in ra mảng mới.
Đề bài 7:
  -> Xóa phần tử đầu tiên của mảng
  -> Tạo một mảng các chuỗi và xóa phần tử đầu tiên của mảng, sau đó in ra mảng mới.
Đề bài 8:
  -> Ghép mảng
  -> Tạo hai mảng số nguyên và ghép chúng lại với nhau, sau đó in ra mảng kết quả.
Đề bài 9:
  -> Sao chép mảng và chèn vào vị trí khác
  -> Tạo một mảng các số nguyên và sao chép một phần của mảng đó và chèn vào một vị trí mới trong mảng, sau đó in ra mảng kết quả.
Đề bài 10:
  -> Sao chép mảng và làm phẳng
  -> Tạo một mảng nhiều chiều và sao chép mảng đó và làm phẳng thành mảng một chiều, sau đó in ra mảng kết quả.
*/

let firstArr = [1, 2, 3, 4, 5];
console.log(firstArr.unshift(-1)); // Output: length = 6
console.log(firstArr); // Output: -1 1 2 3 4 5

let lastArrr = [1, 2, 3, 4, 5, 6];
console.log(lastArrr.shift()); // Output: delete[1]
console.log(lastArrr); // Output: 2 3 4 5 6

let matchArr1 = [1, 3, 5, 6];
let matchArr2 = [0, 2, 4, 8];
console.log(matchArr1.concat(matchArr2)); // Output: 1 3 5 6 0 2 4 8

let copyArr = [0, 3, 5, 8, 9];
let copyArray = copyArr.slice();
let insertArr = copyArr.unshift(1);
console.log(copyArr); // Output: 1 0 3 5 8 9
console.log(copyArray); // Output: 0 3 5 8 9

let multiArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(multiArr); // Output: [1,2] [3,4] [5,6]
console.log(multiArr.flat()); // Output: 1 2 3 4 5 6
