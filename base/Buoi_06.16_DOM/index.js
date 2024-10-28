// DOM Parent, Children, Siblings

const content = document.querySelector(".head__content");
console.log(content);

// 1.DOM Parent
console.log(content.parentElement);
console.log(content.parentElement.parentElement);

Object.assign(content.parentElement.style, {
  fontSize: "20px",
  color: "#000",
  fontWeight: "bold",
  background: "green",
});

// 2. DOM Children -> HTML Collection
console.log(content.children);
console.log(content.children[1]);
console.log(content.nodeName);
console.log(content.nodeType);

// 3. nextElementSibling
console.log(content.children[0].nextElementSibling);

// 4. previousElementSibling
console.log(content.children[1].previousElementSibling);
