const paisesCtrl = require("../controllers/paises.controller");

const paisesRoutes = [
  {
    url: "/paises",
    method: "GET",
    handler: paisesCtrl.getPaises,
  },
  {
    url: "/paises/:id",
    method: "GET",
    handler: paisesCtrl.getPais,
  },
  {
    url: "/paises",
    method: "POST",
    handler: paisesCtrl.createPais,
  },
  {
    url: "/paises/:id",
    method: "PUT",
    handler: paisesCtrl.updatePais,
  },
  {
    url: "/paises/:id",
    method: "DELETE",
    handler: paisesCtrl.deletePais,
  },
];

module.exports = paisesRoutes;
