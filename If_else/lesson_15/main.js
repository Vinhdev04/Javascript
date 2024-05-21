/* Nhập  vào 1 tháng bất kì cho biết tháng đó có bao nhiêu ngày */

let months = Number(prompt("Enter a month: "));
console.log("Month: ", months);
if (!isNaN(months) && months >= 1 && months <= 12) {
  if (
    months == 1 ||
    months == 3 ||
    months == 5 ||
    months == 7 ||
    months == 8 ||
    months == 10 ||
    months == 12
  ) {
    console.log("Month: " + months + " Có 31 ngày");
  } else if (months == 4 || months == 6 || months == 9 || months == 11) {
    console.log("Month: " + months + " Có 30 ngày");
  } else if (months == 2) {
    let years = Number(prompt("Enter a year: "));
    if ((years % 4 == 0 && years % 100 != 0) || years % 400 == 0) {
      console.log("Month: " + months + " Có 29 ngày");
    } else {
      console.log("Month: " + months + " Có 28 ngày");
    }
  }
} else {
  console.log("Vui lòng nhập lại");
}
