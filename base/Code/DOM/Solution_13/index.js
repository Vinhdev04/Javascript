const grandParent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

console.log(grandParent);
console.log(parent);
console.log(child);

child.addEventListener(
  "click",
  function (e) {
    console.log("Child clicked...");
    e.stopPropagation();
  },
  { capture: false }
);

parent.addEventListener(
  "click",
  function (e) {
    console.log("Parent clicked...");
    e.stopPropagation();
  },
  { capture: false }
);

grandParent.addEventListener(
  "click",
  function () {
    console.log("Grandparent clicked...");
  },
  { capture: false }
);
