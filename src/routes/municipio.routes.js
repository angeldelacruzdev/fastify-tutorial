const municipioCtrl = require("../controllers/municipio.controller");

const municipioRoutes = [
  {
    url: "/municipios",
    method: "GET",
    handler: municipioCtrl.getMunicipios,
  },
  {
    url: "/municipios/:id",
    method: "GET",
    handler: municipioCtrl.getMunicipio,
  },
  {
    url: "/municipios",
    method: "POST",
    handler: municipioCtrl.createMunicipio,
  },
  {
    url: "/municipios/:id",
    method: "PUT",
    handler: municipioCtrl.updateMunicipio,
  },
  {
    url: "/municipios/:id",
    method: "DELETE",
    handler: municipioCtrl.deleteMunicipio,
  },
];

module.exports = municipioRoutes;
