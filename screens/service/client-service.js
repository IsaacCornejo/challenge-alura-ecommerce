//FETCH API
const listaClientes = () =>
  fetch("https://64d5640bb592423e4695600a.mockapi.io/producto").then(
    (respuesta) => respuesta.json()
  );

const crearProducto = (imagen, categoria, titulo, precio, descripcion) => {
  return fetch("https://64d5640bb592423e4695600a.mockapi.io/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imagen, categoria, titulo, precio, descripcion }),
  });
};

const crearProductoEditable = (imagen, titulo, precio, id) => {
  return fetch("https://64d5640bb592423e4695600a.mockapi.io/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imagen, titulo, precio, id }),
  });
};

const eliminarProducto = (id) => {
  return fetch(`hhttps://64d5640bb592423e4695600a.mockapi.io/producto/${id}`, {
    method: "DELETE",
  });
};

const detalleProducto = (id) => {
  return fetch(
    `hhttps://64d5640bb592423e4695600a.mockapi.io/producto/${id}`
  ).then((respuesta) => respuesta.json());
};

const actualizarProducto = (
  imagen,
  categoria,
  titulo,
  precio,
  descripcion,
  id
) => {
  return fetch(`hhttps://64d5640bb592423e4695600a.mockapi.io/producto/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imagen,
      categoria,
      titulo,
      precio,
      descripcion,
      id,
    }),
  });
};

export const clientServices = {
  listaClientes,
  crearProducto,
  crearProductoEditable,
  eliminarProducto,
  detalleProducto,
  actualizarProducto,
};
