//FETCH API
const listaClientes = () =>
  fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

const id = "#1111111";

const crearCliente = (imagen, categoria, titulo, precio, descripcion) => {
  return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imagen, categoria, titulo, precio, descripcion }),
  });
};

export const clientServices = {
  listaClientes,
  crearCliente,
};
