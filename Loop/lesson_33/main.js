let inforName = {
  name: "Vinh",
  age: 19,
  address: "HT",
  nation: "VietNam",
};

// For in Objects
for (let info in inforName) {
  // console.log(info);
  // console.log(typeof info); // Output: String
  console.log(inforName[info]);
}

// For in Array
let className = ["22A", "23B", "24C", "25D"];
for (let classX in className) {
  // console.log(classX); // Output: 0  1  2   3
  // console.log(typeof classX); // Output: String;
  console.log(className[classX]); // Output:
}

// For in String
let fullName = "Phạm Công Vinh";
for (let key in fullName) {
  console.log(fullName[key]);
}

function run(object) {
  var arr = [];
  for (let key in object) {
    arr.push(`Thuộc tính ${key} có giá trị + ${object[key]}`);
  }
  return arr;
}

// Expected results:
console.log(run({ name: "Nguyen Van A", age: 16 }));

function run(object) {
  const result = [];
  for (const key in object) {
    result.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
  }
  return result;
}
console.log(run({ name: "Nguyen Van A", age: 16 }));
