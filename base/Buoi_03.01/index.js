// Condition
let a = 1;
let b = 2;
if (a > b) {
  console.log("true...");
} else {
  console.log("false...");
}

let score = 4;
if (score > 5) {
  console.log("TB");
} else if (score > 7) {
  console.log("Kha");
} else if (score > 8) {
  console.log("Gioi");
} else {
  console.log("Yeu");
}

let x;
let y;
if (x != undefined && y != undefined) {
  if (x === y) console.log("x === y");
  else console.log("x !== y");
} else {
  console.log("x || y === undefined");
}

let z = 10;
let d = 20;
let result = z > d ? "z > d" : "z < d";
console.log(result);

// Switch case
let month = Number(prompt("Enter month: "));
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid month");
    break;
}
