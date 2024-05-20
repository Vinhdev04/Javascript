/* Viết chương trình nhập vào  chiều cao và cân nặng. Tính BMI và xuất ra màn hình:
  BMI < 15 -> quá gầy
  BMI >= 15 -> gầy
  BMI >=16 and BMI < 18.5 -> hơi gầy
  BMI >= 18.5 and BMI < 25 -> bình thường
  BMI >= 25 and BMI < 30 -> hơi béo
  BMI >= 30 and BMI < 35 -> béo
  BMI >= 35 quá béo
  => Công thức tính BMI = cân nặng / (chiều cao * chiều cao) */

let height = parseFloat(prompt("Enter height: "));
let weight = parseFloat(prompt("Enter weight: "));
let resuiltBMI = weight / Math.pow(height, 2);
console.log("BMI = ", resuiltBMI.toFixed(2));
if (resuiltBMI < 15 && resuiltBMI < 16) {
  console.log("BMI = ", resuiltBMI.toFixed(2), "Bạn quá gầy");
} else if (resuiltBMI >= 16 && resuiltBMI < 18.5) {
  console.log("BMI = ", resuiltBMI.toFixed(2), "Bạn hơi gầy");
} else if (resuiltBMI >= 18.5 && resuiltBMI < 25) {
  console.log("BMI = ", resuiltBMI.toFixed(2), "Bạn bình thường");
} else if (resuiltBMI >= 25 && resuiltBMI < 30) {
  console.log("BMI = ", resuiltBMI.toFixed(2), "Bạn hơi béo");
} else if (resuiltBMI >= 30 && resuiltBMI < 35) {
  console.log("BMI = ", resuiltBMI.toFixed(2), "Bạn béo");
} else if (resuiltBMI >= 35) {
  console.log("BMI = ", resuiltBMI.toFixed(2), "Bạn quá béo");
} else {
  console.log("Vui lòng nhập lại !");
}
