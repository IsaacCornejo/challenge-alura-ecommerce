//FETCH API
const listaClientes = () =>
  fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

export const clientServices = {
  listaClientes,
};
