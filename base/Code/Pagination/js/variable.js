export let params = {
  // # mặc định là chuỗi rỗng
  // # mỗi khi onclick button sẻ gán lại value cho q
  q: "",
  sort: "",
  order: "",
  page: 1,
  limit: 10,
  category: "",
};

// export elements
export const products = document.getElementById("products");
export const inputSearch = document.querySelector("#search__value");
export const btn = document.querySelector(".btn");
export const filter = document.querySelector("#filter__select");
export const prevBtn = document.querySelector(".pagination__prev");
export const nextBtn = document.querySelector(".pagination__next");
export const numBtn = document.querySelector(".pagination__nums");
export const categories = document.getElementById("category");
