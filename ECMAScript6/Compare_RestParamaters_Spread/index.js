// So sánh "Rest parameters" và "Spread"

/* 1. Toán tử rest dùng để gom các phần tử còn lại vào trong một mảng 
        hoặc đối tượng. Nó được sử dụng trong các function
        để thu thập các tham số dư thừa hoặc trong các cấu trúc 
        đối tượng để gom nhóm các thuộc tính còn lại.
*/
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

/* Trong destructuring (rest object/array): 
      thu thập các phần tử còn lại vào trong mảng hoặc đối tượng.
*/

// 1. Với mảng:
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// 2. Với đối tượng:
const { name, age, ...otherInfo } = {
  name: "John",
  age: 30,
  country: "USA",
  city: "NY",
};
console.log(name); // 'John'
console.log(age); // 30
console.log(otherInfo); // { country: 'USA', city: 'NY' }

/* 2. Toán tử spread dùng để tách các phần tử của một mảng 
      hoặc đối tượng thành các phần tử riêng biệt. 
      Nó thường được sử dụng để sao chép mảng/đối tượng 
      hoặc kết hợp các phần tử của mảng/đối tượng.
*/
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Sao chép mảng:
const copy = [...arr1];
console.log(copy); // [1, 2, 3]

const person = { name: "John", age: 30 };
const additionalInfo = { country: "USA", city: "NY" };
const combinedPerson = { ...person, ...additionalInfo };
console.log(combinedPerson); // {name: 'John', age: 30, country: 'USA', city: 'NY'}

// Sao chép đối tượng:
const copiedPerson = { ...person };
console.log(copiedPerson); // {name: 'John', age: 30}

/*

Toán tử Rest(...):
- Gom các phần tử lại thành mảng/đối tượng
- Thường dùng trong hàm, destructuring
- Thu thập các tham số dư thừa (rest parameters) hoặc phần tử còn lại (destructuring)

Toán tử Spread(...):
- Tách các phần tử ra thành các phần tử riêng biệt
- Thường dùng để sao chép hoặc kết hợp mảng/đối tượng
- 	Tách các phần tử trong mảng/đối tượng (spread)
*/
