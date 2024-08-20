// Some () -> Kiểm tra 1 phần tử thỏa mãn điều kiện thì dừng
let myFamily = [
  {
    name: "Nam",
    age: 48,
    experience: "master",
  },
  {
    name: "Thuong",
    age: 47,
    experience: "doctor",
  },
  {
    name: "Dung",
    age: 28,
    experience: "Sales",
  },
  {
    name: "Nhi",
    age: 42,
    experience: "doctor",
  },
  {
    name: "Vinh",
    age: 20,
    experience: "Progammer",
  },
];

myFamily.some(function (family, index) {
  console.log(family);
  console.log(index, family.name);
});

var isCheck = myFamily.some(function (family, index) {
  console.log(index);
  return family.experience === "doctor";
});
console.log(isCheck);
