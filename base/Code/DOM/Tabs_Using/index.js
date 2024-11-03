const tabs = document.querySelectorAll(".tab__btn");
const content = document.querySelectorAll(".content");
const line = document.querySelector(".line");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    // Remove active class from all tabs
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    // Add active class to the clicked tab
    tab.classList.add("active");

    // Update line's width and position
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    content.forEach((content) => {
      content.classList.remove("active");
    });
    content[index].classList.add("active");
  });
});
