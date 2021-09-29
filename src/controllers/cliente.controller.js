const Cliente = require("../models/clientes.model");

const getClientes = async (request, replay) => {
  try {
    const doc = await Cliente.find();
    replay.code(201).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const getCliente = async (request, replay) => {
  try {
    const doc = await Cliente.findById(request.params.id);
    replay.code(200).send({
      ok: true,
      data: doc,
    });
  } catch (error) {
    replay.code(500).send(error);
  }
};

const createCliente = async (request, replay) => {
  try {
    const doc = new Cliente(request.body);
    await doc.save();
    replay.code(201).send(doc);
  } catch (error) {
    replay.code(500).send(error);
  }
};

const updateCliente = async (request, replay) => {
  try {
    const doc = await Cliente.findByIdAndUpdate(
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

const deleteCliente = async (request, replay) => {
  try {
    await Cliente.findByIdAndDelete(request.params.id);
    replay.code(204).send();
  } catch (error) {
    replay.code(500).send(error);
  }
};

module.exports = {
  getClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
};
