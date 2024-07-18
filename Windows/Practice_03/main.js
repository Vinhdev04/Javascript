// Viết chương trình có tên tiemSince, thông báo người dùng offline x phút....
// ví dụ : bạn đang chat với a, sau đó bạn a offline
// YÊU CẦU: update hiển thị thời gian offline trước 'x giây trước ' 'x phút trước','x ngày trước''x tháng trước''x năm trước'

function getTime(timeSince) {
  let currentTime = new Date();
  console.log("Time now: " + currentTime.getTime());
  // Thời gian chênh lệch
  let timeGap = currentTime - timeSince;

  // Tính số giây và Chuyển thời gian về miliseconds
  let seconds = Math.floor(timeGap / 1000);

  // Tính số phút
  let minutes = Math.floor(seconds / 60);

  // Tính  số giờ
  let hours = Math.floor(minutes / 60);
  // Tính số ngày
  let days = Math.floor(hours / 24);

  // let months;
  // if (
  //   months == 1 ||
  //   months == 3 ||
  //   months == 5 ||
  //   months == 7 ||
  //   months == 8 ||
  //   months == 10 ||
  //   months == 12
  // ) {
  //   months = Math.floor(days / 31);
  // } else if (months == 4 || months == 6 || months == 9 || months == 11) {
  //   months = Math.floor(days / 30);
  // } else {
  //   months = Math.floor(days / 28);
  // }

  // Tính số tháng -> mặc định tháng 30 ngày
  let months = Math.floor(days / 30);

  // Tính số năm
  let years = Math.floor(months / 12);

  // Kiểm tra và in kết quả
  if (years > 0) {
    return `Onlined ${years} năm trước`;
  } else if (months > 0) {
    return `Onlined ${months} tháng trước`;
  } else if (days > 0) {
    return `Onlined ${days} ngày trước`;
  } else if (hours > 0) {
    return `Onlined ${hours} giờ trước`;
  } else if (minutes > 0) {
    return `Onlined ${minutes} phút trước`;
  } else {
    return `Onlined ${seconds} giây trước`;
  }
}

// Gỉa sử thời gian hiện tại = 0 -> miliseconds
let times = 0;
// let times = 1721320343313;
console.log(getTime(times));
