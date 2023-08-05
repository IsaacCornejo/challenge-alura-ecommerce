import { clientServices } from "../screens/service/client-service.js";

const crearNuevaLinea = (imagen, titulo, precio, id) => {
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

const tableStarWars = document.querySelector("#StarWars");
const tableConsolas = document.querySelector("#Consolas");
const tableDiversos = document.querySelector("#Diversos");

clientServices
  .listaClientes()
  .then((data) => {
    data.forEach((producto) => {
      const nuevaLinea = crearNuevaLinea(
        producto.imagen,
        producto.titulo,
        producto.precio,
        producto.id
      );

      if (producto.categoria == "StarWars") {
        tableStarWars.appendChild(nuevaLinea);
      }
      if (producto.categoria == "Consolas") {
        tableConsolas.appendChild(nuevaLinea);
      }
      if (producto.categoria == "Diversos") {
        tableDiversos.appendChild(nuevaLinea);
      }
    });
  })
  .catch((error) => {
    console.log(error);
    alert("Ocurrio un error");
  });

//BOTONES DE VER TODO

const btnLogin = document.querySelector(".header__btn-login");
const btnStarWars = document.querySelector("#btnStarWars");
const btnConsolas = document.querySelector("#btnConsolas");
const btnDiversos = document.querySelector("#btnDiversos");
const btnBanner = document.querySelector(".banner__btn");

btnLogin.addEventListener("click", () => {
  window.location.href = "./../screens/login.html";
});

btnBanner.addEventListener("click", () => {
  window.location.href = "./../screens/ver-todo.html?category=Consolas";
});

btnStarWars.addEventListener("click", () => {
  window.location.href = "./../screens/ver-todo.html?category=StarWars";
});

btnConsolas.addEventListener("click", () => {
  window.location.href = "./../screens/ver-todo.html?category=Consolas";
});

btnDiversos.addEventListener("click", () => {
  window.location.href = "./../screens/ver-todo.html?category=Diversos";
});
