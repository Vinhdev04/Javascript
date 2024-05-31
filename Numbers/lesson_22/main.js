// Bài tập vận dụng Number
function isNumber(value) {
  // return typeof value === "number";
  if (value === Number(value)) return true;
  return false;
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber("abc")); // false
console.log(isNumber("100")); // false

function isNumber(value) {
  return typeof value === "number" && isNaN(value) !== true;
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber("abc")); // false
console.log(isNumber("100")); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / "abc")); // false
