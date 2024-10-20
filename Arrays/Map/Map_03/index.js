var course = ["Js", "Html", "Css", "React", "php"];

var resuilt = course.map(function (courses) {
  return courses.toUpperCase();
});
// console.log(resuilt);

// tự định nghĩa map
Array.prototype.mapCustom = function (callback) {
  //console.log(this);
  let outout = [];
  for (let i = 0; i < this.length; i++) {
    var res = callback(this[i], i);
    outout.push(res);
    console.log("res: ", res.toUpperCase());
  }
  return outout;
};
var list = course.mapCustom(function (courses, index) {
  // console.log(index, courses);
  return `${courses}`;
});

console.log(list.join(","));
