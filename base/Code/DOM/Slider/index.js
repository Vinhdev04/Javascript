const images = document.querySelectorAll(".panel");
console.log(images);

images.forEach((item) => {
  item.addEventListener("click", function () {
    removeActive();
    item.classList.add("active");
  });
});

function removeActive() {
  images.forEach((item) => {
    item.classList.remove("active");
  });
}
