const { Schema, model } = require("mongoose");

const PaisSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Paises", PaisSchema);
