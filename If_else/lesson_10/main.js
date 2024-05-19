/* Data Type in Js:
        1. Primitive Data:
          - Number
          - String
          - Boolean
          - Null
          - Symbol
          - Undefined
        2. Complex Data:
          - Function
          - Object
 */

// Number type
var a = 1;
var b = 2;

// String type
var fullName = "Pham Cong Vinh";

// Boolean type
var isSuccess = true;

// Undefined type
var age;

// Null type
var isNull = null;

// Symbol type
var id = Symbol("id");
var id2 = Symbol("id2");

// Function type
var myFunction = function () {
  alert("my function");
};

// Object type
var myObject = function () {
  this.name = "Pham";
  this.age = 20;
};

// Array type
var myArray = function () {
  this[0] = "Pham";
  this[1] = "Cong";
  this[2] = "Vinh";
  this[3] = 20;
  this[4] = true;
  this[5] = null;
  this[6] = Symbol("id");
  this[7] = undefined;
  this[8] = function () {
    alert("my function");
  };
};
