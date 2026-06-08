const sucursalCtrl = require("../controllers/sucursal.controller");
const s = require("../schemas");

const sucursalRoutes = [
  {
    url: "/sucursales",
    method: "GET",
    handler: sucursalCtrl.getSucursales,
    schema: {
      tags: [s.sucursal.tag],
      response: { 200: s.sucursal.schema.list },
    },
  },
  {
    url: "/sucursales/:id",
    method: "GET",
    handler: sucursalCtrl.getSucursal,
    schema: {
      tags: [s.sucursal.tag],
      params: s.idParams,
      response: { 200: s.sucursal.schema.get },
    },
  },
  {
    url: "/sucursales",
    method: "POST",
    handler: sucursalCtrl.createSucursal,
    schema: {
      tags: [s.sucursal.tag],
      body: s.sucursal.schema.body,
      response: { 201: s.sucursal.schema.get },
    },
  },
  {
    url: "/sucursales/:id",
    method: "PUT",
    handler: sucursalCtrl.updateSucursal,
    schema: {
      tags: [s.sucursal.tag],
      params: s.idParams,
      body: s.sucursal.schema.body,
      response: { 200: s.sucursal.schema.get },
    },
  },
  {
    url: "/sucursales/:id",
    method: "DELETE",
    handler: sucursalCtrl.deleteSucursal,
    schema: {
      tags: [s.sucursal.tag],
      params: s.idParams,
      response: { 204: { type: "null" } },
    },
  },
];

module.exports = sucursalRoutes;
