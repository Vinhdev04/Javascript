let x = 2;
let y = 3;
let z =  y++ - ++x -1;
//  3 - 3 -1 -> z = -1 -> ++x = 3 -> y++ = 4
console.log(x)
console.log(y)
console.log(z)



let a = 5;
let b = 2;
let c = -1;
let kq = --a + b++ - c-- + 1;

console.log(a) // 4
console.log(b) // 3
console.log(c) // -2
console.log(kq) // z -1
// --a = 4
// 4 + 2 +1 + 1 -> z = 8
// b++  -> 3
// c--  -> -2
