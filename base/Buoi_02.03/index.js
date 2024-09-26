// Làm việc với Array

// 1. toString() -> chuyển array -> string
let list = ["html", "json", "css"];
console.log(list.toString());

// 2. join() -> chuyển array -> string, đặt dấu phân cách
console.log(list.join());
console.log(list.join(","));
console.log(list.join(";"));
console.log(list.join(", "));
console.log(list.join(" - "));

const arr = [1, 2, 3, 4, 5];

// push() -> thêm phần tử vào cuối mảng -> trả về độ dài mảng sau khi thêm
arr.push(6); // [1, 2, 3, 4, 5, 6];

// pop() -> xóa phần tử cuối mảng -> trả về phần tử cuối mảng đó
arr.pop(); // [1, 2, 3, 4, 5]
console.log(arr);

// ship() -> xóa phần tử đầu mảng và trả về phần tử đầu mảng đó
arr.shift(0); // [ 2, 3, 4, 5]

// unshift() -> thêm phần tử vào đầu mảng -> trả về độ dài mảng sau khi thêm
arr.unshift(0); // [0, 2, 3, 4, 5]

// splice(index,countDeleted,item) -> xóa hoặc thêm phần tử vào mảng -> trả về mảng bị xóa
let listItem = ["css", "js", "php", "bootstrap"];
console.log(listItem.splice(2, 0, "Tailwin", "React")); // []
console.log(listItem); // [ 'css', 'js', 'Tailwin', 'React', 'php', 'bootstrap' ]
console.log(listItem.splice(2, 2)); // [ 'Tailwin', 'React']

let name = ["Vinh", "An", "Hoang"];
console.log(name.splice(1, 1)); // ['An']
console.log(name); // ['Vinh', 'Hoang']

// concat() -> nối mảng, không thay đổi mảng ban đầu

let color = ["red", "green", "blue"];
let width = ["10", "100", "200"];
console.log(color.concat(width)); // [ 'red', 'green', 'blue', '10', '100', '200' ]
console.log(color); // [ 'red', 'green', 'blue' ]

// slice(start,end) -> cắt các phần tử -> ko thay đổi mảng ban đầu
let cars = ["Audi", "Lexus", "Kia"];
console.log(cars.slice(1)); // [ 'Lexus', 'Kia' ]
console.log(cars.slice(-2, -1)); // [ 'Lexus' ]
console.log(cars); // ["Audi", "Lexus", "Kia"]
