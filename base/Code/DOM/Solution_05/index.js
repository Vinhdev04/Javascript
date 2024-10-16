const content = document.querySelector(".content");
console.log("🚀 ~ content:", content);
const btnShowFirst = document.querySelector("#btn_show_one");
console.log("🚀 ~ btnShowFirst:", btnShowFirst);
const btnShowSecond = document.querySelector("#btn_show_two");
console.log("🚀 ~ btnShowSecond :", btnShowSecond);

let currentContent = ""; // Biến lưu trữ nội dung hiện tại

btnShowFirst.addEventListener("click", function () {
  if (currentContent === "first") {
    content.style.display = "none";
    currentContent = ""; // Đặt lại trạng thái
  } else {
    content.innerHTML =
      "Tình yêu là một cảm xúc sâu sắc, một sự kết nối đặc biệt giữa hai người. Nó mang lại niềm vui, hạnh phúc và sự an ủi, nhưng cũng có thể chứa đựng nỗi buồn và thử thách. Tình yêu không chỉ là sự lãng mạn; nó còn là sự thấu hiểu, tôn trọng và chia sẻ. Khi yêu, chúng ta học cách quan tâm đến người khác, đặt nhu cầu của họ lên trên chính mình và cùng nhau vượt qua mọi khó khăn. Tình yêu là hành trình khám phá và trưởng thành, nơi mà mỗi khoảnh khắc đều đáng trân trọng.";
    content.style.display = "flex"; // Hiển thị nội dung
    currentContent = "first"; // Cập nhật trạng thái
  }
});

btnShowSecond.addEventListener("click", function () {
  if (currentContent === "second") {
    content.style.display = "none";
    currentContent = ""; // Đặt lại trạng thái
  } else {
    content.innerHTML =
      "Thất tình là một trải nghiệm đau đớn và khó khăn, thường để lại những vết thương trong trái tim. Nó không chỉ là sự mất mát của một mối quan hệ, mà còn là nỗi cô đơn và sự hoang mang khi phải đối diện với cảm xúc của chính mình. Thất tình khiến ta cảm thấy như thế giới sụp đổ, niềm tin vào tình yêu bị lung lay. Tuy nhiên, từ những nỗi đau ấy, ta cũng học được cách trưởng thành, hiểu rõ hơn về bản thân và giá trị của tình yêu thật sự. Thời gian sẽ dần lành lại những vết thương, và từ những trải nghiệm đó, ta có thể tìm thấy sức mạnh để yêu thương một lần nữa.";
    content.style.display = "flex"; // Hiển thị nội dung
    currentContent = "second"; // Cập nhật trạng thái
  }
});
