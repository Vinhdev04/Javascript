const searchBtn = document.querySelector(".btn-search");
console.log(searchBtn);
const foodList = document.querySelector(".block");
const foodDetail = document.querySelector(".food__details");
const closeBtn = document.querySelector(".icon-close");
const input = document.querySelector(".form-control");
console.log(foodList);
console.log(foodDetail);
console.log(closeBtn);

searchBtn.addEventListener("click", getFoodList);
foodList.addEventListener("click", getFoodRecipe);
function getFoodList() {
  const searchValue = input.value.trim();
  console.log("🚀 ~ getFoodList ~ searchValue :", searchValue);
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let html = "";
      if (data.meals) {
        data.meals.forEach((item) => {
          html += `
              <div class="result__wrapper" data-id = "${item.idMeal}">
            <div class="content" >
              <div class="wrapper__img">
                <img
                  src="${item.strMealThumb}"
                  alt=""
                  class="content__img"
                  style="width: 250px"
                />
              </div>
              <h4 class="content__title">${item.strMeal}</h4>
              <div class="control">
                <button class="btn btn-secondary">Get Recipe</button>
              </div>
            </div>
          </div>
          `;
        });
        foodList.classList.remove("message");
      } else {
        html = "Sorry, no recipe here.";
        foodList.classList.add("message");
      }
      foodList.innerHTML = html;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getFoodRecipe(e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("control")) {
    let item = e.target.parentElement.parentElement.parentElement;
    console.log(item);
  }
}
