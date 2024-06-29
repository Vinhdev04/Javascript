// Tìm hiểu toán tử spread(...) trong javascript

// 1. Tạo bản sao (clone) của mảng -> bản chính ko bị ảnh hưởng khi tác động vào bản sao
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr1); // 1 2 3
console.log(arr2); // copy [1 2 3]
arr2[0] = -1;
console.log(arr2); // -1 2 3
console.log(arr1); // 1 2 3

arr1[0] = 0;
console.log(arr1); // 0 2 3
console.log(arr2); // -1 2 3

let arr3 = [2, 4, 5];
let arr4 = arr3.slice();
console.log(arr4); // 2 4 5

// 2. Truyền đối số vào function
// declare function
function getSum(a, b, c) {
  return a + b + c;
}

const arr5 = [1, 2, 3];
console.log(getSum(...arr5)); // 1 + 2 + 3 = 6

// Express function
let getValues = function (x, y, z) {
  return x + y + z;
};

const arr6 = [0, 4, 1];
console.log(getValues(...arr6)); // 0 + 4 + 1 = 5

// Arrow function
let getArrow = (x1, y1, z1) => {
  return x1 + y1 + z1;
};
const arr7 = [0, 4, 1];
console.log(getValues(...arr7)); // 0 + 4 + 1 = 5

// 3. Kết hợp mảng
let arr8 = [1, 3, 5, 7, 9];
let arr9 = [0, 2, 4, 6, 8, 10];
let combineARR = [...arr8, ...arr9]; // 1 3 5 7 9 0 2 4 6 8 10
console.log(combineARR); // 1 3 5 7 9 0 2 4 6 8 10
console.log(...arr8, ...arr9); // 1 3 5 7 9 0 2 4 6 8 10

// 4. Tạo mảng mới và thêm phần tử
let arr10 = ["Hello", "Bie", "Happy"];
console.log(...arr10, "GOO"); // Hello", "Bie", "Happy", "GOO"
arr10 = ["SUN", ...arr10];
console.log(arr10); // "SUN" Hello", "Bie", "Happy", "GOO"

// 5. Chuyển đổi iterable (có thể duyệt qua: string,array,object) -> array
let myHello = "HELLO WORLD";
let myChars = [...myHello];
console.log(myHello); // HELLO WORLD
console.log(myChars); // 'H' 'E' 'L' 'L' 'W' 'O' 'R' 'L' 'R'
