let Telephone = "tel";

let myObj01 = {
  name: "Vinh",
  age: 20,
  address: "HCM",
  [Telephone]: 352032375,
  getName: function () {
    return this.name;
    // return myObj01.name;
  },
};
console.log(myObj01.getName);
console.log(myObj01.getName());
console.log(typeof myObj01.getName); // function

console.log(myObj01);
console.log(myObj01.name); // Vinh
console.log(typeof myObj01); // object

// Thêm values:
myObj01.email = "pcv.fed@gmail.com";
console.log(myObj01);

myObj01["my-email"] = "vinhnam04012004@gmail.com";
console.log(myObj01);

// Lấy values:
console.log(myObj01.age);
console.log(myObj01.name);

console.log(myObj01["name"]);
console.log(myObj01.fullName); // undefined

// Xoá values:
delete myObj01.address;
console.log(myObj01);
