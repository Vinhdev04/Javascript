//  Sử dụng reduce() để gom nhóm đối tượng trong object

const item = [
  { name: "Hana", category: "Banana" },
  { name: "Jeny", category: "Apple,Mango" },
  { name: "Jan", category: "Orange" },
  { name: "Alex", category: "Watermelon" },
];
const groupItems = item.reduce((accumulator, item) => {
  const category = item.category;
  if (!accumulator[category]) {
    accumulator[category] = [];
  }
  accumulator[category].push(item.name);
  return accumulator;
});
console.log(groupItems); // Output: Apple,Mango: ['Jeny'], Orange: ['Jan'], Watermelon:['Alex']

// loại bỏ bản sao bằng reduce()phương pháp
const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const noDuplicateItems = items.reduce((accumulator, item) => {
  // kiểm tra xem mảng có chứa 1 giá trị  accumulator
  if (!accumulator.includes(item)) {
    accumulator.push(item); // chưa có thì thêm vào
  }
  return accumulator;
}, []);

console.log(noDuplicateItems); // Output: [ 1, 2, 3, 7, 8 ]
