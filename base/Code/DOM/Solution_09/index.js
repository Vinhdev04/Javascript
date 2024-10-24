// DOM Events

// Xử lý nghiệp vụ với:
// 1. Input / selected
// 2. Key up / down

// lấy value thẻ input
const inputElement = document.querySelector('input[type= "text"]');
console.log(inputElement);

// Xử lý khi input thay đổi
// onchange -> chạy khi bỏ focus input, chỉ lấy value != value hiện tại
inputElement.onchange = function (e) {
  console.log(e.target.value);
};

//oninput -> lấy value trực tiệp khi gõ
inputElement.oninput = function (e) {
  console.log(e.target.value);
};

// xử lý với checkbox
const checkboxElement = document.querySelector('input[type= "checkbox"]');
console.log(checkboxElement);

var check;
checkboxElement.onchange = function (e) {
  check = e.target.checked;
};

// xử lý với select check
const selectElement = document.querySelector("select");
console.log(selectElement);

selectElement.onchange = function (e) {
  console.log(e.target.value); // in ra value của option
};

// 2. Xử lý keyup / keydown
const mailElement = document.querySelector('input[type= "email"]');
console.log(mailElement);
// mailElement.onkeydown = function (e) {
//   console.log(e.target.value);
// };
mailElement.onkeyup = function (e) {
  console.log(e.target.value);
  console.log(e.which); // xác định phím thông qua mã ASCII

  switch (e.which) {
    case 27:
      alert("Do you want exit?");
      break;
  }
};

document.onkeydown = function (e) {
  console.log(e.which);

  switch (e.which) {
    case 27:
      console.log("Do you want exit?");
      break;
  }
};
