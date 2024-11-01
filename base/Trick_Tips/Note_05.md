### ============ Event Bubbling (Sự kiện nổi bọt) ============

# Event Bubbling

=> sự kiện nổi bọt -> lan từ trong ra ngoài
=> Khi một sự kiện xảy ra trên một phần tử, trước tiên nó chạy các trình xử lý trên nó, sau đó là cha mẹ của nó, sau đó tiếp tục lên các tổ tiên khác.

# 2. event.target

=> Một trình xử lý trên phần tử mẹ luôn có thể nhận được thông tin chi tiết về nơi nó thực sự xảy ra.
=> Phần tử lồng nhau sâu nhất đã gây ra sự kiện được gọi là phần tử đích , có thể truy cập bằng event.target.

# Lưu ý: this và event.curentTarget

=> event.target – là phần tử “đích” đã bắt đầu sự kiện, nó không thay đổi trong quá trình tạo bọt.

=> this – là phần tử “hiện tại”, phần tử có một trình xử lý hiện đang chạy trên đó.

# 3. Ngừng sủi bọt

=> Một sự kiện sôi sục đi từ phần tử mục tiêu thẳng lên. Thông thường, nó đi lên cho đến <html>, rồi đến document phản đối, và một số sự kiện thậm chí đạt đến window, gọi tất cả các trình xử lý trên đường dẫn.

=> Phương thức cho nó là event.stopPropagation().

### ============ Event Capturing (bắt giữ) ============

# 4. Bắt giữ(capturing)

-> sự kiện được phát đi từ gốc cảu DOM đến đích
-> ngoài vào trong

# Ngừng Capturing

-> stopImmediatePropagation();

### ============ So sánh stopPropagation() và stopImmediatePropagation() ============

# stopPropagation()

-> Chỉ ngăn chặn sự kiện lan truyền từ con -> cha
-> Không ngăn chặn sự kiện cảu cùng 1 element

# stopImmediatePropagation()

-> ngăn chặn sự kiện cảu cùng 1 element
