const { Schema, model } = require("mongoose");

const ProvinciaSchema = new Schema(
  {
    name: String,
    pais: {
      type: Schema.Types.ObjectId,
      refs: "Paises",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Provincia", ProvinciaSchema);
