alert("Error");

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(arr);

//  Truy xuất theo giá trị index
console.log(arr[3]); // 40
console.log(arr[-1]); // undefined

//  Truy xuất đô dài
console.log(arr.length); // 10

// Gán giá trị theo index
arr[9] = 99;
console.log(arr); //

// Duyệt mảng bằng vòng for()
for (let i = 0; i < 10; i++) {
  console.log(arr[i]);
}

let arr1 = ["Volvo", "Mesc", "Audi", "Maybach"];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

let arr2 = [10, 11, 20, 22, 55, 99, 77];
for (let i = 0; i < arr2.length; i++) {
  arr2[i] *= 2;
  console.log(arr2[i]);
}

// Duyệt mảng bằng for ... of() -> chỉ xem ko thể thực hiện thao tác sửa
let arr3 = [2, 4, 6, 8, 10];
for (let element of arr3) {
  console.log(element);
}

let arr4 = [1, 2, 3, 4, 5, 6];
let count = 0;
for (let i of arr4) {
  if (i % 2 == 0) {
    console.log(i);
    count++;
  }
}
console.log(`Số lượng số chẵn là ${count}`);

// Duyệt mảng kết hợp html và js
let arr5 = ["Banana", "Coffee", "Apple", "Orange"];
let resuilt = "<ul>";
for (let i = 0; i < arr5.length; i++) {
  resuilt += "<li>" + arr5[i] + "</li>";
}
resuilt += "</ul>";

// Duyệt mảng kết hợp html và js với ForEach(function)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>";

// document.getElementById("demo").innerHTML = text;

// function myFunction(value) {
//   text += "<li>" + value + "</li>";
// }
