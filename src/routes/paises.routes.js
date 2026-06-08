const paisesCtrl = require("../controllers/paises.controller");
const s = require("../schemas");

const paisesRoutes = [
  {
    url: "/paises",
    method: "GET",
    handler: paisesCtrl.getPaises,
    schema: {
      tags: [s.pais.tag],
      response: { 200: s.pais.schema.list },
    },
  },
  {
    url: "/paises/:id",
    method: "GET",
    handler: paisesCtrl.getPais,
    schema: {
      tags: [s.pais.tag],
      params: s.idParams,
      response: { 200: s.pais.schema.get },
    },
  },
  {
    url: "/paises",
    method: "POST",
    handler: paisesCtrl.createPais,
    schema: {
      tags: [s.pais.tag],
      body: s.pais.schema.body,
      response: { 201: s.pais.schema.get },
    },
  },
  {
    url: "/paises/:id",
    method: "PUT",
    handler: paisesCtrl.updatePais,
    schema: {
      tags: [s.pais.tag],
      params: s.idParams,
      body: s.pais.schema.body,
      response: { 200: s.pais.schema.get },
    },
  },
  {
    url: "/paises/:id",
    method: "DELETE",
    handler: paisesCtrl.deletePais,
    schema: {
      tags: [s.pais.tag],
      params: s.idParams,
      response: { 204: { type: "null" } },
    },
  },
];

module.exports = paisesRoutes;
