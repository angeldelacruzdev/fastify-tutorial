const provinciaCtrl = require("../controllers/provincia.controller");
const s = require("../schemas");

const provinciaRoutes = [
  {
    url: "/provincias",
    method: "GET",
    handler: provinciaCtrl.getProvincias,
    schema: {
      tags: [s.provincia.tag],
      response: { 200: s.provincia.schema.list },
    },
  },
  {
    url: "/provincias/:id",
    method: "GET",
    handler: provinciaCtrl.getProvincia,
    schema: {
      tags: [s.provincia.tag],
      params: s.idParams,
      response: { 200: s.provincia.schema.get },
    },
  },
  {
    url: "/provincias",
    method: "POST",
    handler: provinciaCtrl.createProvincia,
    schema: {
      tags: [s.provincia.tag],
      body: s.provincia.schema.body,
      response: { 201: s.provincia.schema.get },
    },
  },
  {
    url: "/provincias/:id",
    method: "PUT",
    handler: provinciaCtrl.updateProvincia,
    schema: {
      tags: [s.provincia.tag],
      params: s.idParams,
      body: s.provincia.schema.body,
      response: { 200: s.provincia.schema.get },
    },
  },
  {
    url: "/provincias/:id",
    method: "DELETE",
    handler: provinciaCtrl.deleteProvincia,
    schema: {
      tags: [s.provincia.tag],
      params: s.idParams,
      response: { 204: { type: "null" } },
    },
  },
];

module.exports = provinciaRoutes;
