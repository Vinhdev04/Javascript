// Array Advance: forEach,Every,Some,Map,Filter,Reduce,...

//1. forEach() -> duyệt qua các phần tử của mảng và thức hiện hành động(nào đó), có thể thay đổi trức tiếp mảng ban dầu => Ko tạo ra mảng mới
// array.forEach(function(currentValue,index,array))

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
numbers.forEach(function (item, index, array) {
  console.log(item, index, array);
  sum += item;
  numbers[index] = 20;
});
console.log("Sum: " + sum);
console.log(numbers);

//2. every() -> kiểm tra xem tất cả phần tử của mảng đieu đúng điều kiện hay không, trả về true nếu tất cả  đúng, false nếu chứa 1 phần tử nào đó không đúng điều kiện
// array.every(function(currentValue,index,array))

let Score = [
  {
    name: "John",
    score: 8.5,
  },
  {
    name: "Mary",
    score: 9.0,
  },
  {
    name: "Bob",
    score: 7.0,
  },
];

const hsGioi = Score.every(function (item) {
  return item.score >= 8;
});
console.log(hsGioi); // false
if (hsGioi === true) {
  console.log("Day la hoc sinh Gioi");
} else {
  console.log("Khong phai hoc sinh Gioi...");
}

//3. some() -> kiểm tra xem tồn tại ít nhất 1 phần tử của mảng đó đúng điều kiện hay không, trả về true nếu có ít nhất 1 phần tử đúng điều kiện, false nếu tất cả chứa 1 phần tử nào đó không đúng điều kien
const hsGioi1 = Score.some(function (item) {
  return item.score >= 8;
});
console.log(hsGioi1); // true
if (hsGioi1 === true) {
  console.log("Day la hoc sinh Gioi");
} else {
  console.log("Khong phai hoc sinh Gioi...");
}

//4. find() -> Tìm xem trong mảng có giá trị cần tìm không, nếu có thì trả về phần tử đó và ko tìm thấy trả về "undefined", => Phần tử tìm được là phần tử đầu tiên và chỉ tìm được 1 nếu có nhiều phần tử trùng nhau.
let getName = [
  {
    name: "John",
    age: 25,
  },
  {
    name: "Mary",
    age: 28,
  },
  {
    name: "John",
    age: 30,
  },
  {
    name: "Bob",
    age: 22,
  },
];
let myChecked = getName.find(function (item) {
  console.log(getName);
  return item.name === "John";
  // return item.name === "Mariana"; // undefined
});
console.log("First Result: ", myChecked);

//5. filter() -> Tương tự find() nhưng trả về được tất cả giá trị tìm thấy. Tìm xem trong mảng có giá trị cần tìm, nếu có thì trả về mảng chứa các phần tử đó, nếu không thì trả về mảng rỗng.

let getAddress = [
  {
    name: "John",
    address: "123 Main Street",
  },
  {
    name: "Mary",
    address: "456 Elm Street",
  },
  {
    name: "Bob",
    address: "789 Oak Street",
  },
  {
    name: "Aleks",
    address: "456 Elm Street",
  },
];
let checkAddress = getAddress.filter(function (item) {
  console.log(getAddress);
  return item.address === "456 Elm Street";
});
console.log("Checking address: ", checkAddress);

let total = [
  {
    sub: "html",
    coin: 100,
  },
  {
    sub: "css",
    coin: 200,
  },
  {
    sub: "js",
    coin: 300,
  },
  {
    sub: "php",
    coin: 200,
  },
];

let result = total.filter(function (item, index) {
  return item.coin === 200;
});
console.log(result);

//6. map() -> Tương tự forEach() =>  Tạo ra một mảng mới từ mảng ban đầu bằng cách lấy giá trị của từng phần tử trong mảng  và thực hiện một hành đọng với nó. => Gía trị trả về là 1 mảng mới => Return gì thì kết quả trả về như vậy
let totalX = [
  {
    sub: "html",
    coin: 100,
  },
  {
    sub: "css",
    coin: 200,
  },
  {
    sub: "js",
    coin: 300,
  },
  {
    sub: "php",
    coin: 200,
  },
];
let checkCoin = totalX.map(function (item) {
  console.log(totalX);
  return (item.coin = 600);
});
console.log(checkCoin); // [ 600, 600, 600, 600 ]

//7. reduce(accumulator, currentValue,currentIndex,array) -> Duyệt qua từng phần tử và tính toán => Kết quả trả về là 1 giá trị duy nhất. Với giá trị initialValue có thể truyền vào hay ko tùy mục đích sử dụng

let numbersY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumY = numbersY.reduce(function (accumulator, currentValue) {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
}, 0);
console.log("Sum: " + sumY); // 55
