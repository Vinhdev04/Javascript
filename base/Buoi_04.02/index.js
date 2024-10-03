// Try catch all exceptions -> bắt lỗi chương trình, sử dụng khi muốn chương trình ko bị dững khi gặp một lỗi bất kì thường do người dùng nhập sai dữ liệu hoặc thao tác sai

// finally là thêm và ko bắt buộc , sau khi chạy try-catch thì luôn chạy finally

// let a = 10;
try {
  console.log(a);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("done...");
}

// Nếu ko có try-catch thì nếu gặp lỗi thì chương trình sẻ dừng và ko chạy đoạn code sau
