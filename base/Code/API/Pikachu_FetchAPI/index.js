// fetch(url)
//   .then((response) => {
//     // check bug
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))

//   .catch((err) => {
//     console.error(err);
//   });

// Function to fetch the Pokémon data
async function fetchData(inputName) {
  try {
    // Make sure the inputName is valid
    if (!inputName) {
      alert("Please enter a Pokémon name.");
      return;
    }

    // const url = `https://pokeapi.co/api/v2/pokemon${inputName.toLowerCase()}`;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon${inputName.toLowerCase()}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    // Check if the sprite exists
    const pokemonSprites = data.sprites?.front_default;
    if (!pokemonSprites) {
      alert("No image available for this Pokémon.");
      return;
    }

    // Set the image source and display the image
    const img = document.getElementById("pokemonImage");
    img.src = pokemonSprites;
    img.style.display = "block"; // Ensure the image is visible
  } catch (error) {
    console.error(error);
    alert("An error occurred while fetching data. Please try again.");
  }
}

// Add event listener for the button click
document.querySelector("#btn").addEventListener("click", function () {
  const inputName = document.querySelector("#name").value.trim();

  if (inputName) {
    fetchData(inputName); // Call fetchData with the input name
  }

  // } else {
  //   alert("Please enter a Pokémon name.");
  // }
});

const btnClick = document.querySelector("#btn");
const searchValue = document.querySelector(".search-value");
const inputValue = document.querySelector(".input");
console.log(btnClick);
console.log(searchValue);
console.log(inputValue);

btnClick.addEventListener("click", () => {
  searchValue.classList.toggle("active");
  inputValue.focus();
});
