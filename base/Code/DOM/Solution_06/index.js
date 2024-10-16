const image = document.querySelector("#img");
const btnReplace = document.getElementsByClassName("btn-replace")[0];
const btnReset = document.getElementsByClassName("btn-reset")[0];

const originalImage = image.src;

// Mảng chứa các đường dẫn đến hình ảnh
const images = [
  "avatar-cute-cho-co-nang-nghien-tra-sua.jpg",
  "th.jpg",
  "hinh-avatar-gau-cute.jpg",
  "hinh-anh-cute-ve-meo-1.jpg",
  "ve-tranh-de-thuong-cute-don-gian.jpg",
  "avatar-meo-con-khung-long.jpg",
  "avatar-ga-cute.jpg",
  "21ab6b0e1e09f8739e05dff28de9d87c.jpg",
  "large_1585577152707.jpg",
  "hinh-ve-don-gian-va-de-thuong-nhat.jpg",
  // Thay thế bằng đường dẫn ảnh của bạn
];

// Hàm chọn ngẫu nhiên một hình ảnh từ mảng
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// Thay thế hình ảnh khi nhấn nút thay thế
btnReplace.addEventListener("click", function () {
  const newImage = getRandomImage(); // Lấy ảnh ngẫu nhiên
  image.setAttribute("src", newImage); // Thay đổi nguồn hình ảnh
});

// Đặt lại hình ảnh về ban đầu khi nhấn nút đặt lại
btnReset.addEventListener("click", function () {
  image.setAttribute("src", originalImage); // Đặt lại hình ảnh về ảnh ban đầu
});
