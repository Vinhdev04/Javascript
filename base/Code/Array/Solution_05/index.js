// forEach, find,filter,some,every,reduce

// every() -> all item
var courses = [
  {
    id: 1,
    name: "html",
    coin: 500,
    experience: "basic",
  },
  {
    id: 2,
    name: "css",
    coin: 300,
    experience: "intermediate",
  },
  {
    id: 3,
    name: "js",
    coin: 200,
    experience: "advanced",
  },
  {
    id: 4,
    name: "php",
    coin: 400,
    experience: "basic",
  },
  {
    id: 5,
    name: "java",
    coin: 700,
    experience: "advanced",
  },
];

var result = courses.every((course) => {
  return course.experience === "advanced";
});
console.log(result);

// built every2()
Array.prototype.every2 = function (callback) {
  var output = true;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (!result) {
        output = false;
        break;
      }
    }
  }
  return output;
};
var result2 = courses.every2((course, index, array) => {
  return course.experience === "advanced";
});
console.log(result2);
