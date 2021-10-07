const { Schema, model } = require("mongoose");

const SucursalSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Sucursal", SucursalSchema);
