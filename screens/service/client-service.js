//FETCH API
const listaClientes = () =>
  fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

const crearProducto = (imagen, categoria, titulo, precio, descripcion) => {
  return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imagen, categoria, titulo, precio, descripcion }),
  });
};

const crearProductoEditable = (imagen, titulo, precio, id) => {
  return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imagen, titulo, precio, id }),
  });
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};

const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarProducto = (
  imagen,
  categoria,
  titulo,
  precio,
  descripcion,
  id
) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
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
