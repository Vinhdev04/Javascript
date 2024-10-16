// Bài toán: Bạn hãy viết một đoạn mã Javascript xử lý: Khi click vào chữ "tìm kiếm nâng cao" thì hiển thị chuyên mục, và đồng thời đổi nội dung của của nó lại thành "bỏ tìm kiếm nâng cao".
// nếu click tiếp vào "bỏ tìm kiếm nâng cao" thì sẽ ẩn chuyên mục, và đồng thời chuyển nội dung của nó lại thành "tìm kiếm nâng cao".

// Lấy thẻ search_text và category
const search_text = document.getElementById("show_search_advance");
const category = document.getElementById("search_advance");

// Thêm sự kiện click cho search_text
search_text.onclick = function () {
  if (search_text.innerHTML === "Tìm kiếm nâng cao") {
    category.style.display = "table-row"; // Hiển thị chuyên mục
    search_text.innerHTML = "Bỏ tìm kiếm nâng cao"; // Đổi nội dung
  } else {
    category.style.display = "none"; // Ẩn chuyên mục
    search_text.innerHTML = "Tìm kiếm nâng cao"; // Đổi nội dung
  }
  return false;
};
