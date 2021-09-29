const clienteCtrl = require("../controllers/cliente.controller");

const productRoutes = [
  {
    url: "/clientes",
    method: "GET",
    handler: clienteCtrl.getClientes,
  },
  {
    url: "/clientes/:id",
    method: "GET",
    handler: clienteCtrl.getCliente,
  },
  {
    url: "/clientes",
    method: "POST",
    handler: clienteCtrl.createCliente,
  },
  {
    url: "/clientes/:id",
    method: "PUT",
    handler: clienteCtrl.updateCliente,
  },
  {
    url: "/clientes/:id",
    method: "DELETE",
    handler: clienteCtrl.deleteCliente,
  },
];

module.exports = productRoutes;
