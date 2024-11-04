export function getSum(a, b) {
  return a + b;
}

export function getAdd(a, b) {
  return a * b;
}

export function getSubtract(a, b) {
  return a - b;
}

export function getDivide(a, b) {
  return a / b;
}

// C1: rename module in exports
export {
  getSum as sumX,
  getAdd as add,
  getSubtract as subtract,
  getDivide as divide,
};
