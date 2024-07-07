// Object Prototype - Basic

// Object constructor, function Constructor: -> viết hoa chữ cái đầu của tên Object Constructor
function UserName(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  // method
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Initial data
let author = new UserName("Vinh", "Pham", "picture1.png");
let user = new UserName("Ana", "Lice", "picture2.png");

console.log(author);
console.log(user);

//
author.title = "FrontEnd";
user.comment = "You look like";

// Check Constructor
console.log(user.constructor);
console.log(user.constructor === UserName);

console.log(author.getName());
console.log(user.getName());

// Object Prototypes

// 1. Insert Properties, Attributes
UserName.prototype.className = "DevG@";
console.log(user.className);
console.log(user);

// 2. Insert methods
UserName.prototype.getClassName = function () {
  return this.className;
};
console.log(user.getClassName());
