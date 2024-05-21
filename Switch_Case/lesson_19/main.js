// Practice
/* Viết chương trình khung tìm kiếm: Cho người dùng nhập vào lựa chọn:
    1. Tìm theo tên 
    2. Tìm theo mã
    4. Tìm theo tác giả
    5. Tìm theo tiêu đề
*/

let choice = Number(
  prompt(`
1. Tìm theo tên
2. Tìm theo mã
4. Tìm theo tác giả
5. Tìm theo tiêu đề
`)
);
switch (choice) {
  case 1:
    alert("1. Tìm theo tên");
    break;
  case 2:
    alert("2. Tìm theo mã");
    break;
  case 3:
    alert("3. Tìm theo tên tác giả");
    break;
  case 4:
    alert("4. Tìm theo tiêu đề");
    break;
  default:
    alert("Vui lòng nhập lại ");
    break;
}
