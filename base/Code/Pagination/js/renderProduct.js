import { render } from "./api.js";
import { API_PRODUCT } from "./constant.js";
import { params, products } from "./variable.js";

// Bắt đầu quá trình gọi API và render dữ liệu
export const renderProduct = () => {
  console.log("Đang tìm kiếm:", params.q); // Log giá trị tìm kiếm

  // kiểm tra điều kiện người dùng ko chọn danh mục -> tránh việc render giao diện ko có sản phẩm
  let category = "";
  if (params.category !== "") {
    category = `&category=${params.category}`;
  }
  // Gọi API với tham số tìm kiếm,sawpx xếp,phân trang,danh mục
  const api = `${API_PRODUCT}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}${category}`;

  render(api)
    .then((data) => {
      console.log(data); // Kiểm tra dữ liệu trả về từ API
      let items = data.map((item) => {
        return `
          <div class="products__item">
            <div class="products__img">
              <img src="${item.thumbnail}" alt="${item.title}">
              <div class="products__percent">
                Giảm ${item.discountPercentage}%
              </div>
            </div>
            <div class="products__body">
              <h3>${item.title}</h3>
              <div class="products__info">
                <div class="products__price">
                  Giá: ${item.price}$
                </div>
                <div class="products__stock">
                  Số Lượng: ${item.stock}
                </div>
              </div>
              <div class="products__desc">
                <p class="products__rate">
                  ${item.rating}
                  <i class="fa-regular fa-star"></i>
                </p>
                <div class="products__brand">
                  ${item.brand}
                </div>
              </div>
            </div>
          </div>
        `;
      });
      products.innerHTML = items.join(""); // Cập nhật danh sách sản phẩm
    })
    .catch((error) => {
      console.log(error.message); // Log lỗi nếu có
    });
};
