// TODO: Class in JavaScript
class Person {
  // # constructor
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // # method
  getAge() {
    return this.age;
  }

  // # method
  getEmail() {
    return `My email: ${this.email}`;
  }
}

class Son extends Person {
  constructor(habit) {
    super();
    this.habit = habit;
  }
}
const myPerson = new Person("Vinia", 20, "pcv.fed@gmail.com");
console.log("My name is ", myPerson.name, "I'm am", myPerson.age, " olds");
console.log(myPerson.getAge());
console.log(myPerson.getEmail());
