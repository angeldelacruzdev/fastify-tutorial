const tipoProductosCtrl = require("../controllers/tipoProductos.controller");

const productRoutes = [
  {
    url: "/tipo-productos",
    method: "GET",
    handler: tipoProductosCtrl.getTipoProducts,
  },
  {
    url: "/tipo-producto/:id",
    method: "GET",
    handler: tipoProductosCtrl.getTipoProduct,
  },
  {
    url: "/tipo-producto",
    method: "POST",
    handler: tipoProductosCtrl.createTipoProduct,
  },
  {
    url: "/tipo-producto/:id",
    method: "PUT",
    handler: tipoProductosCtrl.updateTipoProduct,
  },
  {
    url: "/tipo-producto/:id",
    method: "DELETE",
    handler: tipoProductosCtrl.deleteTipoProduct,
  },
];

module.exports = productRoutes;
