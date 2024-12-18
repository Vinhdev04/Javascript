// TODO: Fetch API (GET, POST, PUT, DELETE | JSON)

// console.log(fetch("https://reqres.in/api/users"));

// # Method: 'POST'
const newUser = {
  name: "Destiny",
  job: "Developer",
};

fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newUser),
})
  .then((res) => {
    if (!res.ok) {
      console.log("Problem in fetch....");
      return;
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
