const listBtn = document.querySelectorAll(".btn");
const listTitle = document.querySelectorAll(".title");

// function change color button
function changeColorBtn() {
  const colorR = Math.floor(Math.random() * 256);
  const colorG = Math.floor(Math.random() * 256);
  const colorB = Math.floor(Math.random() * 256);

  const setColor = `rgb(${colorR}, ${colorG}, ${colorB})`; // Thêm rgb() vào chuỗi màu
  return setColor;
}

// change color and background button
for (let btn of listBtn) {
  if (btn instanceof HTMLElement) {
    btn.addEventListener("click", function () {
      btn.style.backgroundColor = changeColorBtn(); // Thay đổi màu nền
      btn.style.color = changeColorBtn(); // Thay đổi màu chữ
    });
  }
}

// change color and background title
for (let title of listTitle) {
  if (title instanceof HTMLElement) {
    title.addEventListener("click", function () {
      // title.style.backgroundColor = changeColorBtn(); // Thay đổi màu nền
      // title.style.color = changeColorBtn(); // Thay đổi màu chữ

      // sử dụng this -> tránh lặp
      this.style.backgroundColor = changeColorBtn(); // Thay đổi màu nền
      this.style.color = changeColorBtn(); // Thay đổi màu chữ
    });
  }
}

// sử dụng " this" tránh lặp code
function changeColor() {
  this.style.backgroundColor = changeColorBtn(); // Thay đổi màu nền
  this.style.color = changeColorBtn(); // Thay đổi màu chữ
}

for (let btn of listBtn) {
  btn.addEventListener("click", changeColor);
}
for (let title of listTitle) {
  title.addEventListener("click", changeColor);
}
