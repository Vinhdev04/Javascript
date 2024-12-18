// TODO: Fetch API with Async/Await (GET, POST, PUT, DELETE)

const btn = document.getElementById("btn");
console.log(btn);

// const handleClick = () => {
//   fetch("https://reqres.in/api/users")
//     .then((res) => {
//       if (!res.ok) {
//         console.log("Erro when is fetching data.....");
//         return;
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => console.log(error));
// };

const newUser = {
  name: "Ana na",
  job: "Development",
  nation: "USA",
};

// # async/await + 'POST'
const handleClick = async () => {
  try {
    const res = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();

    if (!res.ok) {
      console.log("Error when is fetching data.....");
      return;
    }
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

btn.addEventListener("click", handleClick);
