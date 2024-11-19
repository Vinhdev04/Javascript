### ------------- Closure (bao đóng) -------------

# Tổng quát:

-> "closure" là một hàm ở bên trong một hàm khác
-> Có thể sử dụng biến global và local cảu hàm cha và chính nó
-> Nếu có nhiều biến trùng tên thì sử ưu tiên theo thứ tự:
-> biến cục bộ của nó > biến cục bộ của hàm cha > biền toàn cục
-> Nếu muốn "return" nhiều hàm closure -> sử dụng 1 "object" với mỗi phần tử sẻ là 1 hàm closure
-> Closure sẻ thay đổi được giá trị biến global và local

# Note:

-> Một closure là một hàm có quyền truy cập vào phạm vi cha, ngay cả sau khi hàm cha đã đóng.
-> Closures được sử dụng nhiều trong NodeJS
-> Nó có trong kiến truc non-blocking, bất đồng bộ của NodeJS.
-> Ngoài ra Closures cũng được sử dụng nhiều trong Jquery
