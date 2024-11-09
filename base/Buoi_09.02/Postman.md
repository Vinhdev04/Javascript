### ------------ Postman --------------------

# Khái niệm

## Cài đặt:

# Step 1:

- Gõ 'npm init" -> khởi tạo file "package.json" chứa các thông tin các package đã cài

# Step 2:

- Truy cập vào link "https://www.npmjs.com/package/json-server" -> để cài json server
- Sau đó tiến hành chạy lệnh "npm i json-server"

# CRUD:

- C: Create -> Method: POST
- R: Read -> Method: GET
- U: Update -> Method: PUT / PATCH
- D: Delete -> Method: DELETE

# REST API: Representational State Transfer

-> Là một tiêu chuẩn, quy tắc xác định các phương pháp và giao thức về cách dữ liệu được gửi và nhận cũng như lưu trữ

# GET

-> Lấy ra một hoặc nhiều bản ghi
-> Ví dụ: Lấy ra danh sách các bài viết

# POST

-> Tạo mới một bản ghi
-> Ví dụ: Tạo mới 1 bài viết
-> Chú ý: Trường hợp data gửi lên dạng "json" thig "headers" phải thêm Content-Type là application/json
-> Trong postman "id" sẻ tự động tăng dần và phải để đúng key "id"

# DELETE

-> Xóa 1 bản ghi
-> Ví dụ xóa 1 comments

## Điểm khác biệt giữa PUT And Patch ?

# PUT:

-> Cập nhật 1 bản ghi
-> Nhưng phải gửi lên đủ các cặp key/value (kể cả những cặp key/value không cần cập nhật)
-> Nếu ko gửi đủ thông tin thì trường thiếu sẻ xem như bị xóa -> lỗi mất dữ liệu khi "update"
-> Chú ý: Trường hợp data gửi lên dạng "json" thig "headers" phải thêm Content-Type là application/json
-> Ví dụ: Cập nhật 1 bài viết

# PATCH:

-> Để cập nhật 1 bản ghi tương tự PUT nhưng khác:
-> Chỉ cần gửi lên cặp key/value cần cập nhật, những trường khác không bị mất đi
-> Chú ý: Trường hợp data gửi lên dạng "json" thig "headers" phải thêm Content-Type là application/json
-> Ví dụ chỉ cập nhật title bài
