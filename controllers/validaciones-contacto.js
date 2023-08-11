const inputNameContacto = document.querySelector(".input__name");
const inputMensajeContacto = document.querySelector(".input__textarea");
const btnEnviarContacto = document.querySelector(".input__button");

btnEnviarContacto.addEventListener("click", () => {
  if (inputMensajeContacto.value == "" && inputNameContacto.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...Parece que no has escrito nada para enviar!🤨",
    });
  }

  if (!inputMensajeContacto.value == "" && !inputNameContacto == "") {
    inputMensajeContacto.value = "";
    inputNameContacto.value = "";
    Swal.fire({
      title: "Mensaje enviado con exito",
      icon: "success",
    });
  }

  console.log(inputMensajeContacto.value);
});
