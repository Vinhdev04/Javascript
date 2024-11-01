const btn = document.getElementById("btn");
console.log(btn);

const title = document.getElementById("title");
console.log(title);

btn.addEventListener("click", function () {
  // change color body
  // document.body.style.backgroundColor = "rgb(0,255,0)";
  document.body.style.backgroundColor = changeColor();

  // change color title
  const color = changeColor();
  title.textContent = "Color: " + color;
});

// function change color body with rgba color
function changeColor() {
  const colorR = Math.floor(Math.random() * 256); // 0 -> 255
  const colorG = Math.floor(Math.random() * 256); // 0 -> 255
  const colorB = Math.floor(Math.random() * 256); // 0 -> 255

  const setColor = `rgb(${colorR},${colorG},${colorB})`;
  return setColor; // return color
}
