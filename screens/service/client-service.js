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

export const clientServices = {
  listaClientes,
  crearProducto,
  crearProductoEditable,
};
