const sucursalCtrl = require("../controllers/sucursal.controller");

const sucursalRoutes = [
  {
    url: "/sucursales",
    method: "GET",
    handler: sucursalCtrl.getSucursales,
  },
  {
    url: "/sucursales/:id",
    method: "GET",
    handler: sucursalCtrl.getSucursal,
  },
  {
    url: "/sucursales",
    method: "POST",
    handler: sucursalCtrl.createSucursal,
  },
  {
    url: "/sucursales/:id",
    method: "PUT",
    handler: sucursalCtrl.updateSucursal,
  },
  {
    url: "/sucursales/:id",
    method: "DELETE",
    handler: sucursalCtrl.deleteSucursal,
  },
];

module.exports = sucursalRoutes;
