const municipioCtrl = require("../controllers/municipio.controller");
const s = require("../schemas");

const municipioRoutes = [
  {
    url: "/municipios",
    method: "GET",
    handler: municipioCtrl.getMunicipios,
    schema: {
      tags: [s.municipio.tag],
      response: { 200: s.municipio.schema.list },
    },
  },
  {
    url: "/municipios/:id",
    method: "GET",
    handler: municipioCtrl.getMunicipio,
    schema: {
      tags: [s.municipio.tag],
      params: s.idParams,
      response: { 200: s.municipio.schema.get },
    },
  },
  {
    url: "/municipios",
    method: "POST",
    handler: municipioCtrl.createMunicipio,
    schema: {
      tags: [s.municipio.tag],
      body: s.municipio.schema.body,
      response: { 201: s.municipio.schema.get },
    },
  },
  {
    url: "/municipios/:id",
    method: "PUT",
    handler: municipioCtrl.updateMunicipio,
    schema: {
      tags: [s.municipio.tag],
      params: s.idParams,
      body: s.municipio.schema.body,
      response: { 200: s.municipio.schema.get },
    },
  },
  {
    url: "/municipios/:id",
    method: "DELETE",
    handler: municipioCtrl.deleteMunicipio,
    schema: {
      tags: [s.municipio.tag],
      params: s.idParams,
      response: { 204: { type: "null" } },
    },
  },
];

module.exports = municipioRoutes;
