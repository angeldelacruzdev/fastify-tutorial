const Municipio = require("../models/municipio.model");

const getMunicipios = async (request, replay) => {
  try {
    const doc = await Municipio.find().populate("provincia", "", "Provincia");
    replay.code(201).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const getMunicipio = async (request, replay) => {
  try {
    const doc = await Municipio.findById(request.params.id);
    replay.code(200).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const createMunicipio = async (request, replay) => {
  try {
    const doc = new Municipio(request.body);
    await doc.save();
    replay.code(201).send(doc);
  } catch (error) {
    replay.code(500).send(error);
  }
};

const updateMunicipio = async (request, replay) => {
  try {
    const doc = await Municipio.findByIdAndUpdate(
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

const deleteMunicipio = async (request, replay) => {
  try {
    await Municipio.deleteOne(request.params.id);
    replay.code(204).send();
  } catch (error) {
    replay.code(500).send(error);
  }
};

module.exports = {
  getMunicipios,
  getMunicipio,
  createMunicipio,
  updateMunicipio,
  deleteMunicipio,
};
