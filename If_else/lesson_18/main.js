var course = {
  name: "js",
  price: 100,
};

// If
if (course.price > 0) {
  console.log(course.price);
}

// Ternary Operators
var resuilt = course.price > 0 ? `${course.price} Coins` : `Free Coins`;
console.log(resuilt);

var a = 1;
var b = 2;

var resX = a > 0 ? `${a}` : `${b}`;
console.log(resX);
