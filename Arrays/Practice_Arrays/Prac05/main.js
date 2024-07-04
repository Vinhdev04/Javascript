// Bài tập vận dụng;
/* Viết chương trình nhập vào 1 mảng số nguyên gồm n phần tử nhập từ bàn phím:
a. Xuất các giá trị trong mảng
b. Đảo ngược mảng, xuất kết quả
c. Sắp xếp mảng
d. Tính tổng mảng
e. Tìm các số chẵn và tính tổng 
f. Tìm các số lẻ và tính tổng 
h. Thêm phần tử mới vào đầu mảng  
l. Thêm phần tử mới vào cuối mảng 
i. Xóa phần tửu đầu khỏi mảng
k. Xóa phần tử cuối khỏi mảng
g. Nhập 1 ký tự bất kì.Kiểm tra xem có trong mảng hay ko.Nếu có trả về vị trí và ko thì thoát chương trình */

let arr = [];
let n;
while (true) {
  n = Number(prompt(`Nhập số lượng phần tử của mảng(n>0): `));

  if (Number.isInteger(n) && n > 0) {
    break;
  }
}
console.log(`Số lượng phần tử của mảng: ${n}`);

// duyệt mảng
for (let i = 0; i < n; i++) {
  console.log(i);
  let numbers = Number(prompt(`Nhập phần tử thứ: ${i + 1}`));
  arr.push(numbers); // thêm phần tử vào mảng
}
console.log(arr);

// a. Xuất các giá trị trong mảng
console.log(`Các giá trị của mảng: ${arr}`);

// b. Đảo ngược mảng, xuất kết quả
let arrReverse = arr.reverse();
console.log(`Mảng sau khi đảo ngược là: ${arrReverse}`);

// c. Sắp xếp mảng -> dùng sort(arrow function)
let ascending_Order = arr.sort((a, b) => a - b);
console.log(`Mảng sau khi sắp xếp tăng: ${ascending_Order}`);

let descending_Order = arr.sort((a, b) => b - a);
console.log(`Mảng sau khi sắp xếp giảm: ${descending_Order}`);

// d. Tính tổng mảng -> dùng hàm reduce(),for()
let sum = 0;
let getSum = arr.reduce((a, b) => a + b, 0);
console.log(`Tổng của mảng: ${getSum}`);

for (let i = 0; i < n; i++) {
  sum += arr[i];
}
console.log(`Tổng của mảng: ${sum}`);

// e. Tìm các số chẵn và tính tổng -> for(), reduce(),filter()
let countX = 0;
let sumX = 0;

// Cách 1: for()
for (let i = 0; i < n; i++) {
  if (arr[i] % 2 === 0) {
    countX++;
    sumX += arr[i];
  } else {
    console.log(`Không có số chẵn`);
  }
}
console.log(`Số lượng số chẵn: ${countX}`);
console.log(`Tổng các số chẵn: ${sumX}`);

// Cách 2: reduce()

// Sử dụng reduce để tính tổng và đếm số lượng số chẵn
let { sumEven, countEven } = arr.reduce(
  (accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      accumulator.sumEven += currentValue;
      accumulator.countEven++;
    }
    return accumulator;
  },
  { sumEven: 0, countEven: 0 }
);

console.log(`Số lượng số chẵn(reduce()): ${countEven}`);
console.log(`Tổng các số chẵn(reduce()): ${sumEven}`);
// Cách 3: filter()

// Sử dụng filter để lọc các số chẵn
let evenNumbers = arr.filter((value) => value % 2 === 0);

// Tính tổng các số chẵn
let sumY = evenNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// Đếm số lượng số chẵn
let countY = evenNumbers.length;

console.log(`Số lượng số chẵn(filter()): ${countY}`);
console.log(`Tổng các số chẵn(filter()): ${sumY}`);

// f. Tìm các số lẻ và tính tổng -> for(), reduce(), filter()
// Cách 1: for()
let countL = 0;
let sumL = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] % 2 !== 0) {
    countL++;
    sumL += arr[i];
  } else {
    console.log(`Không có số lẻ`);
  }
}
console.log(`Các số lẻ trong mảng: ${countL}`);
console.log(`Tổng các số lẻ: ${sumL}`);

// Cách 2: reduce()

// Sử dụng reduce để tính tổng và đếm số lượng số lẻ
let { getSumL, getCountL } = arr.reduce(
  (accumulator, currentValue) => {
    if (currentValue % 2 !== 0) {
      accumulator.getSumL += currentValue; // Tính tổng các số lẻ
      accumulator.getCountL++; // Đếm số lượng số lẻ
    }
    return accumulator;
  },
  { getSumL: 0, getCountL: 0 } // Giá trị khởi tạo cho accumulator
);

console.log(`Số lượng số lẻ trong mảng (reduce()): ${getCountL}`);
console.log(`Tổng các số lẻ trong mảng (reduce()): ${getSumL}`);

// Cách 3: filter()

// Sử dụng filter() để lọc các số lẻ
let oddNumbers = arr.filter((value) => value % 2 !== 0);

// Tính tổng các số lẻ
let sumOdd = oddNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// Đếm số lượng số lẻ
let countOdd = oddNumbers.length;

console.log(`Số lượng số lẻ trong mảng (filter()): ${countOdd}`);
console.log(`Tổng các số lẻ trong mảng (filter()): ${sumOdd}`);

// h. Thêm phần tử mới vào đầu mảng
let inserArr = arr.unshift(100);
console.log(arr);

// i. Thêm phần tử mới vào cuối mảng
let insertLastArr = arr.push(500);
console.log(arr);

// k. Xóa phần tử đầu  mảng
let removeFirstArr = arr.shift();
console.log(arr);

// l. Xóa phần tử cuối mảng
let removeLastArr = arr.pop();
console.log(arr);

// m. Kiểm tra xem 1 ký tự bất kì có trong mảng hay ko
