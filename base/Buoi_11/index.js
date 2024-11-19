// # Closure (bao đóng) trong javascript

// # 1. closure -> hàm trong hàm
const caculator = () => {
  const sum = (a, b) => {
    return a + b;
  };

  return sum;
};
const result = caculator();
console.log(result(10, 20)); // result = sum(10,20) -> Output: 30

// # 2. có thể sử dụng biến global và local của hàm cha và cảu chính nó
const c = 30;
const caculator2 = () => {
  const c = 20; // c la biến local  caculator2()
  const sum2 = (a, b) => {
    const c = 10; // c la biến local
    return a + b + c; // c la biến global
  };

  return sum2;
};
const res = caculator2();
console.log(res(20, 30)); // Output: 80 -> c la biến global
console.log(res(20, 30)); // Output: 70 -> c la biến local caculator2()
console.log(res(20, 30)); // Output: 60 -> c la biến local sum2()

// # 3. sử dụng object để return nhiều hàm closure
const cal = () => {
  const sumX = (a, b) => a + b;
  const subX = (a, b) => a - b;
  const mulX = (a, b) => a * b;
  const divX = (a, b) => a / b;

  // # sử dụng object return nhiều closure
  return {
    sum: sumX,
    sub: subX,
    mul: mulX,
    div: divX,
  };
};
console.log(cal());
console.log(cal().sum(10, 20)); // 30
console.log(cal().sub(10, 20)); // -10
console.log(cal().mul(10, 20)); // 200
console.log(cal().div(10, 20)); // 0.5

// # 4. closure thay đổi giá trị biến global và local
const info = () => {
  let fullName = "Phạm Công Vinh";

  const getFullName = () => {
    return fullName;
  };

  const setFullName = (str) => {
    fullName = str;
  };

  // return closure
  return {
    get: getFullName,
    set: setFullName,
  };
};

const infoUser = info();
console.log(infoUser);
console.log(infoUser.get()); // Phạm Công Vinh
console.log(infoUser.set("Đặng Tiểu An")); // undefined
console.log(infoUser.get()); //  Đặng Tiểu An
