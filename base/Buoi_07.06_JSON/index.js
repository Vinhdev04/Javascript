// kiểu dữ liệu JSON
var json = "null";
var json_arr = '["Js","html"]';
var js_obj = '{"name":"Vinh","age":20}';

// chuyển đổi JSON -> Js
var a = "1";
console.log(JSON.parse(a));

var text = "null";
console.log(typeof JSON.parse(text)); // object

// var text_a = '"ácdscdcs"';
// console.log(typeof JSON(text_a));

// chuyển Js -> JSON
console.log(JSON.stringify(1)); // STRING
console.log(JSON.stringify(["JS", "SCS"])); // STRING
console.log(
  JSON.stringify({
    NAME: "vINH",
    AGE: 20,
  })
); // STRING
