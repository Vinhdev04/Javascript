const content = document.querySelector("div");

// Create a DOM element (an image)
const element = document.createElement("img");
console.log(element);
console.dir(element); // Check attributes and functions

// Set the image source
element.src = "./base/Buoi_06.17_DOM/img01.jpg"; // This sets the image source
element.setAttribute("src", "./base/Buoi_06.17_DOM/img01.jpg"); // This is redundant, as the src is already set

// Append the image to the body (commented out in your code)
document.body.append(element);

// Create a description paragraph
const desc = document.createElement("p");
desc.innerHTML =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, expedita?";
document.body.append(desc); // Append description to the body

// Prepend content to the main text section
const elm01 = document.createElement("p");
elm01.textContent = "I LOVE YOU SO MUCH"; // Create the first paragraph

const elm02 = document.createElement("span");
elm02.textContent = "Hi I AM VINH"; // Corrected: Use textContent instead of parentheses

// Select the main text area
let mainTxt = document.querySelector(".text");
console.log(mainTxt);

// Append the new elements and text to the main text area
mainTxt.prepend(elm01, elm02); // Changed to prepend to add elements at the start
console.log(mainTxt.prepend(elm01, elm02));
