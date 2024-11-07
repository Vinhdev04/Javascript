const postAPI = "https://jsonplaceholder.typicode.com/posts";

fetch(postAPI)
  .then((response) => {
    return response.json();
  })
  .then((posts) => {
    console.log(posts);
    const block = posts.map(function (respon) {
      return `<li>
                  <span>${respon.id}</span>
                  <h2>${respon.title}</h2>
                  <p>${respon.body}</p>
            </li>`;
    });
    const listItem = document.querySelector("#post");
    listItem.innerHTML = block.join(""); // nối chuỗi
  })
  .catch((error) => {
    console.log(error);
  });
