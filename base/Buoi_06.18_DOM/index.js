const parentElement = document.querySelector("#header");
console.log(parentElement);

// Create new element
const newElement = document.createElement("p");
newElement.textContent = "I'm going to make a new element";
newElement.className = "desc";
newElement.style.color = "violet";

// Add new element to the parent element

parentElement.appendChild(newElement);
parentElement.append(newElement);

parentElement.appendChild("Test"); // Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node
parentElement.append("Test");

console.log(parentElement.appendChild(newElement)); // return value
console.log(parentElement.append(newElement)); // undefined

const elementText = document.createElement("span");
elementText.textContent = "New element";

parentElement.appendChild(elementText, newElement); // add one element
parentElement.append(elementText, newElement); // add all element

const btn = document.createElement("button");
btn.innerHTML = "Click";
let btnAdd = parentElement.appendChild(btn);
btnAdd.addEventListener("click", function (e) {
  alert("button is clicked!");
});
