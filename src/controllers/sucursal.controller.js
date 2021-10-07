const Sucursal = require("../models/sucursal.model");

const getSucursales = async (request, replay) => {
  try {
    const doc = await Sucursal.find();
    replay.code(201).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const getSucursal = async (request, replay) => {
  try {
    const doc = await Sucursal.findById(request.params.id);
    replay.code(200).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const createSucursal = async (request, replay) => {
  try {
    const doc = new Sucursal(request.body);
    await doc.save();
    replay.code(201).send(doc);
  } catch (error) {
    replay.code(500).send(error);
  }
};

const updateSucursal = async (request, replay) => {
  try {
    const doc = await Sucursal.findByIdAndUpdate(
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

const deleteSucursal = async (request, replay) => {
  try {
    await Sucursal.Proveedor(request.params.id);
    replay.code(204).send();
  } catch (error) {
    replay.code(500).send(error);
  }
};

module.exports = {
  getSucursales,
  getSucursal,
  createSucursal,
  updateSucursal,
  deleteSucursal,
};
