// Cách 1: get data
fetch("https://dummyjson.com/products?sortBy=title&order=asc")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.products);
    let items = "";
    data.products.forEach((item) => {
      items += `
              <div class="product-item">
              <img src="${item.thumbnail}" alt="${item.title}" />
              <h3 class="title">${item.title}</h3>
              <p class="price">${item.price}</p>
    </div>
      `;
    });
    const product = document.querySelector("#products");
    product.innerHTML = items;
  });

// Cách 2: create function get API
const fetchAPI = (url) => {
  const result = fetch(url) // truyền url API
    .then((response) => response.json()) // convert json -> js
    .then((data) => {
      return data;
    });
  return result;
};
fetchAPI("https://dummyjson.com/products?sortBy=title&order=asc").then(
  (data) => {
    console.log(data);
    let items = "";
    data.products.forEach((item) => {
      items += `
              <div class="product-item">
              <img src="${item.thumbnail}" alt="${item.title}" />
              <h3 class="title">${item.title}</h3>
              <p class="price">${item.price}</p>
    </div> 
      `;
    });
    const product = document.querySelector("#products");
    product.innerHTML = items;
  }
);
