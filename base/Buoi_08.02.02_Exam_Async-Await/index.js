// const fetchAPI = (url) => {
//   const result = fetch(url) // truyền url API
//     .then((response) => response.json()) // convert json -> js
//     .then((data) => {
//       return data;
//     });
//   return result;
// };

// fetchAPI("https://dummyjson.com/products?sortBy=title&order=asc").then(
//   (data) => {
//     console.log(data);
//     let items = "";
//     data.products.forEach((item) => {
//       items += `
//               <div class="product-item">
//               <img src="${item.thumbnail}" alt="${item.title}" />
//               <h3 class="title">${item.title}</h3>
//               <p class="price">${item.price}</p>
//     </div>
//       `;
//     });
//     const product = document.querySelector("#products");
//     product.innerHTML = items;
//   }
// );

// Sử dụng async/await cải tiến code
// const fetchAPIWithAsyncAndAwait = async (url) => {
//   const result = await fetch(url);
//   console
//     .log(result)
//     .then((respon) => respon.json())
//     .then((data) => {
//       return data;
//     });
//   return result;
// };

// fetchAPIWithAsyncAndAwait(
//   "https://dummyjson.com/products?sortBy=title&order=asc"
// ).then((data) => {
//   console.log(data);
//   let items = "";
//   data.forEach((item) => {
//     items += `
//               <div class="product-item">
//                 <img src="${item.thumbnail}" alt="${item.title}" />
//                 <h3 class="title">${item.title}</h3>
//                 <p class="price">${item.price}</p>
//               </div>
//             `;
//   });
//   const product = document.querySelector("#products");
//   product.innerHTML = items;
// });

// Hàm lấy dữ liệu từ API sử dụng async/await
const fetchAPIWithAsyncAndAwait = async (url) => {
  try {
    // Gọi API và chờ đợi kết quả
    const response = await fetch(url);

    // Chuyển đổi dữ liệu trả về thành JSON
    const data = await response.json();

    // Trả về dữ liệu JSON
    console.log(data.products);
    return data;
  } catch (error) {
    // Nếu có lỗi trong quá trình fetch hoặc chuyển đổi dữ liệu, in lỗi ra console
    console.error("Error fetching data:", error);
  }
};

// Hàm hiển thị danh sách sản phẩm lên giao diện
const displayProducts = async () => {
  // Gọi hàm fetchAPIWithAsyncAndAwait và chờ đợi kết quả
  const data = await fetchAPIWithAsyncAndAwait(
    "https://dummyjson.com/products?sortBy=title&order=asc"
  );

  // Kiểm tra xem dữ liệu trả về có hợp lệ và chứa sản phẩm hay không
  if (data && data.products) {
    let items = "";

    // Lặp qua từng sản phẩm và tạo HTML cho từng sản phẩm
    data.products.forEach((item) => {
      items += `
        <div class="product-item">
          <img src="${item.thumbnail}" alt="${item.title}" />
          <h3 class="title">${item.title}</h3>
          <p class="price">${item.price}</p>
        </div>
      `;
    });

    // Tìm phần tử có id là #products trong DOM và cập nhật nội dung HTML
    const productContainer = document.querySelector("#products");
    productContainer.innerHTML = items;
  } else {
    // Nếu không có sản phẩm, in ra lỗi
    console.error("No products data available");
  }
};

// Gọi hàm displayProducts để bắt đầu hiển thị sản phẩm
displayProducts();
