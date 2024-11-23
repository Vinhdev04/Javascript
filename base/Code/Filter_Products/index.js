const apiKey = "https://fakestoreapi.com/products";
const products = document.querySelector(".products");
const filterPrice = document.getElementById("select__filter");
const inputSearch = document.getElementById("filter__input");

// Hàm render sản phẩm
function getAPI(data) {
  let items = data.map((item) => {
    return `
        <div class="item">
          <img src="${item.image}" alt="" class="img" />
          <div class="info">
            <h4 class="info__title">${item.title}</h4>
          </div>
          <div class="info__desc">
            <span class="desc">${item.category}</span>
          </div>
          <div class="info__price">
            <span class="price">$${item.price}</span>
          </div>
          <div class="info__control">
            <button class="info__btn">Buy Now</button>
          </div>
        </div>
      `;
  });
  products.innerHTML = items.join("");
}

// Hàm lọc sản phẩm theo giá
function sortProducts(data, sortBy, order) {
  if (sortBy === "price") {
    return data.sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else if (order === "desc") {
        return b.price - a.price;
      }
      return 0;
    });
  }
  return data;
}

// Hàm fetch dữ liệu từ API
async function fetchData() {
  try {
    const response = await fetch(apiKey); // Sử dụng await để đợi dữ liệu
    const data = await response.json(); // Chuyển dữ liệu thành JSON
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Lọc theo giá khi chọn trong select
filterPrice.addEventListener("change", async function (e) {
  const value = e.target.value;
  let sortBy = "";
  let order = "";

  switch (value) {
    case "default":
      sortBy = "";
      order = "";
      break;
    case "low-to-high":
      sortBy = "price";
      order = "asc";
      break;
    case "high-to-low":
      sortBy = "price";
      order = "desc";
      break;
  }

  const data = await fetchData(); // Lấy dữ liệu từ API
  const sortedData = sortProducts(data, sortBy, order); // Sắp xếp dữ liệu
  getAPI(sortedData); // Hiển thị sản phẩm
});

// Hàm lọc sản phẩm theo tên
function filterProduct() {
  let filterValue = inputSearch.value.toUpperCase();
  let items = document.querySelectorAll(".item");

  items.forEach((item) => {
    let title = item.querySelector(".info__title");

    // Kiểm tra nếu tên sản phẩm chứa từ khóa tìm kiếm
    if (title && title.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// Lắng nghe sự kiện tìm kiếm theo tên sản phẩm
inputSearch.addEventListener("keyup", filterProduct);

// Lấy sản phẩm ban đầu và hiển thị
async function start() {
  const data = await fetchData(); // Lấy dữ liệu từ API
  getAPI(data); // Hiển thị sản phẩm ban đầu
}

// Gọi hàm để bắt đầu
start();
