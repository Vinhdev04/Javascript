const arr1 = ["Javascript", "PHP", "Ruby"];
const arr2 = ["Html", "CSS", "React"];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const copy = [...arr3];
console.log(copy);

let obj1 = {
  name: "Vinh",
  age: 20,
};

let obj2 = {
  gender: "male",
  address: "HCM",
};

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
