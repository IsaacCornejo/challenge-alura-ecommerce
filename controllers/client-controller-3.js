import { clientServices } from "../screens/service/client-service.js";

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

console.log(category);

const tituloCategoria = document.querySelector(".products__title");
tituloCategoria.innerHTML = `Ver todo sobre ${category}`;

const crearNuevaLinea = (imagen, titulo, precio) => {
  const linea = document.createElement("article");
  linea.classList.add("product__card");
  const imgContainer = document.createElement("div");
  linea.append(imgContainer);
  imgContainer.classList.add("product__card__img-container");
  imgContainer.style.backgroundImage = `url(${imagen})`;
  const contenido = ` 
  <p class="product__card__title">${titulo}</p>
<span class="product__card__price">
  $${precio}
</span>
<a href="#" class="product__card__link">Ver producto</a>
`;
  linea.innerHTML += contenido;
  return linea;
};

const table = document.querySelector(".products__container");

clientServices
  .listaClientes()
  .then((data) => {
    data.forEach((producto) => {
      const nuevaLinea = crearNuevaLinea(
        producto.imagen,
        producto.titulo,
        producto.precio,
        producto.categoria
      );

      if (producto.categoria == category) {
        table.appendChild(nuevaLinea);
      }
    });
  })
  .catch((error) => {
    console.log(error);
    alert("Ocurrio un error");
  });
