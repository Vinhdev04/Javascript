console.log(this.location.href);
console.log(window.location.href);

// ko bật strict mode
function test() {
  console.log(this);
}
test(); // object window

// bật  strict mode

("use strict");

function test() {
  console.log(this); // undefined
}
test();

// this trong sự kiện DOM
const btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click", function () {
  console.log(this); // button
  console.log(btn); // button
});

const listItem = document.querySelectorAll("li");
console.log(listItem);
[...listItem].forEach(function (item) {
  item.addEventListener("click", function () {
    console.log(this); // li
    console.log(item); // li
  });
});

// This trong Object

let obj = {
  name: "Vinh",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}, ${this.age} ages`);
    console.log(`Hello, my name is ${obj.name}, ${obj.age} ages`);
  },
  id: {
    name: "PHẠM CÔNG VINH",
    address: "Abc street",
    getId: function () {
      console.log(this.name + "," + this.address);
    },
  },
};

obj.greet(); // Hello, my name is John
obj.id.getId();

// This trong Arrow function -> ko có "this"
[...listItem].forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item); // li
    console.log(this); // window
  });
});
