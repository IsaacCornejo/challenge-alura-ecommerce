import { clientServices } from "./../screens/service/client-service.js";

const obtenerInformacion = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const imagen = document.querySelector("#URL");
  const categoria = document.querySelector(".input__categoria");
  const titulo = document.querySelector(".input__nombre");
  const precio = document.querySelector(".input__precio");
  const descripcion = document.querySelector("#mensaje");

  clientServices.detalleProducto(id).then((producto) => {
    imagen.value = producto.imagen;
    categoria.value = producto.categoria;
    titulo.value = producto.titulo;
    precio.value = producto.precio;
    descripcion.value = producto.descripcion;
  });
};

obtenerInformacion();

const btnEditar = document.querySelector(".input__btn-editar-producto");

btnEditar.addEventListener("click", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const imagen = document.querySelector("#URL").value;
  const categoria = document.querySelector(".input__categoria").value;
  const titulo = document.querySelector(".input__nombre").value;
  const precio = document.querySelector(".input__precio").value;
  const descripcion = document.querySelector("#mensaje").value;
  console.log(imagen, categoria, titulo, precio, descripcion);
  clientServices
    .actualizarProducto(imagen, categoria, titulo, precio, descripcion, id)
    .then(() => {
      window.location.href = "./../screens/actualizacion-completada.html";
    });
});
