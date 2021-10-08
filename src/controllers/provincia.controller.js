const Provincia = require("../models/provincias.model");

const getProvincias = async (request, replay) => {
  try {
    const doc = await Provincia.find().populate("pais", "", "Paises");
    replay.code(201).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const getProvincia = async (request, replay) => {
  try {
    const doc = await Provincia.findById(request.params.id);
    replay.code(200).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const createProvincia = async (request, replay) => {
  try {
    const doc = new Provincia(request.body);
    await doc.save();
    replay.code(201).send(doc);
  } catch (error) {
    replay.code(500).send(error);
  }
};

const updateProvincia = async (request, replay) => {
  try {
    const doc = await Provincia.findByIdAndUpdate(
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

const deleteProvincia = async (request, replay) => {
  try {
    await Provincia.deleteOne(request.params.id);
    replay.code(204).send();
  } catch (error) {
    replay.code(500).send(error);
  }
};

module.exports = {
  getProvincias,
  getProvincia,
  createProvincia,
  updateProvincia,
  deleteProvincia,
};
