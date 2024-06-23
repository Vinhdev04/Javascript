### Arrays in JavaScript:

## Khởi tạo Mảng:

1. Cách khởi tạo:
   -> Sử dụng toán tử new()
   -> Sử dụng cặp dấu ngoặc vuông []
   -> Sử dụng phương thức Array.from() -> Tạo mảng từ một chuỗi
   ->...

2. Sử dụng cách nào? Tại sao?
   -> Nên sử dụng cặp dấu ngoặc vuông [] -> nhanh gọn dễ sử dụng cho người mới

3. Kiểm tra dataType
   -> sử dụng câu lệnh typeof

## Truy xuất mảng:

1. Độ dài mảng
   -> sử dụng câu lệnh length()

2. Truy xuất theo index:
   -> sử dụng câu lệnh [index]

3. Kiểm tra xem 1 đối tượng có phải là Array ko
   -> sử dụng câu lệnh Array.isArray()

## Làm việc với mảng:

1. To String

2. Join
   -> Tương tự hàm split() trong String
   -> join() -> dùng để chuyển từ number -> string và tùy chỉnh về khoảng cách

3. Pop
   -> Xóa element cuối mảng và trả về element đó
   -> Nếu mảng trống hoặc ko còn phần tử -> trả về 'undefined'

4. Push
   -> Thêm phần tử(MỘT HOẶC NHIỀU) vào cuối mảng
   -> Sau đó trả về dộ dài mới của mảng

5. Shirt
   -> NGược lại với pop() , Shirt sẻ xóa phần tử đầu mảng và trả về elements đó
   -> Nếu mảng trống hoặc ko còn phần tử -> trả về 'undefined'

6. Unshift
   -> Tương tự push()
   -> Thêm phần tử(MỘT HOẶC NHIỀU) vào cuối mảng
   -> Sau đó trả về dộ dài mới của mảng
7. Splicing
   -> Xóa theo index(start, delet_Count)
   -> Thêm (x,y,z) -> x: vị trí , y: số lượng cần thêm, xóa, z: tên cần thêm

8. Concat
   -> Nối mảng
9. Slice
   -> cắt elements của mảng
   -> > lấy phần tử trong mảng slice(start,end)
   -> copy mảng
