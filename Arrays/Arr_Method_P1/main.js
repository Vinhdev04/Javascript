// Methods int JavaScript P1:

// 1. concat() -> Nối các mảng với nhau và trả về mảng mới
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arrX = [41, 15, 16];
console.log(arr1.concat(arr2, arrX)); // Output: 1,2,3,4,5,6,41,15,16

// 2. push()  -> thêm  phần tử vào cuối mảng gốc
let arr3 = ["Banana", "Orange"];
arr3.push("Coffee");
console.log(arr3); // Output: Banana,Orange,Coffee

// 3. unshift() -> thêm  phần tử vào đầu mảng gốc
let arr4 = ["Red", "Green", "Blue"];
arr4.unshift("Green");
console.log(arr4); // Output: Green,Red,Green,Blue

// 4. pop() -> xóa  phần tử cuối mảng, làm thay đổi mảng gốc và trả về giá trị của phần tử đã bị loại bỏ
let arr5 = ["Vinh", "Hà"];
arr5.pop();
console.log(arr5); // Output: Vinh

// 5. shift() -> xóa phần tử đầu tiên và trả về giá trị của phần tử đó
let arr6 = ["Mana", "Jun"];
arr6.shift();
console.log(arr6); // Output: Jun

/* 6. splice() -> tạo bản sao của mảng -> lưu sang vùng nhớ mới cắt elements của mảng
    -> Lấy từ startIndex tới  endIndex-1 chuỗi gốc (Ko bao gồm endIndex)
    -> Bỏ trống sẻ hiểu là sao chép lấy toàn bộ mảng gốc sang mảng mới
*/
let arr7 = ["a", "b", "c", "d", "e", "f"];
let arr8 = arr7.splice(2, 4); // cắt từ 2 đến sát 3
console.log(arr8); // Output: c d e f

let arr9 = [1, 3, 5, 7, 9];
console.log(arr9.slice(0, 3)); // Output: 1 3 5

let arr10 = [2, 4, 6, 8, 10];
console.log(arr10.slice()); // Output: 2 4 6 8 10

let arr11 = [2, 4, 6, 8, 10];
console.log(arr11.slice(1)); // Output:  4 6 8 10

// 7. includes() -> kiểm tra xem mảng có chứa 1 giá trị cụ thể hay ko . Trả về giá trị true or false
let arr12 = ["Name", "Age", "Email"];
console.log(arr12.includes("Age")); // Output: Age -> true

console.log(arr12.includes("Address")); // Output:  -> false
