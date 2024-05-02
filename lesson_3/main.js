//  Toán tử số học (Arithmetic):
let x = 5;
let y = 2;

let c = x + y;
let d = x - y;
let e = x * y;
let f = x / y;
let g = x % y;
let h = x ** y;

console.log(`${x} + ${y} = ${c}`);
console.log(`${x} - ${y} = ${d}`);
console.log(`${x} * ${y} = ${e}`);
console.log(`${x} / ${y} = ${f}`);
console.log(`${x} % ${y} = ${g}`);
console.log(`${x} ** ${y} = ${h}`);

console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

// Toán tử gán (Assigment):
let xA = 10;
xA += 5;
console.log(xA);

xA -= 5;
console.log(xA);

xA *= 5;
console.log(xA);

xA /= 5;
console.log(xA);

xA %= 5;
console.log(xA);

// Toán tử so sánh (Comparison):
let x1 = 100;
let x2 = 200;
if (x1 > x2) {
  console.log(x1);
} else {
  console.log(x2);
}

//   Toán tử logic (Logical):
let i = 100;
console.log(i > 10 && i > 99);
console.log(i > 1 || i <= 100);
console.log(!(i > 10 && i > 99));
