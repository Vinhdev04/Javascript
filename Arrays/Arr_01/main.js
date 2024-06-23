/* --------------- Tìm hiểu về Arrays in Js -------------------- */

let languages = ["Html", "JavaScript", "Css", "Python"];
console.log(languages);
console.log(typeof languages); // object
console.log(Array.isArray(languages)); // true

let language = new Array("Html", "JavaScript", "Css", "Python");
console.log(language);
console.log(typeof language); // object

// Khởi tạo mảng rỗng
let emptyArray = [];

// Mảng chứa các số nguyên
let numbers = [1, 2, 3, 4, 5];

// Mảng chứa chuỗi
let fruits = ["apple", "banana", "orange"];

// Mảng chứa các giá trị khác nhau (kiểu dữ liệu đa dạng)
let mixedArray = [1, "hello", true, { name: "John" }];
console.log(mixedArray);

// Tạo mảng từ một chuỗi
let strArray = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
console.log(strArray);

// Tạo mảng từ một đối tượng iterable
let set = new Set([1, 2, 3, 4, 5]);
let arrayFromSet = Array.from(set); // [1, 2, 3, 4, 5]
console.log(arrayFromSet);
console.log(Array.isArray(arrayFromSet)); // true

/* --------- Làm việc với mảng ----------------- */
// 1. To String

let isName = ["Vinh", "Khánh An", "Tuệ Nhi", "Dung", "Thường", "Nam", "Dung"];
console.log(isName);
console.log(typeof isName); // Object
console.log(isName.toString()); // String

// 2. Join -> tương tự split () trong String
console.log(isName.join(" "));
console.log(isName.join("-"));

// 3. Pop -> xóa phần tử cuối mảng và trả về phần tử đó
console.log(isName.pop()); // mảng chỉ còn ['DUNG']
console.log(isName); // Vinh', 'Khánh An', 'Tuệ Nhi', 'Dung', 'Thường', 'Nam;

// 4. Push -> thêm vào đàu mảng và trả vè mảng sau khi thêm
console.log(isName.push("JAVA", "HTML"));

// 5. Shift -> xóa phần tử cuối mảng và trả về phần tử xóa
console.log(isName.shift()); // mảng còn [VINH]

// 6. Unshift -> Thêm vào đàu mảng và trả về mảng sau khi thêm
console.log(isName.unshift("CSS"));

// 7. Splicing
// Xóa theo index(start, delet_Count)
console.log(isName.splice(1, 1));
// console.log(isName.splice(1, 2));
// console.log(isName.splice(1, 0)); -> ko xóa
console.log(isName);

// Thêm (x,y,z) -> x: vị trí , y: số lượng cần thêm, xóa, z: tên cần thêm
console.log(isName.splice(1, 0, "Dark"));
// console.log(isName.splice(1, 1, "Dark"));
// console.log(isName.splice(1, 2, "Dark"));
console.log(isName);

// 8. Concat -> nối mảng
let language2 = ["Mon", "Bu", "Ana"];
console.log(language.concat(language2));

// 9. Slice -> lấy phần tử trong mảng slice(start,end)
// console.log(language2.slice(0)); // copy mảng
console.log(language2.slice(1));
console.log(language2.slice(1, 1));
console.log(language2.slice(-1, 0)); // Lấy dữ liệu
