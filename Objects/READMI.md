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
