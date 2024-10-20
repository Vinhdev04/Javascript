// forEach, find,filter,some,every,reduce

// forEach
var course = ["Js", "PHP", "Ruby", "C#"];

// forEach not return value
course.length = 100;
var output = course.forEach(function (course, index, array) {
  console.log(course, index, array);
});
console.log(output); // undefined

// buitl method forEach2() -> -> ko duyet mang rong
Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    this.hasOwnProperty(index);
    // kiểm tra xem forEach2 có nằm trong phần tử phương thức gần nhất (prototype)
    if (this.hasOwnProperty(index)) {
      console.log(index, this.hasOwnProperty(index));
      console.log("Index: ", index);
      callback(this[index], index, this);
    }
  }
};

course.forEach2(function (course, index, array) {
  console.log(course, index, array);
});
console.log(course);
