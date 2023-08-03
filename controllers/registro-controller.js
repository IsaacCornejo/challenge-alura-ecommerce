import { clientServices } from "../screens/service/client-service.js";

const btnAgregarProducto = document.querySelector(
  ".input__btn-agregar-producto"
);

btnAgregarProducto.addEventListener("click", () => {
  const imagen = document.querySelector("#URL").value;
  const categoria = document.querySelector(".input__categoria").value;
  const titulo = document.querySelector(".input__nombre").value;
  const precio = document.querySelector(".input__precio").value;
  const descripcion = document.querySelector("#mensaje").value;
  console.log(imagen, categoria, titulo, precio, descripcion);
  clientServices
    .crearProducto(imagen, categoria, titulo, precio, descripcion)
    .then((respuesta) => {
      window.location.href = "./../screens/registro-completado.html";
      imagen.value,
        categoria.value,
        categoria.value,
        titulo.value,
        precio.value,
        descripcion.value;
    })
    .catch((error) => {
      alert("Ocurrio un error");
    });
});
