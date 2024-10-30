const container = document.querySelector("#container");
console.log(container);

let baseUrl =
  " https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

// const newImg = document.createElement("img");
// newImg.src = `${baseUrl}1.png`;
// container.appendChild(newImg);

for (let i = 1; i <= 150; i++) {
  const element = document.createElement("div");
  const newImg = document.createElement("img");
  const span = document.createElement("span");

  element.classList.add("pokemon");
  const parentDiv = container.appendChild(element);
  newImg.src = `${baseUrl}${i}.png`;
  parentDiv.appendChild(newImg);

  span.innerText = ` #${i}`;
  parentDiv.appendChild(span);
}
