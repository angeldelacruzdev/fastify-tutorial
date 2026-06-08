const clienteCtrl = require("../controllers/cliente.controller");
const s = require("../schemas");

const productRoutes = [
  {
    url: "/clientes",
    method: "GET",
    handler: clienteCtrl.getClientes,
    schema: {
      tags: [s.cliente.tag],
      response: { 200: s.cliente.schema.list },
    },
  },
  {
    url: "/clientes/:id",
    method: "GET",
    handler: clienteCtrl.getCliente,
    schema: {
      tags: [s.cliente.tag],
      params: s.idParams,
      response: { 200: s.cliente.schema.get },
    },
  },
  {
    url: "/clientes",
    method: "POST",
    handler: clienteCtrl.createCliente,
    schema: {
      tags: [s.cliente.tag],
      body: s.cliente.schema.body,
      response: { 201: s.cliente.schema.get },
    },
  },
  {
    url: "/clientes/:id",
    method: "PUT",
    handler: clienteCtrl.updateCliente,
    schema: {
      tags: [s.cliente.tag],
      params: s.idParams,
      body: s.cliente.schema.body,
      response: { 200: s.cliente.schema.get },
    },
  },
  {
    url: "/clientes/:id",
    method: "DELETE",
    handler: clienteCtrl.deleteCliente,
    schema: {
      tags: [s.cliente.tag],
      params: s.idParams,
      response: { 204: { type: "null" } },
    },
  },
];

module.exports = productRoutes;
