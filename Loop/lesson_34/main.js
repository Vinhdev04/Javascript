// For of Object
let languages = {
  JavaScript: "ECMAScript",
  TypeScript: "TypeScript",
  Python: "Python",
  Ruby: "Ruby",
  Rust: "Rust",
};

// Lấy dữ liệu từ objects key
console.log(Object.keys(languages));

// for (let key of languages) {
//   // console.log(key); // is not iterable
// }

for (let key of Object.keys(languages)) {
  console.log(key);
  console.log(languages[key]);
}

// Lấy dữ liệu từ objects value
console.log(Object.values(languages));
for (let value of Object.values(languages)) {
  console.log(value);
  console.log(languages[value]);
}

// For of String
let helloX = "HelloWorld";
for (let charX of helloX) {
  console.log(charX);
}

// For of Array
let classX = ["22DTHG8", "22DTHG9", "23DTH01"];
for (let className of classX) {
  console.log(className);
}
