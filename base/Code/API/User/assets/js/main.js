// # ---------------- SHOW/HIDE PASSWORD ----------------

const passwordAccess = (loginPass, loginIcon) => {
  const input = document.getElementById("password");
  console.log(input);
  const iconShow = document.getElementById("login__pass");
  console.log(iconShow);

  iconShow.addEventListener("click", () => {
    input.type === "password"
      ? (input.type = "text")
      : (input.type = "password");
    iconShow.classList.toggle("ri-eye-fill");
    iconShow.classList.toggle("ri-eye-off-fill");
  });
};

passwordAccess("password", "login__pass");
// # ---------------- SHOW/HIDE PASSWORD ----------------
const passwordRegister = (loginPass, loginIcon) => {
  const input = document.getElementById("password");
  console.log(input);
  const iconShow = document.getElementById("login__pass");
  console.log(iconShow);

  iconShow.addEventListener("click", () => {
    input.type === "password"
      ? (input.type = "text")
      : (input.type = "password");
    iconShow.classList.toggle("ri-eye-fill");
    iconShow.classList.toggle("ri-eye-off-fill");
  });
};
// passwordRegister("passwordCf", "loginConfirm");

// # ---------------- SHOW/HIDE Login and Register ----------------
const register = document.getElementById("loginAccessRegister"),
  registerBtn = document.getElementById("loginBtnRegister"),
  btnAccess = document.getElementById("loginBtnAccess");
console.log("🚀 ~ btnAccess:", btnAccess);
console.log("🚀 ~ registerBtn:", registerBtn);
console.log("🚀 ~ register:", register);

registerBtn.addEventListener("click", () => {
  register.classList.add("active");
});

btnAccess.addEventListener("click", () => {
  register.classList.remove("active");
});

// # ---------------- # Post user ----------------
// const api = "http://localhost:3000/users";
