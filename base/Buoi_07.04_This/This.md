### --------------- This in javascript ---------------

## This

-> Từ khóa "this" sẻ trỏ về đối tượng mà nó đang thuộc về
-> Trong javascript có thể đặt this ngay cấp ngoài cùng cảu chương trình
-> Vì đối tượng cao nhất chính là "window"
-> nên kết quả "this" sẻ trỏ đến đối tượng window

## This trong function

# Trường hợp 1: Nếu không bật "strict mode"

-> this -> biến toàn cục và cấp cao nhất là đối tượng window

# Trường hợp 2: Nêu bật "strict mode"

-> từ khóa "this" trong hàm là một biến chưa được định nghĩa -> "undefined"

## This trong các sự kiện javascript

-> Khi gán các hành động cho các sự kiện thì "this" chính là đối tượng html đang được gán sự kiện đó
-> this trỏ về đối tượng trước dấu chấm phẩy

## This trong Object

### Lưu ý:

-> "This" không tồn tại trong Arrow function
-> Nếu muốn sử dụng thì nó sẻ lấy đối tượng "global window"
