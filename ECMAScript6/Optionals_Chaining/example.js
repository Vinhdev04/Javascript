// TODO: Optional Chaining  (?.)

let user = {};
console.log(user?.address?.stress); // undefined

// TODO:  (??)
console.log(user?.address?.stress ?? "not found"); // not found

// TODO: Function: ?.()
let userAdmin = {
  admin() {
    console.log("I am Vinh");
  },
};
let userGuest = {};

console.log(userAdmin.admin()); // I am Vinh
// console.log(userGuest.admin()); // Error: userGuest is not a function
console.log(userGuest.admin?.()); // undefined
console.log(userGuest.admin?.()); // undefined
console.log(userGuest?.admin?.()); // undefined

// TODO: Object:  ?.[]
let key = "name";
let user1 = {
  name: "John",
};
let user2 = null;

console.log(user1?.[key]);
console.log(user2?.[key]);
delete user?.name;
