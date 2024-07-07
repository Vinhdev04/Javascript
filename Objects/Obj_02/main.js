// Object in JS:

// initial objects
let myObject = {
  fullName: "Vinh",
  id: "042204006711",
  school: "Hutech",
  years: "2004",
  birthDay: "04/01/2004",
  "@mail": "pcv.fed@gmail.com",
  address: {
    street: "11 High Street",
    city: "Ha Tinh",
    state: "HT",
    country: "Vietnamese",
  },
  score: [8, 9, 10],

  // method
  getAge: function () {
    return 2024 - this.years;
  },

  // method
  getScore: function () {
    sumAdv = this.score.reduce((a, b) => a + b, 0);
    return sumAdv / 3;
  },

  // method
  getAddress: function () {
    return (
      "My address: " +
      this.address.street +
      ", " +
      this.address.city +
      ", " +
      this.address.state +
      ", " +
      this.address.country
    );
  },
};

console.log(myObject);
// Một số giải pháp hiển thị đối tượng JavaScript là:
// callback
// Hiển thị thuộc tính đối tượng theo tên
console.log(myObject.getScore()); // Output: 9
console.log(myObject.getAge()); // Output: 20
console.log(myObject.getAddress()); // Output: My address: 11 High Street, Ha Tinh, HT, Vietnamese

//Hiển thị thuộc tính đối tượng trong vòng lặp
let person = "";
for (let x in myObject) {
  person += myObject[x] + ", ";
}
console.log(person);

// Hiển thị đối tượng bằng Object.values()
const displayObj = Object.values(myObject);

// Hiển thị đối tượng bằng Object.entries()
const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };
let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + ", ";
}
console.log(text);

// Hiển thị đối tượng bằng JSON.stringify()
let myString = JSON.stringify(myObject);
console.log(myString);
