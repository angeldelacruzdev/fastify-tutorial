const proveedorCtrl = require("../controllers/proveedor.controller");
const s = require("../schemas");

const proveedorRoutes = [
  {
    url: "/proveedores",
    method: "GET",
    handler: proveedorCtrl.getProveedores,
    schema: {
      tags: [s.proveedor.tag],
      response: { 200: s.proveedor.schema.list },
    },
  },
  {
    url: "/proveedores/:id",
    method: "GET",
    handler: proveedorCtrl.getProveedor,
    schema: {
      tags: [s.proveedor.tag],
      params: s.idParams,
      response: { 200: s.proveedor.schema.get },
    },
  },
  {
    url: "/proveedores",
    method: "POST",
    handler: proveedorCtrl.createProveedor,
    schema: {
      tags: [s.proveedor.tag],
      body: s.proveedor.schema.body,
      response: { 201: s.proveedor.schema.get },
    },
  },
  {
    url: "/proveedores/:id",
    method: "PUT",
    handler: proveedorCtrl.updateProveedor,
    schema: {
      tags: [s.proveedor.tag],
      params: s.idParams,
      body: s.proveedor.schema.body,
      response: { 200: s.proveedor.schema.get },
    },
  },
  {
    url: "/proveedores/:id",
    method: "DELETE",
    handler: proveedorCtrl.deleteProveedor,
    schema: {
      tags: [s.proveedor.tag],
      params: s.idParams,
      response: { 204: { type: "null" } },
    },
  },
];

module.exports = proveedorRoutes;
