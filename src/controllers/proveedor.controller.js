const Proveedor = require("../models/proveedor.model");

const getProveedores = async (request, replay) => {
  try {
    const doc = await Proveedor.find();
    replay.code(201).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const getProveedor = async (request, replay) => {
  try {
    const doc = await Proveedor.findById(request.params.id);
    replay.code(200).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const createProveedor = async (request, replay) => {
  try {
    const doc = new Proveedor(request.body);
    await doc.save();
    replay.code(201).send(doc);
  } catch (error) {
    replay.code(500).send(error);
  }
};

const updateProveedor = async (request, replay) => {
  try {
    const doc = await Proveedor.findByIdAndUpdate(
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

const deleteProveedor = async (request, replay) => {
  try {
    await TipoProductoSchema.Proveedor(request.params.id);
    replay.code(204).send();
  } catch (error) {
    replay.code(500).send(error);
  }
};

module.exports = {
  getProveedores,
  getProveedor,
  createProveedor,
  updateProveedor,
  deleteProveedor,
};
