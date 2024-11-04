### --------------- Hoisting in javascript ---------------

## hoisting

-> sử dụng 1 biến xong sau đó mới cần khai báo biến đó
-> JavaScript tự động di chuyển toàn bộ các khai báo lên đầu chương trình
-> những dòng code có sử dụng biến mà chưa khai báo sẻ không bị lỗi

## Example

## -> hai cách khai báo sau là tương tự nhau

-> khai báo
console.log(a); -> undefined
var a = 10;

-> js tự hiểu
var a;
console.log(a); -> undefined
a = 10;

---

## từ khóa "var" -> có tính hoisting và nếu biến chưa gán giá trị -> "undefined"

### "let" và "const" nếu chưa gán giá trị -> xuất hiện lỗi ".. is not defined" -> lỗi chưa được định nghĩa

## Example:

console.log(a); -> error ": Cannot access 'a' before initialization"
let a = 10;

console.log(a); -> error ": Cannot access 'a' before initialization"
const a = 10;

-> khai báo xong mới sử dụng -> ko có hoisting
let a;
console.log(a); -> undefined
a = 10;

const a;
console.log(a); -> error " Missing initializer in const declaration" -> ko được gán giá trị const
a = 10;

### --------------- function Hoisting ---------------

## Declaration function:

-> có tính hoisting

## Expression function:

-> không có tính hoisting

## Arrow function:

-> không có tính hoisting
