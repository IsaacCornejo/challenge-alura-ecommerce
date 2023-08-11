import { clientServices } from "./../screens/service/client-service.js";

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

console.log(category);

const tituloCategoria = document.querySelector(".products__title");
tituloCategoria.innerHTML = `Ver todo sobre ${category}`;

const crearNuevaLinea = (imagen, titulo, precio, categoria, id) => {
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

  const btnVerProducto = linea.querySelector(".product__card__link");
  console.log(btnVerProducto);
  btnVerProducto.addEventListener("click", () => {
    window.location.href = `./../screens/desafio-producto.html?id=${id}`;
  });

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
        producto.categoria,
        producto.id
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

const inputBusqueda = document.querySelector(".header__input-busqueda");
const btnBusqueda = document.querySelector(".header__btn-busqueda");
btnBusqueda.addEventListener("click", () => {
  if (!inputBusqueda.value == "") {
    let busqueda = inputBusqueda.value;
    window.location.href = `./../screens/busqueda.html?value=${busqueda}`;
  }
});

inputBusqueda.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !inputBusqueda.value == "") {
    let busqueda = inputBusqueda.value;
    window.location.href = `./../screens/busqueda.html?value=${busqueda}`;
  }
});
