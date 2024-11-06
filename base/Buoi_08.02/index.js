// get data API
fetch("https://dummyjson.com/products/category-list")
  // convert json -> js
  .then((response) => response.json())
  .then((data) => {
    let items = "";
    data.forEach((item) => {
      items += `
                <div class="category-item">${item}</div>
              `;
      console.log(item);
    });

    // print data
    console.log(data);

    // render data
    console.log(items);
    const category = document.querySelector("#category");
    category.innerHTML = items;
  });
