const distritoCtrl = require("../controllers/distrito.controller");
const s = require("../schemas");

const distritoRoutes = [
  {
    url: "/distritos",
    method: "GET",
    handler: distritoCtrl.getDistritos,
    schema: {
      tags: [s.distrito.tag],
      response: { 200: s.distrito.schema.list },
    },
  },
  {
    url: "/distritos/:id",
    method: "GET",
    handler: distritoCtrl.getDistrito,
    schema: {
      tags: [s.distrito.tag],
      params: s.idParams,
      response: { 200: s.distrito.schema.get },
    },
  },
  {
    url: "/distritos",
    method: "POST",
    handler: distritoCtrl.createDistrito,
    schema: {
      tags: [s.distrito.tag],
      body: s.distrito.schema.body,
      response: { 201: s.distrito.schema.get },
    },
  },
  {
    url: "/distritos/:id",
    method: "PUT",
    handler: distritoCtrl.updateDistrito,
    schema: {
      tags: [s.distrito.tag],
      params: s.idParams,
      body: s.distrito.schema.body,
      response: { 200: s.distrito.schema.get },
    },
  },
  {
    url: "/distritos/:id",
    method: "DELETE",
    handler: distritoCtrl.deleteDistrito,
    schema: {
      tags: [s.distrito.tag],
      params: s.idParams,
      response: { 204: { type: "null" } },
    },
  },
];

module.exports = distritoRoutes;
