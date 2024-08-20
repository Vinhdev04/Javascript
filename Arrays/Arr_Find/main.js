// Find () -> Lặp qua các phần tử và kiểm tra nếu đúng sẻ trả về phần tử đó và kết thúc, không tìm thấy trả về "undefined"
// -> CHỉ trả về đối tượng được tìm thấy đầu tiên
let mySkill = ["Html", "Css", "JavaScript", "PhP", "ReactJS", "PhP"];

var skill = mySkill.find(function (skill, index) {
  console.log(index);
  return skill === "PhP";
});
console.log(skill); // Output: true

var findSkill = mySkill.find(function (skill, index) {
  console.log(index);
  return skill === "Python";
});
console.log(findSkill); // Output: undefined
