// example 01:
foo(); // Kết quả in ra ở console sẽ là "The first"

function foo() {
  console.log("The first");
}

console.log(foo); // Kết quả in ra ở console sẽ là "undefined"
// foo(); // (nếu bỏ comment và run) Kết quả in ra sẽ là lỗi "TypeError: foo is not a function"

var foo = function foo() {
  console.log("The first");
};

console.log(foo);
// Kết quả in ra ở console sẽ là
// ƒ foo() {
//   console.log("The first");
// }

foo(); // Kết quả in ra sẽ là "The first"

var fullName = "John";

// Example 02
function getName() {
  fullName = "Vladimir";
  console.log(fullName); // "Vladimir"
  return;

  // Hàm "fullName" được khai báo
  // thông qua Function Declaration ở trong scope của hàm "getName"
  // và sẽ được đưa lên đầu của hàm "getName" cùng với phần định nghĩa hàm
  // Tiếp đến "fullName" sẽ được gán cho một giá trị là "Vladimir"
  // Vì "fullName" đã được khai báo ở đầu scope của hàm "getName"
  // nên biến "fullName" ở global scope sẽ không bị ảnh hưởng bởi lệnh gán
  function fullName() {}
}

getName();

console.log(fullName); // "John"

function showAge() {
  function getAge() {
    return "18";
  }

  return getAge();

  // Cả hai hàm "getAge" đều được khai báo thông qua Function Declaration
  // và sẽ được đưa khai báo và định nghĩa lên đầu scope của hàm "showAge"
  // Tuy nhiên hàm "getAge" tra về "17" sẽ được đưa lên sau khi
  // hàm "getAge" trả về "18" được khai báo và định nghĩa
  // Gần giống như lệnh gán vậy
  // hàm "getAge" sẽ nhận phần định nghĩa trả về "17"
  function getAge() {
    return "17";
  }
}

console.log(showAge()); // "17"

function who() {
  // Tại đây thì hàm "whoAmI" sẽ được khai báo và định nghĩa trả về "Function"
  // Lúc này thì "whoAmI" đang là hàm "whoAmI"
  // Đối với khai báo var whoAmI = "Variable"
  // thì sẽ bị bỏ qua vì trong scope đã có khai báo hàm
  // nên khai báo biến sẽ không được đưa lên trên đầu nữa
  // Tiếp đến sau khi đưa tất cả khai báo lên đầu scope
  // thì sẽ bắt đầu chạy các lệnh tiếp theo
  // Chính là lệnh khai báo và gán var whoAmI = "Variable";
  // vì var cho phép chúng ta khai báo trùng (nếu không trong strict mode)
  // Sau lệnh gán thì "whoAmI" sẽ có giá trị là "Variable"
  // thay vì là định nghĩa hàm "whoAmI" trả về "Function"
  var whoAmI = "Variable";

  function whoAmI() {
    return "Function";
  }

  // Cuối cùng là gọi hàm "whoAmI"
  // Nhưng vì đến đây thì "whoAmI" đang là kiểu string
  // Vì thế ở console chúng ta sẽ chỉ nhận được lỗi
  // "TypeError: whoAmI is not a function"
  return whoAmI();
}

console.log(who());

// Tại đây thì hàm "showGender" sẽ được khai báo và định nghĩa lên đầu
// sẽ hợp lệ khi gọi hàm tại đây
console.log(showGender());

function showGender() {
  // Tại đây thì hàm "getGender" trả về "male" được khai báo
  // nhưng không bao gồm phần định nghĩa hàm
  // vì hàm "getGender" được khai báo thông qua "Function Expression"
  // Tiếp đến là hàm "getGender" trả về "female" cũng tương tự
  // chỉ đưa phần khai báo lên đầu
  // Tiếp đến sẽ là lệnh gán
  // var getGender = function() { return "male"; };
  var getGender = function () {
    return "male";
  };

  // Tiếp đến là gọi hàm "getGender"
  // Lúc này thì hàm "getGender"
  // đang được định nghĩa là trả về "male"
  // vì hàm "getGender" trả về "female"
  // nằm sau lệnh return và chưa được thực thi
  return getGender(); // "male"

  // Chỉ được hoist chứ không được thực thi
  var getGender = function () {
    return "female";
  };
}

// Khai báo biến "myName" tại global scope
var myName = "Maria";

// Tiếp đến là 1 biểu thức IIFE
// được gọi ngay sau khi khai báo và định nghĩa
// vì thế mà trong biểu thức IIFE
// sẽ không thể thao tác với biến global "myName"
(function () {
  // Tiếp đến trong hàm này
  // sẽ đưa khai báo "myName" lên đâu scope
  // Lúc này "myName" sẽ có giá trị là undefined
  console.log("Old name was: " + myName); // "Old name was: undefined"

  // Tiếp đến sẽ là lệnh gán giá trị "Jenny" cho biến "myName"
  var myName = "Jenny";

  // Bây giờ biến "myName" sẽ có giá trị là "Jenny" thay vì undefined
  console.log("New name is: " + myName); // "New name is: Jenny"
})();
