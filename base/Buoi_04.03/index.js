// Làm việc với Object

let myObj = {
  name: "Vinh",
  age: 25,
  city: "Hanoi",
  hobbies: ["reading", "painting", "coding"],
};

// Lấy dữ liệu object
console.log(myObj);
console.log(myObj.name);

// Add value to object
myObj.career = "Web Developer";
console.log(myObj);
myObj["Crush"] = "Javascript";
console.log(myObj);

myObj["Member-family"] = "Mother,Sister,Father and Me";
console.log(myObj["Member-family"]);

// Xóa dữ liệu object
delete myObj.city;
console.log(myObj);
