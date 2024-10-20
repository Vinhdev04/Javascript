// forEach, find,filter,some,every,reduce

// some()
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

var result = courses.some((course, index, array) => {
  return course.experience === "advanced";
});
console.log(result);

// built some2() -> ko duyet mang rong
Array.prototype.some2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
      if (callback(this[index], index, this)) {
        return true;
      }
    }
  }
  return false;
};

var result2 = courses.some2((course, index, array) => {
  return course.experience === "advanced";
});
console.log(result2);
