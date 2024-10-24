const headElement = document.querySelector("h1");
console.log(headElement);

// GET -> innerText
console.log(headElement.innerText);

// GET ->  TextContent
console.log(headElement.textContent);

// SET ->
headElement.innerText = "New content 1";
headElement.textContent = "New content 2";
headElement.innerHTML = "<span>Html</span>";

const box = document.querySelector(".box");
console.log(box);
box.innerHTML = "<h1>Title box</h1>";
console.log(box.outerHTML); // override
box.outerHTML = "<h2>Title</h2>";
console.log(box);
