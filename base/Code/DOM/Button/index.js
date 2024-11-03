const listBtns = document.querySelectorAll(".btn");
console.log(listBtns);

listBtns.forEach((btns) => {
  btns.addEventListener("click", function (e) {
    // lấy tọa độ của button
    const btnRect = e.target.getBoundingClientRect();
    console.log(btnRect);

    // lấy tọa độ chuột click so với viewport
    const x = e.clientX;
    const y = e.clientY;
    console.log(x);
    console.log(y);

    // tính tọa độ chuột so với button
    const xInside = x - btnRect.left;
    const yInside = y - btnRect.top;
    console.log(xInside);
    console.log(yInside);

    // tạo thẻ span và thêm class circle
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    // thêm hình tròn
    this.appendChild(circle);
    // xóa hình tròn sau khi hoàn tất animation
    setTimeout(() => circle.remove(), 500);
  });
});
