<!--  ----------------------------- Function in js -----------------------------  -->

-> Tại sao phải dùng function():

- Tránh việc lặp lại code khi muốn chạy một đoạn code nhiều lần => call function
- Hàm hay còn gọi là chương trình con <module>
- Chia nhỏ công việc dự án
- Tái sử dụng bằng cách call function

## Lưu ý:

-> Thân hàm ko có key = 'return' -> trả về undefined
-> Thân hàm có return sẻ trả về value tương ứng
-> Khai báo thiếu aguments thì kết quả sẻ trả về -> NaN

## Function Declaration :

-> Khai báo tường minh:

      -> function name_function (parameters){
        - body_functions
        - return parameters
      }

-> call function name_function()

=> Có thể sử dụng Hoisting

## Function Expression:

=> Syntax function :

      -> variable name_variable = function(parameters){
        - body_functions
        - return parameters
      };
      -> call variable name_variable();

=> Không thể sử dụng Hoisting

## Arrows Functions:(Hàm mũi tên => )

-> đơn giản , ngắn gọn
-> không cần key = 'return'

=> Syntax function :

    variable name_variable = (aguments) => Conditions

vd: let x = (a,b) => a\*b

-> Với trường hợp phức tạp cần thêm khối lệnh {....}

=> Không thể sử dụng Hoisting

## Functions Calling Other Functions:

-> Là 1 khái niệm mà một function có thể gọi một function hoặc nhiều function khác để thực hiện các quản lý và tác vụ cụ thể
-> Giusp chia nhỏ chương trình dễ quản lý và tái sử dụng

## Scope (phạm vi hoạt động ) function:

-> Global -> phạm vi toàn cục
-> Function -> phạm vi trong hàm
-> Block Scope trong JS -> phạm vi của khối (block)

<!--  ----------------------------- Hoisting -----------------------------  -->

### Javascript Hoisting(nâng cao):

-> là hành vi của Js nhằm đi chuyển tất cả khai báo lên đầu phạm vi hiện tại (lên đầu tập lệnh hiện tại, hoặc hàm hiện tại, lên đầu block hiện tại)
-> Hoisting là hành vi mặc định của JavaScript nhằm di chuyển tất cả các khai báo lên đầu phạm vi hiện tại (lên đầu tập lệnh hiện tại hoặc hàm hiện tại).
-> So sánh var, let, const:

1. var
   -> có thể sử dụng trước khi nó được khai báo trong mã lệnh
   -> js tự động đọc mã và đẩy khai báo lên đầu chứ ko đẩy được giá trị
   -> kết quả trả về "undefined"
   -> Phạm vi(Scope): Function-scope
   => Nếu một biến được khai báo bằng "var" phạm vi của nó sẻ là phạm vi của hàm(function) -> Variable sẻ được đẩy lên đầu phạm vi Function Scope

2. let và const  
   -> được đưa lên đầu khối (block) nhưng ko được khởi tạo => js nhận biết có sự xuất hiện của biến
   ->let, const biến sẻ nằm trong vùng "temporal dead zone"(vùng chết tạm thời) không thể sử dụng biến trước khi nó được khai báo
   -> Việc sử dụng một let biến trước khi nó được khai báo sẽ dẫn đến một tệp "ReferenceError".
   -> Phạm vi: Block scope
   => Nếu một biến được triên khai bằng let,const phạm vi cảu nó sẻ là phạm vi block
   -> Biến sẻ được đẩy lên đầu phạm vi BlockScope

## Nhận xét:

-> Nhận xét rằng let và const không chịu ảnh hưởng của hoisting trong JavaScript là sai. Cả let và const đều được hoisted, nhưng chúng không thể truy cập trước khi được khai báo trong mã do “temporal dead zone” (TDZ) - một kỹ thuật trong JavaScript để ngăn chặn việc truy cập biến trước khi nó được khởi tạo.

-> Khi bạn khai báo một biến với let hoặc const, biến đó tồn tại từ đầu block nhưng không thể sử dụng cho đến khi mã đến dòng khai báo biến. Nếu bạn cố gắng truy cập biến trước dòng khai báo, JavaScript sẽ báo lỗi ReferenceError.

<!--  ----------------------------- Hoisting in Function -----------------------------  -->

-> Sử dụng Hoisting được đối với Declaration function
-> Không thể sự dụng Hoisting đối với Expression function và Arrow function
