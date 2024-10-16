// Lấy các phần tử
const btnShow = document.querySelector("#btn_show");
const btnHide = document.querySelector("#btn_hide");
const showModel = document.querySelector("#content");

// Biến trạng thái
let isVisible = false;

// Kiểm tra sự tồn tại của các phần tử
if (btnShow && btnHide && showModel) {
  // Thêm sự kiện click cho nút hiển thị
  btnShow.addEventListener("click", () => {
    if (isVisible) {
      // Nếu phần tử đang hiển thị, ẩn nó đi
      showModel.style.display = "none";
      isVisible = false; // Cập nhật trạng thái
    } else {
      // Nếu phần tử không hiển thị, hiển thị nó
      alert("Chào mừng bạn đến với pcv.net");
      showModel.style.display = "flex"; // Hiển thị phần tử
      isVisible = true; // Cập nhật trạng thái
    }
  });

  // Thêm sự kiện click cho nút ẩn
  btnHide.addEventListener("click", () => {
    showModel.style.display = "none"; // Ẩn phần tử
    isVisible = false; // Cập nhật trạng thái
  });
} else {
  console.error("Một hoặc nhiều phần tử không tồn tại trong DOM.");
}
