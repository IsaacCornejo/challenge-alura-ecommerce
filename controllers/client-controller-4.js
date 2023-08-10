import { clientServices } from "./../screens/service/client-service.js";

const crearNuevaLinea = (imagen, titulo, precio, descripcion, id) => {
  const linea = document.createElement("div");
  linea.classList.add("mostrar-producto__container");
  const imgContainer = document.createElement("div");
  linea.append(imgContainer);
  imgContainer.classList.add("mostrar-producto__imagen");
  imgContainer.style.backgroundImage = `url(${imagen})`;
  imgContainer.style.maxWidth = `100%`;
  const contenido = ` 
  <article class="mostrar-producto__info">
  <h2 class="mostrar-producto-titulo">
    ${titulo}
  </h2>

  <span class="mostrar-producto__precio">
    $${precio}
  </span>

  <p class="mostrar-producto__descripcion">${descripcion}</p>

  <a href="#" class="mostrar-producto__btn-regresar">
    <i class="bi bi-arrow-left-short"></i>
    Regresar</a>

</article>
  `;
  linea.innerHTML += contenido;

  const btnVerProducto = linea.querySelector(".mostrar-producto__btn-regresar");
  console.log(btnVerProducto);
  btnVerProducto.addEventListener("click", () => {
    window.location.href = `./../screens/index.html`;
  });

  return linea;
};

const table = document.querySelector(".mostrar-producto__container");

const obtenerInformacion = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  clientServices.detalleProducto(id).then((producto) => {
    const nuevaLinea = crearNuevaLinea(
      producto.imagen,
      producto.titulo,
      producto.precio,
      producto.descripcion,
      producto.id
    );
    table.appendChild(nuevaLinea);
  });
};

obtenerInformacion();
