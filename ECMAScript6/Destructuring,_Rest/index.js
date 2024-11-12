// Destructuring (phân rã), Rest parameters (lấy ra phần còn lại)

// ----- Sử dụng với Array -----
let arr = ["JavaScript", "PHP", "Python", "React"];
// Bài toán : tạo các biến lưu thông tin trong mảng trên

let a = arr[0];
let b = arr[1];
let c = arr[2];
let d = arr[3];
console.log(a, b, c, d); // Output: JavaScript PHP Python React

// sử dụng destructuring
let [x, y, z, m] = arr;
console.log(x, y, z, m); // Output: JavaScript PHP Python React

// chỉ lấy a,b,d
let [a1, b1, , d1] = arr;
console.log(a1, b1, d1); // Output: JavaScript PHP React

// Rest parameters (lấy ra phần còn lại)
//let [p] = arr;
// lấy ra những phần tử còn lại trừ p
let [p, ...rest] = arr;
console.log(p); // Output: JavaScript
console.log(rest); // Output: [ 'PHP', 'Python', 'React' ]

// ----- Sử dụng với Object -----
let total = {
  nameX: "TotalX",
  coins: 10000,
  discount: 10,
};
// sử dụng destructuring -> đặt key-name phải giống trong Object -> nếu sai sẻ -> "undefined"
let { nameX, coins, discount } = total;
console.log(nameX, coins, discount); // Output: TotalX 10000 10

// Lấy ra tất cả trừ name -> ...rest
let { nameY, ...restTotal } = total;
console.log(nameY); // Output:  'TotalX'
console.log(restTotal); // Output: coins: 10000, discount: 10

// Ví dụ : Hãy xóa 1 key của Obj mà ko sử dụng delete
const obj = {
  fact: "Mr An",
  age: 25,
  address: "123 Street",
};

// xóa key age
let { age, ...newObj } = obj;
console.log(newObj); // Output: fact: "Mr An", address: "123 Street"

// Nếu object lồng object

let obj2 = {
  name: "John",
  age: 30,
  city: "HCM",
  address: {
    street: "456 Street",
    city: "New York",
  },
  //  noKey: "123",
};

// Lấy ra city của address và đổi tên key
let {
  city: cityParent,
  address: { city: cityChild },
} = obj2;

console.log(cityParent); // Output: HCM
console.log(cityChild); // Output: New York

// Lấy ra 1 key ko được định nghĩa (Và nếu ko có thì xét giá trị mặc định)
let { noKey = "Default value!" } = obj2;
// console.log(noKey); // Output: undefined
console.log(noKey); // Output: Default value!

// ...rest parameters với function
// định nghĩa ra tham số -> rest
// sử dụng với destructuring -> rest
function getLog(...params) {
  // console.log(arguments);
  console.log(params); // -> kết quả là 1 array (gần giống với arguments)
}
console.log(1, 2, 3, 4, 5, 6);
