/* Nhập vào 1 năm kiểm tra năm nhuận
  => Công thức: ((n %4 == 0) && (n % 100 != 0)) || (n % 400 ==0)
 */

let years = Number(prompt("Enter years: "));
console.log("Years: ", years);
if ((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0) {
  console.log("Year: ", years, "là năm nhuận");
} else {
  console.log("Year: ", years, "không phải là năm nhuận");
}
