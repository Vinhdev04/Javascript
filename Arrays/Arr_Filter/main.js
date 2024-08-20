// Filter() tương tự find() -> những nó trả về tát cả phần tử thỏa mãn điều kiện thay vì một phần tử thỏa mãn điều kiện
let courses = [
  {
    id: 1,
    name: "html",
    experience: "basic",
  },
  {
    id: 2,
    name: "css",
    experience: "intermediate",
  },
  {
    id: 3,
    name: "js",
    experience: "advanced",
  },
  {
    id: 4,
    name: "php",
    experience: "basic",
  },
  {
    id: 5,
    name: "html",
    experience: "basic",
  },
];

let myCourse = courses.filter(function (courses, index) {
  return courses.name === "html";
});
console.log(myCourse);
