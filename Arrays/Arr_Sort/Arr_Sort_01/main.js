// sort() -> ko truyền tham số -> so sánh từng ký tự theo bảng mã Unicode (dừng so sánh nếu các kí tự khác nhau)
let arr1 = ["b", "a", "e", "d"];
console.log("b".charCodeAt()); // 98
for (let element of arr1) {
  console.log(element);
  console.log(`${element} có mã UNICODE ${element.charCodeAt()}`);
}
console.log(arr1.sort()); // Output: a b c d -> 97 98 100 101

// sort() -> ko truyền tham số -> so sánh từng ký tự theo bảng mã Unicode (dừng so sánh nếu các kí tự khác nhau)
let arr2 = [0, 3, 2, 6, 5, 8, 7, 9, 10, -1, 22, -19];
console.log(arr2.sort()); // Output: 1, -19, 0, 10, 2, 22, 3, 5, 6, 7, 8, 9

// TH2: Phần tử có nhiều kí tự: Nếu kí tự giống nhau , so sánh kí tự sau (kí tự có Unicode thấp hơn đứng trước)
let arr3 = ["baa", "b", "a", "d"];
console.log(arr3.sort()); // Output: a b baa d

let arrX = ["aaa", "b", "a", "d"];
console.log(arrX.sort()); // Output: a aaa b d

// TH3: Xét với kí tự số giống nhau -> kết quả ko đạt yêu cầu
let arr4 = [1, 100, 9, 2, 200];
console.log(arr4.sort()); // Output: 1 100 2 200 9 => sai
console.log("1".charCodeAt()); // 49
console.log("100".charCodeAt()); // 49
console.log("9".charCodeAt()); // 57
console.log("2".charCodeAt()); // 50
console.log("200".charCodeAt()); // 50

// Sử dụng hàm so sánh compareFunction(a,b)
let arr5 = [100, 2, 99, 1, 98, 0, -20];
console.log(arr5);
let compareX = arr5.sort((a, b) => a - b); // sử dụng Arrow Function
console.log("Sau khi sort() tăng: " + compareX); // Output: -20 0 1 2 98 99 100 => sort() tăng

let arr6 = [100, 2, 10, 99, 3, 12, 33];
console.log(arr6);
let compareY = arr6.sort((a, b) => b - a);
console.log("Sau khi sort() giảm:" + compareY); // Output: 100 99 33 12 10 3 2 => sort() giảm

// ES2023 -> toSorted() -> nâng cấp của sort() -> ko thay đổi mảng ban đầu
let arr7 = [100, 2, 10, 99, 3, 31, 22];
console.log(arr7);
console.log(
  "Sau khi sử dụng toSorted() tăng: " + arr7.toSorted((a, b) => a - b)
); // Output: 10,100,2,22,3,31,99
console.log(
  "Sau khi sử dụng toSorted() giảm: " + arr7.toSorted((a, b) => b - a)
); // Output: 100 99 31 22 10 3 2

// reverse() và toReversed():
let arr8 = [0, 2, 4, 6, 8];
console.log("Mảng ban đàu: " + arr8); // Output: 0 2  4 5 8
console.log("Sử dụng reverse(): " + arr8.reverse()); // Output: 8 6 4 2 0
console.log("Sử dụng toReversed(): " + arr8.toReversed()); // Output: 0 2 4 6 8
