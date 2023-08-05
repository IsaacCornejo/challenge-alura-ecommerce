const btnIngreso = document.querySelector(".formulario__login-btn");
const inputEmail = document.querySelector(".formulario__login__input-email");
const inputPassword = document.querySelector(
  ".formulario__login__input-password"
);
const textoValidacion = document.querySelectorAll(
  ".formulario__login__validacion"
);

btnIngreso.addEventListener("click", function () {
  // Cambiar la URL de la página actual al archivo HTML deseado

  if (inputEmail.value == "admin" && inputPassword.value == "password") {
    window.location.href = "./../screens/productos.html";
    console.log(inputEmail.value, inputPassword.value);
  } else if (inputEmail.value == "" || !inputEmail.value == "admin") {
    textoValidacion[0].style.display = "block";
  } else if (inputPassword.value == "" || !inputPassword == "password") {
    textoValidacion[1].style.display = "block";
  }
});
