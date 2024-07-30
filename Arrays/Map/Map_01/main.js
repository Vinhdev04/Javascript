// map() in JS

let myCourse = [
  {
    id: 1,
    name: "js",
    coin: 200,
  },
  {
    id: 2,
    name: "html",
    coin: 300,
  },
  {
    id: 3,
    name: "css",
    coin: 400,
  },
  {
    id: 5,
    name: "react",
    coin: 500,
  },
];

console.log(myCourse);

// let myNewCourse = myCourse.map(); // undefined is not a function
// let myNewCourse = myCourse.map(function (course, index) {
//   // console.log(course);
// });

let myCourseFn = function (course, index, originArray) {
  // console.log(countCourse);
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    coin: `My coin: ${course.coin}`,
    index: index,
    originArray: originArray,
  };
};
let myNewCourseX = myCourse.map(myCourseFn);

console.log(myNewCourseX);
