function updateTime() {
  // Initial new date
  const d = new Date();

  // Chèn vào đầu nếu ko đủ 2 kí tự
  const hour = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const seconds = String(d.getSeconds()).padStart(2, "0");

  // const prefixDate = d.getDate() < 10 ? "0" : "";
  // const prefixMinute = d.getDate() < 10 ? "0" : "";
  const time = `${hour}: ${minutes}: ${seconds}`;
  console.log(time);

  const showTime = document.getElementById("clock");
  console.log(showTime);
  showTime.innerHTML = time;
}
setInterval(function (e) {
  updateTime(); // Call function to update time every second
}, 1000);
