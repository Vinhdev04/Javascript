### Objects in Js;

-> Thêm giá trị
-> Lấy giá trị
-> Xóa giá trị
-> Kiểm tra kiểu dữ liệu

# Functions -> Phương thức -> Methods

# Others(data,..) -> Thược tính -> Properties

### Làm việc với Objects:

1. Object constructor:
2. Object prototype
3. Math object

### Một số giải pháp hiển thị đối tượng JavaScript là:

1.  Hiển thị thuộc tính đối tượng theo tên
2.  Hiển thị thuộc tính đối tượng trong vòng lặp
3.  Hiển thị đối tượng bằng Object.values()
4.  Hiển thị đối tượng bằng JSON.stringify()

### Object Prototype - Basic:

1. Prototype là gì ?
   -> Tương tự thêm thuopojc tính trong khi khởi tạo bằng "this"
   -> Có thể thêm được 1 thuộc tính (attributes,properties) bên ngoài Object constructor, function Constructor sau khi được định nghĩa
   -> Tất cả các thuộc tính (attributes,properties) và các phương thức (method) nằm trong 1 Object constructor, function Constructor thì sẻ xuất hiện ở phần proto => đây là điêm khác biệt so với khởi taọ " this"
   -> đối tượng được tạo ra có thể gọi đến nó bằng "."
   -> đều được kế thừa các properties và method từ hàm tạo
2. Khi nào sử dụng Prototype?

### Object Date and Date Time in JS:

-> Thời gian và ngày tháng là 1 phần quan trọng của việc phát triển web
-> Trong Javascript có một đối tượng mạnh mẽ là Date giúp xử lý và hiển thị thời gian và ngày tháng

## Syntax:

1. Tạo đối tượng date:
   -> Sử dụng new Date() => mặc định sẻ lấy thời gian hiện tại
   -> Output: [current]: The day - Month - Day - Year hours: minute : second GMT+0700(Múi giờ) => objects

2. Timestamp là gì ?
   -> Là 1 đại diện cho một điểm cụ thể trong thời gian, tính bằng millisecond từ mốc 0
   -> Mốc thời gian 0:
   00:00:00 ngày 1 1 1970
3. Xử lý ngày tháng trong JavaScript, Date Set Methods , định dạng và hiển thị ngày tháng trong JS:

## Cách 1:

-> new Date(year,month,day,hour,minute,second,milliseconds)

## Cách 2:

-> new Date(dataString) => truyền vào 1 chuỗi

## Cách 3:

-> Sử dụng method set: setFullYear(),setMonth(),....

## Lưu ý :

1. Nếu Truyền vào số ngày vượt quá chuẩn
   -> số ngày dữ liệu dữ ra sẻ được đẩy sang tháng tiếp theo => bằng cách đẩy ngày sang tháng tiếp theo
2. Bạn không thể bỏ qua tháng.
   -> Nếu bạn chỉ cung cấp một tham số thì tham số đó sẽ được coi là mili giây.
3. Với năm có một và hai chữ số
   -> sẽ được hiểu là 19xx:
4. Trong js khi truyền vào số bắt đầu là 0:
   -> Với 01 -> 07
   -> 08 trở lên cần "" hoặc ''
5. Hiển thị ngày:
   -> JavaScript sẽ (theo mặc định) xuất ngày bằng phương thức toString(). Đây là biểu diễn chuỗi của ngày, bao gồm cả múi giờ. Định dạng được chỉ định trong đặc tả ECMAScript:

### Định dạng dữ liệu:

1. toDateString():
   -> phương thức chuyển đổi một ngày sang định dạng dễ đọc hơn
2. toUTCString():
   -> phương thức chuyển đổi một ngày thành một chuỗi bằng tiêu chuẩn UTC:
3. toISOString():
   -> phương thức chuyển đổi một ngày thành một chuỗi bằng tiêu chuẩn ISO:
