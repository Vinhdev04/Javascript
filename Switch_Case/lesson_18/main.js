// Switch case
let numA = 2;
switch (numA % 2) {
  case 0:
    console.log("Số chẵn");
    break;
  case 1:
    console.log("Số lẻ");
    break;
  default:
    console.log("Không hợp lệ ");
    break;
}

// Practice
let months = Number(prompt("Enter months: "));
switch (months) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Month: ", months, "Có 31 ngày");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Month: ", months, "Có 30 ngày");
    break;
  case 2:
    let years = Number(prompt("Enter a year: "));
    if ((years % 4 == 0 && years % 100 != 0) || years % 400 == 0) {
      console.log("Month: ", months, "Có 29 ngày");
    } else {
      console.log("Month: ", months, "Có 28 ngày");
    }
    break;
  default:
    console.log("Vui lòng nhập lại");
    break;
}
