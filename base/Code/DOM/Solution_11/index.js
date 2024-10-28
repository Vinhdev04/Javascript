const container = document.querySelector("#container");
console.log(container);

for (let i = 0; i < 100; i++) {
  let btn = document.createElement("button");
  btn.innerText = "Click me " + (i + 1);
  if (i % 2 == 0) {
    btn.style.backgroundColor = "violet";
    btn.style.color = "white";
    btn.style.borderRadius = "20px";
    btn.style.padding = "5px 10px";
    btn.style.margin = "5px";
    btn.style.cursor = "pointer";
  } else {
    btn.style.backgroundColor = "aqua";
    btn.style.borderRadius = "20px";
    btn.style.padding = "5px 10px";
    btn.style.margin = "5px";
    btn.style.cursor = "pointer";
  }
  container.appendChild(btn);
}

// Xử lý sự kiện click cho từng button

container.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked: ", event.target.innerText);
    event.target.style.backgroundColor = "yellow";
    event.target.style.color = "#000";
    setTimeout(function () {
      event.target.style.backgroundColor = "aqua";
    }, 2000);
  }
});
