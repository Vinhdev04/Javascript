import { renderProduct } from "./renderProduct.js";
import {
  params,
  btn,
  inputSearch,
  filter,
  prevBtn,
  nextBtn,
  numBtn,
} from "./variable.js";

// ------------------ Render Product --------------------------------
renderProduct();

// ------------------ Search Product --------------------------------
const search = () => {
  // Gán lại giá trị cho object q ở file variable.js
  params.q = inputSearch.value;
  console.log("Gía trị hiện tại đang tìm kiếm: ", params.q); // Thêm log này để kiểm tra

  // Render lại dữ liệu
  renderProduct();
};

// # lắng nghe sự kiện click button
btn.addEventListener("click", function () {
  search();
  inputSearch.value = "";
});

// # lắng nghe sự kiện nhập vào input search và ENTER
inputSearch.addEventListener("keydown", function (e) {
  if (e.key === "ENTER") {
    search();
    inputSearch.value = "";
  }
});

// ------------------ Filter Product --------------------------------

console.log(filter);

filter.addEventListener("change", function (e) {
  console.log(e.target.value);
  switch (e.target.value) {
    case "default":
      // Thiết lập lại giá trị mặc định của sort và order
      params.sort = "";
      params.order = "";
      break;
    case "low-high":
      // Sắp xếp theo giá từ thấp đến cao
      params.sort = "price";
      params.order = "asc";
      break;
    case "high-low":
      // Sắp xếp theo giá từ cao đến thấp
      params.sort = "price";
      params.order = "desc";
      break;
    case "Rating":
      // Sắp xếp theo rating từ thấp đến  cao
      params.sort = "rating";
      params.order = "asc";
      break;
    default:
      // Nếu giá trị không khớp, không thay đổi gì
      break;
  }
  renderProduct(); // Gọi lại hàm render sau khi cập nhật params
});

// ------------------ Pagination Product --------------------------------

prevBtn.addEventListener("click", function (e) {
  if (params.page > 1) {
    params.page -= 1; // Giảm page một cách ngắn gọn
    numBtn.innerHTML = params.page; // Cập nhật hiển thị
    numBtn.classList.add("pagination__nums--active"); // Cập nhật class cho nút active
    renderProduct(); // Render lại sản phẩm sau khi thay đổi page
  }
});

nextBtn.addEventListener("click", function (e) {
  params.page += 1; // Tăng page một cách ngắn gọn
  numBtn.innerHTML = params.page; // Cập nhật hiển thị
  numBtn.classList.add("pagination__nums--active"); // Cập nhật class cho nút active
  renderProduct(); // Render lại sản phẩm sau khi thay đổi page
});
