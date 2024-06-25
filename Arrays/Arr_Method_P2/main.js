// Methods int JavaScript P1:
// 11 indexOf()
let arr = [1, 2, 3, 4];
console.log(arr.indexOf()); // Output: -1

let arr1 = ["Orange", "Banana", "Coffee", "Banana"];
console.log(arr1.indexOf("Banana")); // Output: 1

// 12. lastIndexOf():
let arr3 = ["Orange", "Banana", "Coffee", "Banana", "Canxi"];
console.log(arr1.lastIndexOf("Banana")); // Output: 3

// 13. reverse():
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrX = arr4.slice().reverse();
console.log(arr4); // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
console.log(arrX); // Output: 10 9 8 7 6 5 4 3 2 1

// 14.join(separator):
let arr5 = [2, 4, 6, 8, 10];
console.log(arr5.join()); // Output: 2, 4, 6, 8, 10 -> default join
console.log(arr5.join("-")); // Output: 2 - 4 - 6 - 8 - 10
console.log(arr5.join(";")); // Output: 2 ; 4 ; 6 ; 8 ; 10

let arr6 = [4, 6, "Vinh", "An", 22];
console.log(arr6.join(" + ")); // Output: 4 + 6 + Vinh + An + 22
console.log(arr6.join(" - ")); // Output: 4 - 6 - Vinh - An - 22
