let dtb = Number(prompt("Enter a number: "));
if (dtb <= 10 && dtb >= 8) {
  console.log("Gioi");
} else if (dtb >= 6.5 && dtb < 8) {
  console.log("Kha");
} else if (dtb >= 5 && dtb < 6.5) {
  console.log("TB");
} else if (dtb >= 0 && dtb < 5) {
  console.log("Yeu");
} else {
  console.log("Nhap lai");
}
