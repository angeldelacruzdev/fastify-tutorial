const distritoCtrl = require("../controllers/distrito.controller");

const distritoRoutes = [
  {
    url: "/distritos",
    method: "GET",
    handler: distritoCtrl.getDistritos,
  },
  {
    url: "/distritos/:id",
    method: "GET",
    handler: distritoCtrl.getDistrito,
  },
  {
    url: "/distritos",
    method: "POST",
    handler: distritoCtrl.createDistrito,
  },
  {
    url: "/distritos/:id",
    method: "PUT",
    handler: distritoCtrl.updateDistrito,
  },
  {
    url: "/distritos/:id",
    method: "DELETE",
    handler: distritoCtrl.deleteDistrito,
  },
];

module.exports = distritoRoutes;
