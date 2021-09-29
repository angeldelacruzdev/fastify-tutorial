const frutaCtrl = require("../controllers/frutas.controller");

const frutasRoutes = [
  {
    url: "/frutas",
    method: "GET",
    handler: frutaCtrl.getFrutas,
  },
  {
    url: "/frutas/:id",
    method: "GET",
    handler: frutaCtrl.getFruta,
  },
  {
    url: "/frutas",
    method: "POST",
    handler: frutaCtrl.createFruta,
  },
  {
    url: "/frutas/:id",
    method: "PUT",
    handler: frutaCtrl.updateFruta,
  },
  {
    url: "/frutas/:id",
    method: "DELETE",
    handler: frutaCtrl.deleteFruta,
  },
];

module.exports = frutasRoutes;
