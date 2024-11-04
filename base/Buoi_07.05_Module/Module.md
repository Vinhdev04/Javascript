### --------------- Module in javascript ---------------

## Module

-> Là 1 file javascript bình thường chỉ đơn giản là file đó được đặt 1 cái tên có nghĩa và các dòng code bên trong thức hiện chức năng đó
-> Việc phân chia thành từng module và mỗi module sẽ có 1 công dụng giúp cho quá trình code nhanh hơn, mạch lạc, tái sử dụng ở nhiều nơi

## Khai báo module trong JavaScript

-> khai báo -> dùng từ khóa "export"
-> sử dụng -> dùng từ khóa "import"

# Trong đó:

- Lệnh export:
  - để đặt đằng trước hàm hoặc bến cho phép file khác sử dụng
  - cú pháp: export function name_function(){}
- Sử dụng lệnh import:
  - để gọi đến dữ liệu từ 1 module khác
  - cú pháp: import {name_function} from "đường_dẫn_file.js"

## Đổi tên dữ liệu của module trong javascript

# Có 1 số trường hợp phải đổi tên module:

- Muốn rút gọn tên
- Trong trường hợp source code cảu bạn đã tồn tại tên đó

* Cách 1: Đổi tên trong file module:
  - export {oldName as newName};
  - import {newName} from "đường dẫn.js";
* Cách 2: Đổi tên trong file import:
  - import {oldName as newName} from "đường dẫn.js";

## Default export

-> Là cách khai báo một dữ liệu export mặc định trong trường hợp gọi đến một hàm hoặc một biến mà ko tồn tại trong module
-> trả về kiểu dữ liệu default này

# Cú pháp:

-> export default function nameFunction(){}
-> import nameFunction from "đường dẫn.js" -> ko có dấu {}
-> Một file chỉ có 1 hàm export default
