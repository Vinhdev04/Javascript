// Countdown Timer: Viết chương trình đếm ngược thời gian theo từng giây
// Nếu thời gian chạy về 0 thì thông báo hết thời gian

function Countdown(minutes) {
  alert("Thời gian cảu bạn là: " + minutes + "phút");
  let seconds = minutes * 60; // vd: 1p = 60s

  let getCountDown = setInterval(function () {
    let countMinutes = Math.floor(seconds / 60); // làm tròn xuống số phút vd: 1:03,37333 = 1,8
    let countSeconds = seconds % 60; // ví dụ 65s = 65 % 60 = 5s -> 1p:5s

    // Thêm tiền tố cho số giây nếu < 10 ví dụ: 01,02,...09
    let formatSeconds = countSeconds < 10 ? "0" : "";
    console.log(`${countMinutes}:${formatSeconds}${countSeconds}`);
    if (seconds <= 0) {
      clearInterval(getCountDown); // dừng chạy hàm setInterval()
      alert("Hết thời gian");
    } else {
      seconds--; // giảm seconds
    }
  }, 1000);
}

// Input số phút
let inputTime = Number(prompt("Nhập số phút: "));
Countdown(inputTime);
