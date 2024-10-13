// DOM Events Listener -> tương tự DOM Event nhưng khác:
// Một element có thể gọi nhiều sự kiện
// Có thể hủy bỏ lắng nghe sự kiện bất kỳ
// Syntax: element.addEventListener("eventName", function(e) ){}
// Lưu ý: tên eventName bỏ "on" -> Ví dụ onclick -> click

const btn = document.querySelector("#btn");
console.log(btn);

// làm theo hướng DOM Event -> chỉ có thể lắng nghe ko thể hủy sự kiện và ko thể gọi nhiều sự kiện
function GetFunction01() {
  console.log("Function 01 called");
}
function GetFunction02() {
  console.log("Function 02 called");
}
btn.onclick = function () {
  GetFunction01();
};
// // Tách ra chỉ có thể chạy được function 02
btn.onclick = function () {
  GetFunction02();
};

// làm theo hướng DOM Event Listener -> có thể lắng nghe, hủy sự kiện và gọi nhiều sự kiện
btn.addEventListener("click", function (e) {
  GetFunction01();
  GetFunction02();
});

// Có thể tách ra và chạy đồng thời cả 2 function
btn.addEventListener("click", function (e) {
  GetFunction01();
});

btn.addEventListener("click", function (e) {
  GetFunction02();
});

// hủy bỏ lắng nghe sự kiện bất kì
setInterval(() => {
  btn.removeEventListener("click", GetFunction01());
}, 2000);
