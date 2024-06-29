### Arrays in JavaScript:

-> Tập hợp các phần tử có cùng hoặc khác kiểu dữ liệu (dataType)
-> Mảng giúp quản lý và tổ chức dữ liệu một cách hợp lý
-> Truy xuất và thay đổi dữ liệu một cách dễ dàng

## Khởi tạo Mảng:

1. Cách khởi tạo:
   -> Khởi tạo mảng rỗng
   -> Sử dụng toán tử new()
   -> Sử dụng cặp dấu ngoặc vuông [] -> ưu tiên sử dụng
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

4. Duyệt mảng:
   -> Sử dụng vòng for() -> có thể thực hiện các tacs vụ thêm sửa xóa
   -> Sử dụng vòng for of() -> chỉ có thể xem ko thể thao tác sửa

<!-- -------------------------------- Array  Method  P1 --------------------- -->

## Làm việc với mảng:

1. To String

2. Join
   -> Tương tự hàm split() trong String
   -> join() -> dùng để chuyển từ number -> string và tùy chỉnh về khoảng cách

3. Push
   -> Thêm phần tử vào cuối mảng gốc
   -> Sau đó trả về dộ dài mới của mảng

4. Unshift
   -> Ngược lại push()
   -> Thêm phần tử vào đầu mảng gốc
   -> Sau đó trả về dộ dài mới của mảng

5. Pop
   -> Xóa phần tử cuối mảng, làm thay đổi mảng gốc và trả về giá trị của phần tử đã bị loại bỏ
   -> Nếu mảng trống hoặc ko còn phần tử -> trả về 'undefined'

6. Shirt
   -> Ngược lại pop()
   -> Xóa phần tử đầu tiên và trả về giá trị của phần tử đó
   -> Nếu mảng trống hoặc ko còn phần tử -> trả về 'undefined'

7. Splicing
   -> Xóa theo index(start, delet_Count)
   -> Thêm (x,y,z) -> x: vị trí , y: số lượng cần thêm, xóa, z: tên cần thêm

8. Concat
   -> Nối mảng

9. Slice(startIndex,endIndex-1)
   -> cắt elements của mảng
   -> Lấy từ startIndex tới endIndex-1 chuỗi gốc (Ko bao gồm endIndex)
   -> Bỏ trống sẻ hiểu là sao chép lấy toàn bộ mảng gốc sang mảng mới
   -> copy mảng

10. includes()
-> kiểm tra xem mảng có chứa 1 giá trị cụ thể hay ko . Trả về giá trị true or false
<!-- -------------------------------- Array  Method  P2 --------------------- -->
11. indexOf()
    -> Trả về vị trí index cảu phần tử xuất liện lần đầu tiên trong mảng
    -> Ko tìm thấy trả về -1

12. lastIndexOf():
    -> Trả về vị trí index của phần tử xuất hiện cuối cùng trong mảng
    -> Ko tìm thấy trả về -1

13. reverse():
    -> Đảo ngược thứ tư cảu mảng gốc
    -> Thay đổi mảng gốc và ko tạo ra mảng mới

14.join(separator):
-> Nối các phần tử trong mảng thành chuỗi, theo ký tự phân tách 'separtor'
-> separator: Nếu bỏ trống sẻ mặc định là dấu ,
-> Ko thay đổi mảng gốc

## Mở rộng slice():

<!-- -------------------------------- Array  Method  P3 --------------------- -->

15. splice(start, deleteCount, item1, item2, ..)
    -> (start, deleteCount, item1, item2, ..)
    -> splice (start, deleteCount, item1, item2, ..):
    -> start: Chỉ mục bắt đầu thực hiện thay đổi mảng.
    deleteCount: Số lượng phần tử cần xóa từ start.
    item1, item2, ...: Các phần tử sẽ được thêm vào mảng từ start.

16. toSpiced()
    -> tương tự splice ()
    -> ES2023 Nhưng giữ nguyên mảng ban đầu phương thức mới tạo ra một mảng mới, giữ nguyên mảng ban đầu, trong khi phương thức cũ thay đổi mảng ban đầu

17. slice(begin, end)
    -> begin: Chỉ mục bắt đầu sao chép (bao gồm).
    end (tùy chọn): Chỉ mục kết thúc sao chép (không bao gồm).

18. delete() - > xóa
    -> không khuyến khích sử dụng nhiều tránh xảy ra nhiều lỗ hổng
    -> thay vào đó nên sử dụng pop () và shift ()
    -> Lưu ý: Khi sử dụng delete()
    -> phần tử sẻ ko bị xóa hoàn toàn mà bị đánh dấu là "empty"
    -> Phần tử chỉ được loại bỏ mà mảng vẫn giữ nguyên độ dài
    -> nếu duyệt vòng lặp (for..in hoặc for .. òf) việc sử dụng delete() các phần tử vẫn xuất hiện trong vòng lặp với giá trị

19. copyWithin(target, start, end-1)
    -> sử dụng để sao chép một phần của mảng và chèn nó vào vị trí khác trong mảng mà không thay đổi độ dài của mảng.
    -> target: Chỉ mục của mảng nơi bạn muốn bắt đầu chèn các phần tử sao chép.
    start: Chỉ mục của mảng mà bạn muốn bắt đầu sao chép các phần tử.
    end-1 (tùy chọn): Chỉ mục kết thúc sao chép. Phương thức sẽ sao chép từ start đến end - 1
    -> Phương thức copyWithin() ghi đè các giá trị hiện có.

        -> Phương thức copyWithin() không thêm phần tử vào mảng.

        -> Phương thức copyWithin() không thay đổi độ dài của mảng.

20. flat()
    -> Phương thức này thực hiện việc biến đổi một mảng nhiều chiều (mảng có các mảng lồng nhau) thành một mảng một chiều (mảng không còn các mảng lồng nhau).

### Lưu ý:

## splice (start, deleteCount, item1, item2, ..):

-> splice(start, deleteCount, item1, item2, ...)
-> start: Chỉ mục bắt đầu thực hiện thay đổi mảng.
deleteCount: Số lượng phần tử cần xóa từ start.
item1, item2, ...: Các phần tử sẽ được thêm vào mảng từ start.

## slice (begin, end)

-> begin: Chỉ mục bắt đầu sao chép (bao gồm).
end (tùy chọn): Chỉ mục kết thúc sao chép (không bao gồm).

-> được sử dụng để sao chép một phần của mảng và trả về một mảng mới, mà không thay đổi mảng ban đầu

## spread(...)

-> Là 1 toán tử mới được thêm vào từ ES6
-> Cho phép duyệt qua lần lượt các phần tử -> có thể thao tác:

1.  Tạo bản sao(clone) của mảng -> bản chính ko bị ảnh hưởng khi tác động vào bản sao
2.  Truyền đối số vào hàm
3.  Kết hợp mảng
4.  Tạo mảng mới thêm phần tử
5.  Chuyển đổi iterable (có thể duyệt qua: string,arr) thành mảng -> Ko thể tách đối với mảng chứa duy nhất 1 phần tử là chuỗi,đảm bảo rằng chuỗi đó là một giá trị chuỗi nguyên thủy và không được bọc trong một mảng.

<!-- -------------------------------- Search Method  P1 --------------------- -->

<!-- -------------------------------- Search Method  P2 --------------------- -->

<!-- -------------------------------- Sort  Method  P1 --------------------- -->

<!-- -------------------------------- Sort  Method  P2 --------------------- -->
