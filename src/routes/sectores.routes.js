const sectorCtrl = require("../controllers/sector.controller");
const s = require("../schemas");

const sectorRoutes = [
  {
    url: "/sectores",
    method: "GET",
    handler: sectorCtrl.getSectores,
    schema: {
      tags: [s.sector.tag],
      response: { 200: s.sector.schema.list },
    },
  },
  {
    url: "/sectores/:id",
    method: "GET",
    handler: sectorCtrl.getSector,
    schema: {
      tags: [s.sector.tag],
      params: s.idParams,
      response: { 200: s.sector.schema.get },
    },
  },
  {
    url: "/sectores",
    method: "POST",
    handler: sectorCtrl.createSector,
    schema: {
      tags: [s.sector.tag],
      body: s.sector.schema.body,
      response: { 201: s.sector.schema.get },
    },
  },
  {
    url: "/sectores/:id",
    method: "PUT",
    handler: sectorCtrl.updateSector,
    schema: {
      tags: [s.sector.tag],
      params: s.idParams,
      body: s.sector.schema.body,
      response: { 200: s.sector.schema.get },
    },
  },
  {
    url: "/sectores/:id",
    method: "DELETE",
    handler: sectorCtrl.deleteSector,
    schema: {
      tags: [s.sector.tag],
      params: s.idParams,
      response: { 204: { type: "null" } },
    },
  },
];

module.exports = sectorRoutes;
