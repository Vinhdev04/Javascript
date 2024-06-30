// Mức độ khó:
/*
  Xét mảng a = [1,2,3,4,5,6,100,['Loka','B'],[-20,1000,191]]
Đề bài 11:
  -> Xóa phần tử và thay thế
  -> Tạo một mảng các số nguyên và xóa một phần tử từ mảng đó, sau đó thay thế bằng một phần tử mới và in ra mảng kết quả.
Đề bài 12:
  -> Lọc các phần tử của mảng
  -> Tạo một mảng các chuỗi và loại bỏ các phần tử trùng lặp từ mảng đó, sau đó in ra mảng kết quả.
Đề bài 13:
  -> Đảo ngược mảng
  -> Tạo một mảng số nguyên và đảo ngược thứ tự các phần tử trong mảng đó, sau đó in ra mảng kết quả.
Đề bài 14:
  -> Sắp xếp mảng
  -> Tạo một mảng số nguyên và sắp xếp các phần tử trong mảng theo thứ tự giảm dần, sau đó in ra mảng kết quả.
Đề bài 15:
  -> Tìm kiếm phần tử
  -> Tạo một mảng các số nguyên và viết hàm tìm kiếm một phần tử trong mảng và trả về vị trí của nó (nếu có), sau đó in ra kết quả.
*/

let arr1 = [1, 2, 3, 4, 5, 6];
let removerArr = arr1.pop();
console.log(arr1); // Output: 1 2 3 4 5
console.log(removerArr); // Output: delete[6]
let replaceArr = [...arr1, 7];
console.log(replaceArr); // Output: 1 2 3 4 5 7

let arr2 = [0, 2, 4, 6, 8, 10];
let reverseArr = arr2.reverse();
console.log(reverseArr); // Output: 10 8 6 4 2 0

let arr3 = [0, 2, 4, 6, 8, 10, -2, 44, -90];
let sortArr = arr3.sort();
console.log(sortArr); // Output: -2 -90 0 10 2 4 44 6 8
