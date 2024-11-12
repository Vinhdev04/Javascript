// Enhanced object literals
// 1. Định nghĩa key: value cho Object một cách ngắn gọn hơn
// 2. Định nghĩa method cho Object
// 3. Định nghĩa key cho object dưới dạng biến

let name = "UI/UX";
let price = 10000;

let product = {
  // key: value
  name: name,
  price: price,
};
console.log(product); // Output: { name: 'UI/UX', price: 10000 }

// 1. Sử dụng Enhanced object -> Định nghĩa key: value cho Object một cách ngắn gọn hơn
let productEnhanced = {
  name,
  price,
};
console.log(productEnhanced); // Output: { name: 'UI/UX', price: 10000 }

// 2. Định nghĩa method cho Object
let productEnhaced2 = {
  name,
  price,
  getName() {
    return name;
  },
};
console.log(productEnhaced2.getName()); // Output: UI/UX

// 3. Định nghĩa key cho object dưới dạng biến
let fullName = "name";
let products = "product";

const course = {
  [fullName]: "Materia",
  [products]: "UI/UX",
};
console.log(course); // Output: { name: 'Materia', product: 'UI/UX' }
