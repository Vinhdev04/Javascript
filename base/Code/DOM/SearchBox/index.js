const btnClick = document.querySelector(".btn");
const searchValue = document.querySelector(".search-value");
const inputValue = document.querySelector(".input");
console.log(btnClick);
console.log(searchValue);
console.log(inputValue);

btnClick.addEventListener("click", () => {
  searchValue.classList.toggle("active");
  inputValue.focus();
});

// btnClick.addEventListener("dblclick", () => {
//   input.classList.remove("active");
// });
