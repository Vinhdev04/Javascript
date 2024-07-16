// Javascript setInterval Explained _ Hiểu rõ setInterval

// setInterval(function,  milliseconds,params1, params2) -> giúp thức hiện một hàm lặp đi lặp lại sau 1 khoảng thời gian cố định

// 1. Sử dụng với declarations function:
function printSetInterVal() {
  alert("Bạn có xxx tin nhắn chưa đọc.");
}
setInterval(printSetInterVal, 2000);

// 2. Sử dụng với Expression function:
let printSetInterValEx = function () {
  prompt("Bạn có thông báo mới từ xxx");
};
setInterval(printSetInterValEx, 5000);

// 3. Sử dụng với Arrow Function:
let printSetInterValAr = () => {
  console.log("Admin muốn gửi tin nhắn cho bạn.");
};
setInterval(printSetInterValAr, 6000);

// Sử dụng kết hợp trong setInterval(function,millisecond,param1,param2)
setInterval(
  function (yourName) {
    console.log("Bạn có tin nhắn mới từ " + yourName);
  },
  2000,
  "Vinaphones"
);

setInterval(function myFunction() {
  prompt("Vui lòng nhập lại số điện thoại: ");
}, 4000);

setInterval(() => {
  console.log("You are right !");
}, 1000);

setInterval(function upDateTime() {
  let myHours = new Date();
  console.log(myHours);
}, 1000);

let counter = 0;
setInterval(() => {
  counter++;
  console.log("Counter: " + counter);
}, 1000);
