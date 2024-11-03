// get id button
const btnPrev = document.getElementById("btn-previous");
const btnNext = document.getElementById("btn-next");
console.log(btnPrev);
console.log(btnNext);

// get progress bar
const progressBar = document.getElementById("progress");
console.log(progressBar);

// get step
const stepList = document.querySelectorAll(".step");
console.log(stepList);

// initial start
let currentStep = 1;

//
btnNext.addEventListener("click", () => {
  changeStep(1); // increase step
});
btnPrev.addEventListener("click", () => {
  changeStep(-1); // decrease step
});

function changeStep(step) {
  currentStep += step; // change current step

  update(); // update progress
}

function update() {
  stepList.forEach((step, index) => {
    // console.log(step);
    // console.log(index);
    if (index < currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  // turn up button
  btnPrev.disabled = currentStep === 1;
  btnNext.disabled = currentStep === stepList.length;

  // update progress bar
  progressBar.style.width =
    ((currentStep - 1) / stepList.length - 1) * 100 + "%";
}
