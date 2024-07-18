// Viết chương trình nhập vào năm sinh và in ra số tuổi
// Kiểm tra xem input có hợp lệ ko (số nguyên và > 0)

// hàm tính tuổi
function calculatorAge(inputYears) {
  // ép kiểu dữ liệu cho biến years
  let years = Number(inputYears);
  // In ra xem kết quả
  console.log(years);
  // Kiểm tra điều kiện: số nguyên dương và lớn hơn 0
  if (!Number.isInteger(years) || years <= 0) {
    alert("Year is not a number !");
    return;
  }

  // In năm hiện tại
  let currentYear = new Date().getFullYear();
  alert(`Current year is ${currentYear}`);

  // In tuổi hiện tại
  let currentAges = currentYear - years;
  alert(`Current age is: ${currentAges}`);
}

// Nhập dữ liệu và callback
let inputYears = prompt("Enter your year: ");
calculatorAge(inputYears);
