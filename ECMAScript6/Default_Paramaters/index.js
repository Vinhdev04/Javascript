// Default Parameter value

// Trước kia
function printName(name) {
  if (name === undefined || name === "") {
    name = "Unknown";
  }
  console.log(name);
}

printName(); // Output: ohn Doe

// Sau phiên bản ES6

function printName(name = "Unknown") {
  console.log(name);
}

printName(); // Output: Unknown
printName("Vinh"); // Output: Vinh

// -> Chỉ sử dụng khi có những tham số không băt buộc nhập
// -> (thường ở sau tham số thứ nhất)

function getType(name, type = "sign") {
  console[type](name);
}

getType("Vinh"); // Output: console.log("Vinh")
getType("Vinh", "warn"); // Output: console.warn("Vinh")
