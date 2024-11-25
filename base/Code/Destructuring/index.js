// destructuring
const infoUsers = {
  name: "Nguyen Van A",
  age: 20,
  status: "200",
  address: "HCM",
  getUser: function () {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};
console.log(infoUsers);
console.log(infoUsers.name);
console.log(infoUsers.age);

// destructuring + ...res
const { name, age, ...res } = infoUsers;
console.log(name);
console.log(age);
console.log(res);
