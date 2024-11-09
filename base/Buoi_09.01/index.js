const keyAPI = "https://dummyjson.com/products";

fetch(keyAPI)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.products);
    let item = "";
    data.products.forEach((product) => {
      item += `
        <div class="product-item">
          <img src="${product.thumbnail}" alt="${product.title}" />
          <h3 class="title">${product.title}</h3>
          <p class="price">${product.price}</p>
        </div>
      `;
      document.getElementById("products").innerHTML += item;
    });
  });
