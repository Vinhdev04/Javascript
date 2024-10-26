const element = document.querySelector("#testElement");
console.log(element);

// classList.add():
element.classList.add("test-01");

// classList.remove():
element.classList.remove("test");

// classList.toggle():
element.classList.toggle("test-toggle");

// classList.replace():
element.classList.replace("test-02", "testX");

// classList.contains():
console.log(element.classList.contains("test-01")); // true
console.log(element.classList.contains("test")); // false
