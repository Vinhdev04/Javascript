// tự định nghĩa reduce2
Array.prototype.reduce2 = function (callback, output) {
  let i = 0;
  // ko truyền initialValue
  if (arguments.length < 2) {
    i = 1;
    output = this[0];
  }
  for (; i < this.length; i++) {
    output = callback(output, this[i], i, this);
  }
  return output;
};

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce2((total, num, index, array) => {
  console.log(
    "🚀 ~ result ~ (total, num, index, array):",
    (total, num, index, array)
  );
  return total + num;
}, 0);
console.log(result);
