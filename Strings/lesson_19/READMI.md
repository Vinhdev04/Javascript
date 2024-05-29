### String in Js:

                  <!-- JavaScript String Methods-->

## Tạo chuỗi:

- Cách tạo chuỗi:

  - dùng "", '' -> kiểu dữ liệu là string
  - dùng new string -> kiểu dữ liệu object

- Nên dùng cách nào ? Vì sao ?

* Nên dùng cách 1 . Vì để nhận dúng kiểu dữ liệu mong muốn và ngắn hơn

- Kiểm tra data type
  - typeof

## Mọt số case sử dụng backslash (\)

- '\ \' -> \
- '\\' -> \

## Xem độ dài chuỗi:

-> length

## Chú ý độ dài khi viết code:

-> tránh chuỗi dài dùng nỗi các chuỗi con hoặc '\n'

## Teamplate String ES6:

-> ` ${}`

### Làm việc với chuỗi:

1. Length()
   -> trả về độ dài

2. Find index
   Find index -> Start = 0
   charAt(), at(), charCodeAt()
   -> Sự cải tiến của at() so với charAt():

   - at() là một tính năng mới hơn trong JavaScript so với charAt().
   - Nó cũng trả về ký tự tại vị trí chỉ định trong chuỗi.
   - at() có thể sử dụng số âm làm chỉ số (ví dụ: myString.at(-2)).
   - Nếu chỉ số vượt quá độ dài của chuỗi, at() sẽ trả về undefined.

   -> charAt():

- Phương thức charAt() trả về một ký tự tại vị trí chỉ định trong chuỗi.
- Nó hoạt động dựa trên chỉ số (index) của ký tự.
- Nếu chỉ số vượt quá độ dài của chuỗi, charAt() sẽ trả về một chuỗi rỗng ('').
- Không hỗ trợ số âm làm chỉ số

search -> hỗ trợ tìm kiếm biểu thức chính quy và ko hỗ trợ tìm theo tham số index như

3. Cut string
   -> slice(start, end)

4. Replace()
   -> Replace(string,string_replace) -> thay thế chuỗi hiện tại bằng chuỗi mới

5. Convert to uppercase
   -> chuyển sang chữ hoa

6. Convert to lowercase
   -> chuyển sang chữ thường

7. Trim()
   -> xóa khoảng trắng ở 2 đầu chuỗi

7.1 trimStart()
-> giống trim() và chỉ xóa được khoảng trắng đầu chuỗi (ECMAScript 2019)

7.2 trimEnd()
-> giống trim() và chỉ xóa được khoảng trắng cuối chuỗi (ECMAScript 2019)

8.  Split()
    -> cắt chuỗi thành 1 arrays dựa vào điểm chung

8.1 substring()
->
8.2 substr()
-> 9. Get a character by index

10. padStart()
    -> Nó đệm một chuỗi bằng một chuỗi khác (nhiều lần) cho đến khi nó đạt đến độ dài nhất định
    -> Phương thức padStart() là một phương thức chuỗi. Để đệm một số, trước tiên hãy chuyển đổi số đó thành một chuỗi.
    -> padStart() is not supported in Internet Explorer.

11. padEnd()
    -> Nó đệm một chuỗi bằng một chuỗi khác (nhiều lần) cho đến khi nó đạt đến độ dài nhất định.
    -> Phương thức padEnd() là một phương thức chuỗi. Để đệm một số, trước tiên hãy chuyển đổi số đó thành một chuỗi.
    -> is not supported in Internet Explorer.
