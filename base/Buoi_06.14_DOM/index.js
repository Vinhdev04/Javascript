const desc = document.querySelector("p");
console.log(desc);

Object.assign(desc.style, {
  color: "violet",
  fontSize: "30px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "2px",
  maxWidth: "500px",
  textAlign: "center",
});
