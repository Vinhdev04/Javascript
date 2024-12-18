// TODO: Destructuring in Javascript

// # Array
const city = ["HT", "HN", "HN", "TA", "QT"];
const [HT, HN, ...resX] = city;
console.log(HT);
console.log(HN);
console.log(resX);

// # Object
const user = {
  name: "Vaniza",
  age: 20,
  email: "pcv.fed@gmail.com",
  address: "HCM",
};

const { name, email, ...res } = user;
console.log(name);
console.log(email);
console.log(res);
