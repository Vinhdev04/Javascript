// Loop

let numbers = [1, 2, 3, 4, 5];

for (const element of numbers) {
  console.log("Number: ", element);
}

let myObj = ["Vinh", "Hoang", "Anh", "Ly"];
for (const element of myObj) {
  console.log("My name: ", element);
}

// for in -> lấy ra key cảu object

let person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in person) {
  // console.log(key);
  // console.log(person.city);
  console.log(key, person[key]);
}

// For of -> lấy ra phan tu cau Array,string (not object)

let myArray = ["Blue", "Green", "Yellow"];
for (items of myArray) {
  console.log(items);
}

let user = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Alice",
    age: 25,
  },
  {
    name: "Bob",
    age: 35,
  },
];
for (item of user) {
  for (key in item) {
    console.log(key, item[key]);
  }
}
