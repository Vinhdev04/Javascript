export function sum(a, b, check) {
  let result = a + b;
  console.log(result);

  // checkPositive(result);
  // checkNumber(result);

  check(result);
}
