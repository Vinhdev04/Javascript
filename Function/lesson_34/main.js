// Giải phương trình bậc 2: ax^2 + bx + c = 0

// Dùng Function Declaration:
function giaiPTB2(a, b, c) {
  let delta = Math.pow(b, 2) - 4 * a * c;
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Phương trình có 2 nghiệm là: ", x1, x2);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log("Phương trình có nghiệm kép là: ", x1);
  } else {
    console.log("Phương trình vô nghiệm");
  }
}
console.log(giaiPTB2(1, 2, -3)); // x1 = 1, x2 = -3
console.log(giaiPTB2(1, 2, 1)); // x1 = x2 = 1
console.log(giaiPTB2(1, 1, 1)); // vô nghiệm

// Dùng Function Expression:
let resuilt = function (a, b, c) {
  let delta = Math.pow(b, 2) - 4 * a * c;
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Phương trình có 2 nghiệm là: ", x1, x2);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log("Phương trình có nghiệm kép là: ", x1);
  } else {
    console.log("Phương trình vô nghiệm");
  }
};
console.log(resuilt(1, 2, -3)); // x1 = 1, x2 = -3
console.log(resuilt(1, 2, 1)); // x1 = x2 = 1
console.log(resuilt(1, 1, 1)); // vô nghiệm

// Dùng Function Arrows:
let ptb2 = (a, b, c) => {
  let delta = Math.pow(b, 2) - 4 * a * c;
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Phương trình có 2 nghiệm là: ", x1, x2);
  } else if (delta === 0) {
    let x1 = -b / (2 * a);
    console.log("Phương trình có nghiệm kép là: ", x1);
  } else {
    console.log("Phương trình vô nghiệm");
  }
};
console.log(ptb2(1, 2, -3)); // x1 = 1, x2 = -3
console.log(ptb2(1, 2, 1)); // x1 = x2 = 1
console.log(ptb2(1, 1, 1)); // vô nghiệm
