import { render } from "./api.js";
import { API_PRODUCT } from "./constant.js";
import { renderProduct } from "./renderProduct.js";
import { params, categories } from "./variable.js";

console.log("🚀 ~ categories:", categories);

// # Bắt đầu quá trình gọi API và render dữ liệu
render(API_PRODUCT)
  .then((data) => {
    console.log(data);
    let items = data.map((item) => {
      return `
        <div class="category__item" data-category="${item.category}">
          ${item.category}
        </div>
      `;
    });
    categories.innerHTML = items.join("");

    // lưu ý phải đợi fetch api và render sp ra giao diện
    // tránh việc undefined do cơ chế bất đồng bộ
    // # show danh mục các sản phẩm
    const list = document.querySelectorAll("#category .category__item");
    console.log(list);
    list.forEach((item) => {
      console.log(item);
      item.addEventListener("click", () => {
        params.category = item.dataset.category;
        console.log(params);
        renderProduct();
      });
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
