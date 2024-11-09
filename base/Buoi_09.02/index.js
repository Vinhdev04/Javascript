const keyAPI = "http://localhost:3000/products";

fetch(keyAPI)
  .then((response) => response.json())
  .then((data) => {
    let item = "";
    // Assuming the API returns an object with a "products" array
    data.forEach((items) => {
      item += `
        <div class="product-item">
          <img src="${items.thumbnail}" alt="${items.title}" />
          <h3 class="title">${items.title}</h3>
          <p class="price">${items.price}</p>
        </div>
      `;
    });

    const product = document.querySelector(".products");
    product.innerHTML = item;
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });
