const productCtrl = require("../controllers/productos.controller");

const productRoutes = [
  {
    url: "/products",
    method: "GET",
    handler: productCtrl.getProducts,
  },
  {
    url: "/products/:id",
    method: "GET",
    handler: productCtrl.getProduct,
  },
  {
    url: "/products",
    method: "POST",
    handler: productCtrl.createProduct,
  },
  {
    url: "/products/:id",
    method: "PUT",
    handler: productCtrl.updateProduct,
  },
  {
    url: "/products/:id",
    method: "DELETE",
    handler: productCtrl.deleteProduct,
  },
];

module.exports = productRoutes;
