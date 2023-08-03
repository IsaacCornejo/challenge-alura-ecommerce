import { clientServices } from "../screens/service/client-service.js";

console.log(clientServices);

const crearProductoEditable = (imagen, titulo, precio, id) => {
  const linea = document.createElement("article");
  linea.classList.add("product__card");

  const imgContainer = document.createElement("div");
  linea.append(imgContainer);
  imgContainer.classList.add("product__card__img-container");

  const iconosEdicionProducto = document.createElement("p");
  imgContainer.append(iconosEdicionProducto);

  const iconoEdicion = document.createElement("i");
  iconoEdicion.classList.add("bi", "bi-trash-fill");
  iconosEdicionProducto.append(iconoEdicion);

  const iconoEliminar = document.createElement("i");
  iconoEliminar.classList.add("bi", "bi-pencil-fill");
  iconosEdicionProducto.append(iconoEliminar);

  imgContainer.style.backgroundImage = `url(${imagen})`;
  const contenido = ` 
  <p class="product__card__title">${titulo}</p>
<span class="product__card__price">
  $${precio}
</span>
<p class="product__card__id">
${id} 
</p>
`;
  linea.innerHTML += contenido;
  return linea;
};

const table = document.querySelector(".productos__container");

clientServices
  .listaClientes()
  .then((data) => {
    data.forEach((producto) => {
      const nuevaLinea = crearProductoEditable(
        producto.imagen,
        producto.titulo,
        producto.precio,
        producto.id
      );
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => {
    console.log(error);
    alert("Ocurrio un error");
  });
