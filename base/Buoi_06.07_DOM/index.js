// getElementById
const test = document.getElementById("heading");
console.log(test);

// getElementsByClassName
const test2 = document.getElementsByClassName("head");
console.log(test2);

// getElementsByTagName
const h2 = document.getElementsByTagName("h2");
console.log(h2);

// querySelector
const item = document.querySelector(".list-item:last-child");
console.log(item);

// querySelectorAll
const list = document.querySelectorAll(".list");
console.log(list);

// HTML Colection
console.log(document.forms);
console.log(document.anchors);

// getAttribute("") - setAttribute("","")
const title = document.querySelector("p");
console.log(title);
title.classList.add("title");
title.id = "title";

title.setAttribute("title", "title");
console.log(title.getAttribute("id"));
