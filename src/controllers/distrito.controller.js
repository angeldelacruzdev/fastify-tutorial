const Distrito = require("../models/distrito.model");

const getDistritos = async (request, replay) => {
  try {
    const doc = await Distrito.find().populate("municipio", "", "Municipio");
    replay.code(201).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const getDistrito = async (request, replay) => {
  try {
    const doc = await Distrito.findById(request.params.id);
    replay.code(200).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const createDistrito = async (request, replay) => {
  try {
    const doc = new Distrito(request.body);
    await doc.save();
    replay.code(201).send(doc);
  } catch (error) {
    replay.code(500).send(error);
  }
};

const updateDistrito = async (request, replay) => {
  try {
    const doc = await Distrito.findByIdAndUpdate(
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

const deleteDistrito = async (request, replay) => {
  try {
    await Distrito.deleteOne(request.params.id);
    replay.code(204).send();
  } catch (error) {
    replay.code(500).send(error);
  }
};

module.exports = {
  getDistritos,
  getDistrito,
  createDistrito,
  updateDistrito,
  deleteDistrito,
};
