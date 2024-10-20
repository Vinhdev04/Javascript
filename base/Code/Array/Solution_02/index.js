// forEach, find,filter,some,every,reduce

// filter -> return new array
var courses = [
  {
    name: "js",
    price: 100,
  },
  {
    name: "react",
    price: 200,
  },
  {
    name: "html",
    price: 300,
  },
];

var result = courses.filter(function (course, index, array) {
  return course.price > 100;
});
console.log(result);

// built filter2() -> -> ko duyet mang rong
Array.prototype.filter2 = function (callback) {
  for (var index in this) {
    var output = [];
    // kiểm tra xem filter2 có nằm trong phần tử phương thức gần nhất (prototype)
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        output.push[this.index];
      }
    }
  }
  return output;
};

courses.filter(function (course, index, array) {
  console.log(course, index, array);
  return course.price > 100;
});
