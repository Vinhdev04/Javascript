// DOM Even listener
const btnClick = document.querySelector("button");
console.log(btnClick);

btnClick.addEventListener("click", function (e) {
  // console.log(e.target);
  console.log(Math.random());
});

btnClick.addEventListener("click", function (e) {
  // console.log(e.target);
  console.log(Math.random());
});

setTimeout(function () {
  btnClick.removeEventListener("click", function (e) {
    console.log(e.target);
    console.log(Math.random());
  });
}, 3000);

/* Bài tập: Cho trước thẻ button, hãy viết code JS sao cho mỗi lần click vào button sẽ đổi màu chữ của button lần lượt sang màu red, blue, green và sau 3 giây chỉ đổi màu red và blue (bỏ màu green)
 */
var btnE = document.querySelector("button");
function changeRed() {
  btnE.style.color = "red";
}

function changeBlue() {
  btnE.style.color = "blue";
}

function changeGreen() {
  btnE.style.color = "green";
}
function changeFullColor() {
  switch (btnE.style.color) {
    case "":
    case "green":
      changeRed();
      break;
    case "red":
      changeBlue();
      break;
    case "blue":
      changeGreen();
  }
}
function changeRedBlue() {
  switch (btnE.style.color) {
    case "":
    case "green":
    case "blue":
      changeRed();
      break;
    case "red":
      changeBlue();
  }
}
btnE.onclick = changeFullColor;
setTimeout(function () {
  btnE.onclick = changeRedBlue;
}, 3000);
