const productCtrl = require("../controllers/productos.controller");
const s = require("../schemas");

const productRoutes = [
  {
    url: "/products",
    method: "GET",
    handler: productCtrl.getProducts,
    schema: {
      tags: [s.producto.tag],
      response: { 200: s.producto.schema.list },
    },
  },
  {
    url: "/products/:id",
    method: "GET",
    handler: productCtrl.getProduct,
    schema: {
      tags: [s.producto.tag],
      params: s.idParams,
      response: { 200: s.producto.schema.get },
    },
  },
  {
    url: "/products",
    method: "POST",
    handler: productCtrl.createProduct,
    schema: {
      tags: [s.producto.tag],
      body: s.producto.schema.body,
      response: { 201: s.producto.schema.get },
    },
  },
  {
    url: "/products/:id",
    method: "PUT",
    handler: productCtrl.updateProduct,
    schema: {
      tags: [s.producto.tag],
      params: s.idParams,
      body: s.producto.schema.body,
      response: { 200: s.producto.schema.get },
    },
  },
  {
    url: "/products/:id",
    method: "DELETE",
    handler: productCtrl.deleteProduct,
    schema: {
      tags: [s.producto.tag],
      params: s.idParams,
      response: { 204: { type: "null" } },
    },
  },
];

module.exports = productRoutes;
