// BOM -> Browser Object Model -> các đối tượng liên quán đến trình duyệt => Giúp lưu trữ lịch sử web,hành động,trạng thái của user

// 1. Window -> Là 1 object có những phương thức và thuộc tính ,xử lý trên trình duyệt (cấp độ cao nhất)
console.log(window.innerHeight);
console.log(window.innerWidth);

function openTab() {
  // window.open(url,name_web,options)
  window.open("https://www.google.com", "_blank");
}

function closeTab() {
  window.close();
}

function getInfor() {
  let info = window.location;
  // lấy đường dẫn website hiện tại
  let inforMore = window.location.href;
  console.log(info);
  alert(inforMore);
}

// 2. Screen
var getWidth = window.screen.width;
var getHeight = window.screen.height;
// Lấy kích thước màn hình máy tính
console.log(getWidth);
console.log(getHeight);

// 3. Location -> xử lý các vấn đề về url website
// lấy ra phần sau dấu "#"
let getHas = location.hash;
console.log("🚀 ~ getHas :", getHas);

// lấy hostname và host của url
let getHost = location.host;
console.log("🚀 ~ getHost :", getHost);

// lấy ra hostname
let getHostName = location.hostname;
console.log("🚀 ~ getHostName:", getHostName);

// lấy ra url
let getHref = location.href;
console.log("🚀 ~ getHref:", getHref);

// lấy ra protocol,hostname,host
let getOrigin = location.origin;
console.log("🚀 ~ getOrigin:", getOrigin);

// lấy ra pathname năm sau domain và trước dấu "?"
let getPath = location.pathname;
console.log("🚀 ~  getPath :", getPath);

// lấy ra port url
let getPort = location.port;
console.log("🚀 ~ getPort:", getPort);

// lấy ra query string năm sau dấu "?"
let getSearch = location.search;
console.log("🚀 ~ getSearch:", getSearch);

// lấy ra protocol của url (EX: https,....)
let getProtocol = location.protocol;
console.log("🚀 ~ getProtocol:", getProtocol);

// 3. History -> quản lý lịch sử trình duyệt

// đếm số trang đã lưu
let getLength = history.length;
console.log("🚀 ~ getLength:", getLength);

// đi đến trang trước
let getBack = history.back;
console.log("🚀 ~ getBack:", getBack);

// đi đến trang tiếp
let getForward = history.forward;
console.log("🚀 ~ getForward:", getForward);

// đi đến trang bất kì theo index
let getGo = history.go;
console.log("🚀 ~ getGo:", getGo);

function getNextPage() {
  history.forward();
}
function getPreviousPage() {
  history.back();
}

function getReloadPage() {
  window.location.reload();
}

// 4. Navigate -> Kiểm tra thông tin user: trình duyệt, phiên bản, bật cookies,.....

// check status cookies
console.log(navigator.cookieEnabled);

// check name website and code website
console.log(navigator.appCodeName);

// // check name
console.log(navigator.appName);

// check version browser
console.log(navigator.appVersion);

// check hệ điều hành
console.log(navigator.platform);

// check language
console.log(navigator.language);

// 5. PopUp
alert("Content");
confirm("Please");
prompt("content");

// 6.Timing
setInterval(() => {
  console.log("Content...");
}, 5000);

setTimeout(() => {
  console.log("Content...");
}, 5000);

// 7. Cookies -> dữ liêu được lưu trữ trong file text nằm trong máy
// việc lưu trữ cookies là vĩnh viễn hay là 1 khoảng thời gian tùy chỉ định
// trình duyệt gửi thông tin lên server sẻ đính kèm cookies -> server có cookies cảu client
// được lưu trữ dưới dạng "name = value" và khi reload web ko bị mất đi cookie
// Thiết lập thời gian cookies -> expires , định dạng là UTC

// Khởi tạo cookie
function getCookies() {
  document.cookie = "token=afadsfaskfdakdfsVinh01adadsadsads";
  document.cookie = "email=example@gmail.com";
  document.cookie = "username=announce";

  // Thiết lập expires cho cookies
  document.cookie =
    "password=1201288asljcuy;expires=Thu, 01 Jan 2025 00:00:00 UTC";

  setCookie("id", "123456789", "1");
  setCookie("nation", "VietNam", "1");
  setCookie("edu", "University", "1");
}

// Hàm viết sẵn
function setCookie(name, value, days) {
  var d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires;
}

// Lấy giá trị cookie -> kết quả đầu ra là 1 chuỗi
let allCookies = document.cookie;
console.log(allCookies);

// Hàm lấy cookie sẵn
function getCookie(cname) {
  // Tạo một chuỗi bao gồm tên cookie và dấu "=". Chuỗi này sẽ được sử dụng để tìm kiếm trong danh sách cookie.
  let name = cname + "=";
  // Tách chuỗi document.cookie thành một mảng ca, trong đó mỗi phần tử là một cookie (tách biệt bởi dấu chấm phẩy).
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]; // Lấy cookie hiện tại.
    // Nếu cookie bắt đầu bằng khoảng trắng, đoạn mã này sẽ xóa khoảng trắng đó cho đến khi cookie không còn khoảng trắng ở đầu.
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    // Kiểm tra xem cookie hiện tại có bắt đầu bằng tên cookie mà bạn đang tìm kiếm hay không.
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return ""; // Nếu không tìm thấy cookie với tên đã cho, hàm sẽ trả về một chuỗi rỗng.
}
let mail = getCookie("email");
console.log(mail);

// Update value cookie
function upDateCookies() {
  document.cookie = "email=pcv.fed@gmail.com";
}

// Xóa cookie -> xét lại cho expires
function deleteCookies() {
  document.cookie = "username=announce;expires=Thu, 01 Jan 1970 00:00:00";
}

// Hàm delete cookies
function deleteCookie(cname) {
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}
deleteCookie("token");
