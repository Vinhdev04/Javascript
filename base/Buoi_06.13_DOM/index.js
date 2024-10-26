const element = document.querySelector("#demo");
console.log(element);

// 1. get

// textContent
console.log("Sử dụng textContent: ");
console.log(element.textContent);

// innerText
console.log("Sử dụng innerText: ");
console.log(element.innerText);

// innerHTML
console.log("Sử dụng innerHTML: ");
console.log(element.innerHTML);

// 2. set
const elementLast = document.querySelector("#test");

// textContent
elementLast.textContent = "<b>This is test case 2</b>";

// innerText
elementLast.innerText = "This is test case 3 <b>This is test case 2</b>";

// innerHTML
elementLast.innerHTML = "This is a test case 1  <i>This is test case 2</i>";
