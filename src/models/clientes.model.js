const { Schema, model } = require("mongoose");

const clienteSchema = new Schema(
  {
    nombre: String,
    cedula: Number,
    telefono: String,
    direccion: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Cliente", clienteSchema);
