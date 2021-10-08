const Sector = require("../models/sector.model");

const getSectores = async (request, replay) => {
  try {
    const doc = await Sector.find().populate("distrito", "", "Distrito");
    replay.code(201).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const getSector = async (request, replay) => {
  try {
    const doc = await Sector.findById(request.params.id);
    replay.code(200).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const createSector = async (request, replay) => {
  try {
    const doc = new Sector(request.body);
    await doc.save();
    replay.code(201).send(doc);
  } catch (error) {
    replay.code(500).send(error);
  }
};

const updateSector = async (request, replay) => {
  try {
    const doc = await Sector.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
      }
    );
    replay.code(200).send(doc);
  } catch (error) {
    replay.code(500).send(error);
  }
};

const deleteSector = async (request, replay) => {
  try {
    await Sector.deleteOne(request.params.id);
    replay.code(204).send();
  } catch (error) {
    replay.code(500).send(error);
  }
};

module.exports = {
  getSectores,
  getSector,
  createSector,
  updateSector,
  deleteSector,
};
