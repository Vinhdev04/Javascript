### ============ So sánh thuộc tính "textContent", "innerHTML" and "innerText" ============

## Điểm chung:

=> Cả 3 đều sử dụng "get" , "set" phần tử html chứa nội dung văn bản như các phần tử: p,div,span,...

## Điểm khác:

# textContent:

=> Trả về nội dung nằm bên trong phần tử: bao gồm khoảng trắng, tab,...
=> ko thể chuyển định dạng html khi set dữ liệu

# innerText:

=> Trả về văn bản mà người dùng có thể nhín thấy trên trình duyệt, loại bỏ các phần tử được ẩn bởi css
=> ko thể chuyển định dạng html khi set dữ liệu

# innerHTML:

=> trả về toàn bộ nội dung html cảu phần tử: bao gồm các thẻ html và cấu trúc cảu chúng
=> có thể chuyển định dạng html khi set dữ liệu
