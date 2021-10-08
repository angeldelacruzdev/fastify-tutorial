const { Schema, model } = require("mongoose");

const SectorSchema = new Schema(
  {
    name: String,
    distrito: {
      type: Schema.Types.ObjectId,
      refs: "Distrito",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Sector", SectorSchema);
