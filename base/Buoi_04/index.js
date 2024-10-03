// Function() -> arguments -> chỉ dùng được trong hàm
// Nếu hàm được lồng trong 1 hàm thỉ chỉ sử dụng trong hàm đó bất kể (var,..), nếu var trong if-else -> bên ngoài vẫn lấy được giá trị
// Nhiều hàm cùng tên khi callback sẻ gọi tới hàm cuối cùng
function getSum(a, b) {
  return a + b;
}
let result = getSum(1, 2);
console.log("Sum:", result);

// sử dụng function argument
// console.log(arguments); //-> not defined
function getMul() {
  let mul = 1;
  for (item of arguments) {
    mul *= item;
  }
  return mul;
}
let kq = getMul(1, 2, 3, 4);
console.log("Mul: " + kq);

// Với các hàm trùng tên -> gọi tới hàm cuối cùng
function get1() {
  console.log("call get1()");
}

function get1() {
  console.log("call get2()");
}
get1(); //Output: call get2()

// console.log(a); // a -> not defined
function demo() {
  var a = 100;
  console.log(a);
  if (true) {
    console.log(a);
  }
  console.log(a);
}
demo();

// hàm trong hàm -> chỉ gọi được hàm trong hàm chứa nó
function TestA() {
  console.log("Function A...");

  function TestB() {
    console.log("Function B...");
  }
  TestB();
}
TestA();
// TestB();// callback -> TestB() not defined
