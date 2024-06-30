// Mức độ dễ
/*
    XÉT MẢNG nameFootball = ['ronaldo','messi','Facal','Bruno','Lukaku','Modric',[1,2,3]]
1. Đề bài 1:
    -> Tính độ dài của mảng
    -> Viết một chương trình JavaScript để nhập vào một mảng và in ra độ dài của mảng đó.

2. Đề bài 2:
    -> Chuyển đổi mảng thành chuỗi
    -> Tạo một mảng các số nguyên và chuyển đổi mảng này thành chuỗi, sau đó in ra kết quả.
3. Đề bài 3:
    -> Lấy phần tử tại chỉ mục cho trước
    -> Viết một hàm JavaScript nhận vào một mảng và một chỉ số, trả về phần tử ở vị trí chỉ số đó.
4. Đề bài 4:
    -> Nối các phần tử của mảng
    -> Tạo một mảng các chuỗi và nối chúng thành một chuỗi duy nhất, mỗi chuỗi cách nhau bằng dấu phân cách ;.
5. Đề bài 5:
    -> Xóa phần tử cuối cùng của mảng
    -> Tạo một mảng các số nguyên và xóa phần tử cuối cùng của mảng, sau đó in ra mảng mới.
*/

let nameFootball = ["ronaldo", "messi", "Facal", "Bruno", "Lukaku", "Modric"];
console.log(...nameFootball);

let input = prompt("Enter numbers separated by commas:");
let arr = [...input];
console.log("Length of the array:", arr.length);

let myName = ["Hà", "Vy", "An"];
console.log(myName.join(",")); // OUTPUT: Hà, Vy, An

let arr1 = [1, 2, 3, 4];
let arr2 = arr1.toString();
console.log(arr2); // OUTPUT: 1 2 3 4
console.log(typeof arr2); // OUTPUT: string

let arr3 = ["Banana", "Orange", "Green", "Yellow"];
console.log(arr3.splice(0, 2)); // OUTPUT [Banana Orange] -> delete
console.log(arr3); // OUTPUT Green Yellow

let arr4 = [1, 2, 3, 4];
let arr5 = [0, 2, 4];
console.log(arr4.concat(arr5)); // OUTPUT: 1 2 3 4 0 2 4
arrX = [...arr4, ...arr5];
console.log(arrX); // OUTPUT: 1 2 3 4 0 2 4

let arr6 = ["Vinh", 0, 1, [2, 3], ["Vini,Mui"], 9, 10];
arr7 = arr6.flat(); // OUTPUT: Vinh , 0 , 1, 2, 3, Vini, Mui, 9, 10
console.log(arr7.join("; ")); // OUTPUT: Vinh ; 0 ; 1 ; 2 ;  3 ; Vini ; Mui ; 9 ;10

let fullName = ["Phạm Công Vinh", "Huỳnh Tấn An"];
console.log(fullName.pop()); // OUTPUT:  Huỳnh Tấn An
console.log(fullName); // OUTPUT: Phạm Công Vinh

let myARR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myARR.pop()); // OUTPUT:  10
console.log(myARR); // OUTPUT: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
