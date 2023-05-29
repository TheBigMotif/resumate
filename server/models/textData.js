const { Schema, model } = require("mongoose");

// Schema to create a course model
const textSchema = new Schema(
  {
    data: {
      type: String,
      required: true,
    },
  },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const textData = model("textData", textSchema);

module.exports = textData;
