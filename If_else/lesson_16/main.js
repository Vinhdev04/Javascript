/* Giải phương trình bậc 2: ax^2 + bx + c = 0 */

let a = Number(prompt("Nhập số a: "));
let b = Number(prompt("Nhập số b: "));
let c = Number(prompt("Nhập số c: "));

let delta = b ** 2 - 4 * a * c;
console.log("Delta = ", delta);

if (a === 0) {
  if (b === 0) {
    if (c === 0) {
      console.log("Phương trình có vô số nghiệm");
    } else {
      console.log("Phương trình vô nghiệm");
    }
  } else {
    let x = -c / b;
    console.log("Phương trình có nghiệm duy nhất x = ", x);
  }
} else {
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Phương trình có 2 nghiệm phân biệt:");
    console.log("x1 = ", x1);
    console.log("x2 = ", x2);
  } else if (delta === 0) {
    let x = -b / (2 * a);
    console.log("Phương trình có nghiệm kép x = ", x);
  } else {
    console.log("Phương trình vô nghiệm");
  }
}
