const proveedorCtrl = require("../controllers/proveedor.controller");

const proveedorRoutes = [
  {
    url: "/proveedores",
    method: "GET",
    handler: proveedorCtrl.getProveedores,
  },
  {
    url: "/proveedores/:id",
    method: "GET",
    handler: proveedorCtrl.getProveedor,
  },
  {
    url: "/proveedores",
    method: "POST",
    handler: proveedorCtrl.createProveedor,
  },
  {
    url: "/proveedores/:id",
    method: "PUT",
    handler: proveedorCtrl.updateProveedor,
  },
  {
    url: "/proveedores/:id",
    method: "DELETE",
    handler: proveedorCtrl.deleteProveedor,
  },
];

module.exports = proveedorRoutes;
