const tipoProductosCtrl = require("../controllers/tipoProductos.controller");
const s = require("../schemas");

const productRoutes = [
  {
    url: "/tipo-productos",
    method: "GET",
    handler: tipoProductosCtrl.getTipoProducts,
    schema: {
      tags: [s.tipoProducto.tag],
      response: { 200: s.tipoProducto.schema.list },
    },
  },
  {
    url: "/tipo-producto/:id",
    method: "GET",
    handler: tipoProductosCtrl.getTipoProduct,
    schema: {
      tags: [s.tipoProducto.tag],
      params: s.idParams,
      response: { 200: s.tipoProducto.schema.get },
    },
  },
  {
    url: "/tipo-producto",
    method: "POST",
    handler: tipoProductosCtrl.createTipoProduct,
    schema: {
      tags: [s.tipoProducto.tag],
      body: s.tipoProducto.schema.body,
      response: { 201: s.tipoProducto.schema.get },
    },
  },
  {
    url: "/tipo-producto/:id",
    method: "PUT",
    handler: tipoProductosCtrl.updateTipoProduct,
    schema: {
      tags: [s.tipoProducto.tag],
      params: s.idParams,
      body: s.tipoProducto.schema.body,
      response: { 200: s.tipoProducto.schema.get },
    },
  },
  {
    url: "/tipo-producto/:id",
    method: "DELETE",
    handler: tipoProductosCtrl.deleteTipoProduct,
    schema: {
      tags: [s.tipoProducto.tag],
      params: s.idParams,
      response: { 204: { type: "null" } },
    },
  },
];

module.exports = productRoutes;
