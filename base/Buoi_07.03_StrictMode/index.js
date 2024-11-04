// Strict mode

// a = 10;
// console.log(a); //  10

// global
("use strict");
a = 10;
console.log(a); //  a is not defined

b = 30;
console.log(b); // 30
function test() {
  // local
  "use strict";
  x = 20;
  console.log(x); //  x is not defined
}
test();
