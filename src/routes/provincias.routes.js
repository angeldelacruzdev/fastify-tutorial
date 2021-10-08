const provinciaCtrl = require("../controllers/provincia.controller");

const provinciaRoutes = [
  {
    url: "/provincias",
    method: "GET",
    handler: provinciaCtrl.getProvincias,
  },
  {
    url: "/provincias/:id",
    method: "GET",
    handler: provinciaCtrl.getProvincia,
  },
  {
    url: "/provincias",
    method: "POST",
    handler: provinciaCtrl.createProvincia,
  },
  {
    url: "/provincias/:id",
    method: "PUT",
    handler: provinciaCtrl.updateProvincia,
  },
  {
    url: "/provincias/:id",
    method: "DELETE",
    handler: provinciaCtrl.deleteProvincia,
  },
];

module.exports = provinciaRoutes;
