// Window setTimeout() -> chỉ chạy 1 lần nếu muốn chạy nhiều lần dùng setInterval():

// 1. Sử dụng với declaration function:
function printDeclaration() {
  console.log("Declaration...");
}
// printDeclaration();
setTimeout(printDeclaration, 5000);

// 2. Sử dụng với Expression function:
let printExpresssion = function () {
  console.log("Expressions...");
};
setTimeout(printExpresssion, 3000);

// 3. Sử dụng với Arrow function:
let printArrow = () => {
  console.log("Arrows...");
};
setTimeout(printArrow, 3000);

// Sử dụng kết hợp trong cấu trúc setTimeout(function(), delay, params1, params2)
setTimeout(() => {
  console.log("SetTiemout Arrow......");
}, 10000);

setTimeout(function () {
  console.log("SetTimeout Expression...");
}, 10000);

setTimeout(
  function mySetTimeout(nameX) {
    console.log("SetTimeout Declaration..." + nameX);
  },
  10000,
  "Vinh"
);

// clearTimeout()  -> Để xóa thời gian chờ, hãy sử dụng id được trả về từ setTimeout(): -> hủy quá trình thức hiện hàm setTimeout()
let myClearTimeout = setTimeout(function () {
  console.log("ClearTimeout Declaration...");
});
clearTimeout(myClearTimeout); // clear
