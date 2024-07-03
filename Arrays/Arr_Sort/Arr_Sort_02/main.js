// Hàm nhập mảng từ người dùng
function inputArray() {
  const input = prompt("Nhập các số, cách nhau bằng dấu phẩy:"); // Nhập chuỗi số từ người dùng
  const numbers = input.split(",").map(Number); // Tách chuỗi thành mảng các số

  return numbers; // Trả về mảng
}

// Hàm sắp xếp mảng
function sortArray(arr) {
  return arr.sort((a, b) => a - b); // Sắp xếp mảng theo thứ tự tăng dần
}

// Gọi hàm nhập mảng và sắp xếp
const myArray = inputArray();
const sortedArray = sortArray(myArray);

console.log("Mảng sau khi sắp xếp:", sortedArray);
