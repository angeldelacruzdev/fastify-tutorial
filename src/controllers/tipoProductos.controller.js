const TipoProductoSchema = require("../models/tipo_productos.model");

const getTipoProducts = async (request, replay) => {
  try {
    const doc = await TipoProductoSchema.find();
    replay.code(201).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const getTipoProduct = async (request, replay) => {
  try {
    const doc = await TipoProductoSchema.findById(request.params.id);
    replay.code(200).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const createTipoProduct = async (request, replay) => {
  try {
    const doc = new TipoProductoSchema(request.body);
    await doc.save();
    replay.code(201).send(doc);
  } catch (error) {
    replay.code(500).send(error);
  }
};

const updateTipoProduct = async (request, replay) => {
  try {
    const doc = await TipoProductoSchema.findByIdAndUpdate(
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

const deleteTipoProduct = async (request, replay) => {
  try {
    await TipoProductoSchema.findByIdAndDelete(request.params.id);
    replay.code(204).send();
  } catch (error) {
    replay.code(500).send(error);
  }
};

module.exports = {
  createTipoProduct,
  getTipoProducts,
  getTipoProduct,
  updateTipoProduct,
  deleteTipoProduct,
};
