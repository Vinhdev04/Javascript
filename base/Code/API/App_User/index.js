const listUser = document.getElementById("list");
console.log(listUser);
const search = document.getElementById("search");
console.log(search);
const listItem = [];

const getDataFromAPI = async () => {
  try {
    // Hiển thị "Loading data" trước khi gọi API
    listUser.innerHTML = "Loading data!...";

    // Gọi API
    const response = await fetch("https://randomuser.me/api?results=50");
    const { results } = await response.json();
    console.log(results);

    // Xóa nội dung "Loading data"
    listUser.innerHTML = "";

    // Hiển thị dữ liệu sau 2 giây
    setTimeout(() => {
      results.map((item) => {
        const div = document.createElement("div");
        // push item[div]
        listItem.push(div);
        div.innerHTML = `
          <img src="${item.picture.thumbnail}" alt="${item.name.title}. ${item.name.first} ${item.name.last}" />
          <div class="detail">
            <h3 class="title">${item.name.title}. ${item.name.first} ${item.name.last}</h3>
            <p>${item.email}</p>
          </div>
        `;
        listUser.appendChild(div);
      });
    }, 2000);
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    listUser.innerHTML = "Có lỗi xảy ra khi tải dữ liệu!";
  }
};

getDataFromAPI();

// Filter data
search.addEventListener("input", (e) => filterValue(e.target.value));
function filterValue(searchValue) {
  console.log(searchValue);
  const value = searchValue.toLowerCase();
  listItem.map((item) => {
    if (item.innerText.toLowerCase().includes(value)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
