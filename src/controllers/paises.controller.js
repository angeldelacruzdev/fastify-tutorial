const Paises = require("../models/paises.model");

const getPaises = async (request, replay) => {
  try {
    const doc = await Paises.find();
    replay.code(201).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const getPais = async (request, replay) => {
  try {
    const doc = await Paises.findById(request.params.id);
    replay.code(200).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const createPais = async (request, replay) => {
  try {
    const doc = new Paises(request.body);
    await doc.save();
    replay.code(201).send(doc);
  } catch (error) {
    replay.code(500).send(error);
  }
};

const updatePais = async (request, replay) => {
  try {
    const doc = await Paises.findByIdAndUpdate(
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

const deletePais = async (request, replay) => {
  try {
    await Paises.Proveedor(request.params.id);
    replay.code(204).send();
  } catch (error) {
    replay.code(500).send(error);
  }
};

module.exports = {
  getPaises,
  getPais,
  createPais,
  updatePais,
  deletePais,
};
