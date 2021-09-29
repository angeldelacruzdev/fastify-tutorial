const Fruta = require("../models/frutas.model");

const getFrutas = async (request, replay) => {
  try {
    const doc = await Fruta.find();
    replay.code(201).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const getFruta = async (request, replay) => {
  try {
    const doc = await Fruta.findById(request.params.id);
    replay.code(200).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const createFruta = async (request, replay) => {
  try {
    const doc = new Fruta(request.body);
    await doc.save();
    replay.code(201).send(doc);
  } catch (error) {
    replay.code(500).send(error);
  }
};

const updateFruta = async (request, replay) => {
  try {
    const doc = await Fruta.findByIdAndUpdate(
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

const deleteFruta = async (request, replay) => {
  try {
    await Fruta.findByIdAndDelete(request.params.id);
    replay.code(204).send();
  } catch (error) {
    replay.code(500).send(error);
  }
};

module.exports = {
  getFruta,
  getFrutas,
  createFruta,
  updateFruta,
  deleteFruta,
};
