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
    e.stopImmediatePropagation();
    //e.stopPropagation();
  },
  { capture: true }
);

parent.addEventListener(
  "click",
  function (e) {
    console.log("Parent clicked...");
    e.stopPropagation();
  },
  { capture: true }
);

grandParent.addEventListener(
  "click",
  function (e) {
    console.log("Grandparent clicked...");
  },
  { capture: true }
);

// stopPropagation() -> Không ngăn chặn sự kiện cảu cùng 1 element
// grandParent.addEventListener(
//   "click",
//   function (e) {
//     console.log("Grandparent clicked...2");
//     e.stopImmediatePropagation(); // prevent
//   },
//   { capture: true }
// );
