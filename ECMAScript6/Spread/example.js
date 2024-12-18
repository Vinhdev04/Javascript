// TODO: Spread Syntax:

// # Array -> Spread sẻ cộng dồn
const numOne = [1, 2, 3];
const numTwo = [4, 5, 6];

const mergedNum = [...numOne, ...numTwo];
console.log(mergedNum);

mergedNum.push(7);
console.log(mergedNum);

mergedNum.unshift(0);
console.log(mergedNum);

let myNum = [...mergedNum, 8, 9, 10];
console.log(myNum);

// # Object -> Spread sẻ ghi đè thuộc tính bị trùng nhau
const personOne = { name: "John", age: 30 };
const personTwo = { name: "Alice", age: 25 };

const mergedPerson = { ...personOne, ...personTwo };
console.log(mergedPerson);

const myCarFirst = {
  brand: "Audi",
  total: 200000,
  color: "black",
};

const myCarTwo = {
  brand: "Audi",
  total: 200000,
  color: "white",
};

const myCar = { ...myCarFirst, ...myCarTwo };
console.log(myCar);
