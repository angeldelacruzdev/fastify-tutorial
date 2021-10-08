const sectorCtrl = require("../controllers/sector.controller");

const sectorRoutes = [
  {
    url: "/sectores",
    method: "GET",
    handler: sectorCtrl.getSectores,
  },
  {
    url: "/sectores/:id",
    method: "GET",
    handler: sectorCtrl.getSector,
  },
  {
    url: "/sectores",
    method: "POST",
    handler: sectorCtrl.createSector,
  },
  {
    url: "/sectores/:id",
    method: "PUT",
    handler: sectorCtrl.updateSector,
  },
  {
    url: "/sectores/:id",
    method: "DELETE",
    handler: sectorCtrl.deleteSector,
  },
];

module.exports = sectorRoutes;
