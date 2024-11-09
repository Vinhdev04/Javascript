### ------------ JSON Server --------------------

# Khái niệm

- JSON dùng dể trao đổi dữ liệu từ server web
- Khi nhận dữ liệu từ server, dữ liệu luôn ở dạng "string"
- Chuyển đổi dữ liệu về kiểu js bằng JSON.parse()

## Cài đặt:

"npm" -> node package manager

# Step 1:

- Gõ 'npm init" -> khởi tạo file "package.json" chứa các thông tin các package đã cài

# Step 2:

- Truy cập vào link "https://www.npmjs.com/package/json-server" -> để cài json server
- Sau đó tiến hành chạy lệnh "npm i json-server"

# Step 3:

- Tạo 1 file db.json với nội dung mẫu (có thể tùy ý) -> dùng để test

# Step 4:

- Thêm vào mục script trong file package.json dòng lệnh "start": "json-server --watch db.json"
  -> giúp tối giản câu lệnh khi chạy

# Step 5:

- Tiền hành chạy thử file bằng lệnh "npm start"

## JSON Server

-> Fake API Server / Mock API
