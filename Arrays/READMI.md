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

## Syntax:

-> sort() -> sort tăng

## array.sort(compareFunction) :

      -> Theo mặc định, hàm Sort() sắp xếp các giá trị dưới dạng chuỗi.
      # array: Mảng cần được sắp xếp
      # compareFunction(tùy chọn): hàm so sánh được sử dụng để xác định thứ tự sắp xếp. Nếu ko cung cấp sort()

## sắp xếp các phần tử dưới dạng chuỗi Unicode

      # Hàm so sánh (compareFunction):
      # Nếu compareFunction được cung cấp , nó sẻ nhận 2 đối số được gọi là a,b
      # Nếu compareFunction(a,b) trả về value < 0 => a sẻ đặt trước b
      # Nếu compareFuncion(a,b) trả về value = 0 => a và b ko đổi
      # Nếu compareFunction(a,b) trả về value > 0 => b đặt trước a

=> phương thức sort() thay đổi mảng ban đầu.

## Phương thức toSorted() -> ES2023

==> đã thêm phương thức toSorted() như một cách an toàn để sắp xếp một mảng mà không làm thay đổi mảng ban đầu.

## Sort() và toSorted():

=> Sự khác biệt giữa toSorted() và Sort() là phương thức đầu tiên tạo một mảng mới, giữ nguyên mảng ban đầu,
=> trong khi phương thức cuối cùng thay đổi mảng ban đầu.

<!-- -------------------------------- Reverse Method   --------------------- -->

### Reverse() và toReverse():

## Reverse()

-> đảo ngược mảng
-> trong khi phương thức reverse() cuối cùng thay đổi mảng ban đầu.

## toReversed():

-> đảo ngược mảng
-> Sự khác biệt giữa toReversed() là phương thức đầu tiên tạo ra một mảng mới, giữ nguyên mảng ban đầu,

## Reverse() và toReversed():

-> ES2023 đã thêm phương thức toReversed() như một cách an toàn để đảo ngược một mảng mà không làm thay đổi mảng ban đầu.
=> Sự khác biệt giữa toReversed() là phương thức đầu tiên tạo ra một mảng mới, giữ nguyên mảng ban đầu,
=> trong khi phương thức reverse() cuối cùng thay đổi mảng ban đầu.

<!-- -------------------------------- Reduce(),Fill(),Filter(),Map(),Sort()in Array --------------------- -->

### array.sort(compareFunction) :

      -> Theo mặc định, hàm Sort() sắp xếp các giá trị dưới dạng chuỗi.
      # array: Mảng cần được sắp xếp
      # compareFunction(tùy chọn): hàm so sánh được sử dụng để xác định thứ tự sắp xếp. Nếu ko cung cấp sort()

## sắp xếp các phần tử dưới dạng chuỗi Unicode

      # Hàm so sánh (compareFunction):
      # Nếu compareFunction được cung cấp , nó sẻ nhận 2 đối số được gọi là a,b
      # Nếu compareFunction(a,b) trả về value < 0 => a sẻ đặt trước b
      # Nếu compareFuncion(a,b) trả về value = 0 => a và b ko đổi
      # Nếu compareFunction(a,b) trả về value > 0 => b đặt trước a

=> phương thức sort() thay đổi mảng ban đầu.

## Phương thức toSorted() -> ES2023

==> đã thêm phương thức toSorted() như một cách an toàn để sắp xếp một mảng mà không làm thay đổi mảng ban đầu.

## Sort() và toSorted():

=> Sự khác biệt giữa toSorted() và Sort() là phương thức đầu tiên tạo một mảng mới, giữ nguyên mảng ban đầu,
=> trong khi phương thức cuối cùng thay đổi mảng ban đầu.

<!-- ---------------------------------------------------------------------------------------- -->

### Reduce(callback, initialValue):

# Mục đích:

-> Giúp giảm mảng thành một giá trị duy nhất (ví dụ: tính tổng các phần tử, tìm giá trị lớn nhất).

# Cú pháp: array.reduce(callback, initialValue)

- Tham số:
  # callback: Hàm được thực thi trên mỗi phần tử của mảng, có bốn đối số:
  # accumulator: Giá trị tích lũy của các giá trị trả về từ lần gọi lại trước của callback, hoặc initialValue, nếu được cung cấp.
  # currentValue: Phần tử hiện tại đang được xử lý trong mảng.
  # currentIndex: Chỉ số của phần tử hiện tại đang được xử lý.
  # array: Mảng mà reduce được gọi.
  # initialValue (tùy chọn): Giá trị khởi đầu của accumulator. Nếu không được cung cấp, reduce sẽ sử dụng phần tử đầu tiên của mảng làm giá trị ban đầu của accumulator và bắt đầu lặp từ phần tử thứ hai.

## Lưu ý khi sử dụng reduce();

==> trả về một giá trị duy nhất sau khi lặp qua mảng của mình.
==> nhóm các mục tương tự lại với nhau
==> loại bỏ bản sao bằng reduce()phương pháp

<!-- ---------------------------------------------------------------------------------------- -->

### Fill(value, start, end):

# Mục đích:

-> Thay đổi tất cả các phần tử trong mảng thành một giá trị cụ thể.

# Cú pháp: array.fill(value, start, end)

- Tham số:

      # value: Giá trị tĩnh sẽ được sử dụng để điền vào mảng.

      # start (tùy chọn): Chỉ số bắt đầu (bao gồm). Mặc định là 0.

      # end (tùy chọn): Chỉ số kết thúc (không bao gồm). Mặc định là array.length.

<!-- ---------------------------------------------------------------------------------------- -->

### Filter(callback):

-> array.filter(function)

# Mục đích:

-> Tạo một mảng mới với các phần tử của mảng gọi thỏa mãn một điều kiện được cung cấp.
-> Ko làm thay đổi mảng ban đàu
-> Ko thức hiện đối với hàm rỗng (phần tử)

# Cú pháp: array.filter(callback)

- Tham số:
  # callback: Hàm kiểm tra điều kiện cho mỗi phần tử của mảng, có ba đối số:
  # element: Phần tử hiện tại của mảng.
  # index: Chỉ số của phần tử hiện tại.
  # array: Mảng mà filter được gọi.

### Map(callback):

s

# Mục đích:

-> Tạo một mảng mới được lấp đầy bằng kết quả của việc gọi một hàm được cung cấp lên từng phần tử trong mảng gọi.
-> Trích lọc các phần tử thỏa mãn điều kiện của hàm

# Cú pháp: array.map(callback)

- Tham số:
  # callback: Hàm tạo ra một phần tử của mảng mới, có ba đối số:
  # currentValue: Phần tử hiện tại của mảng.
  # index: Chỉ số của phần tử hiện tại.
  # array: Mảng mà map được gọi.
  <!-- ---------------------------------------------------------------------------------------- -->

### forEach():

-> Sử dụng như in ra giá trị của từng phần tử, thêm các giá trị vào một mảng khác, hoặc thay đổi các biến bên ngoà
-> không trả về một giá trị có ý nghĩa để sử dụng trong bất kỳ mục đích nào khác
-> không thể dùng để nối chuỗi

# Cú pháp: forEach(callbackfn(),thisValue):

- Tham số:
  # element: phần tử đang được xét đến
  # index: vị trí phần tử đang xẻt
  # array: mảng truyền vào
  # thisValue(option)
