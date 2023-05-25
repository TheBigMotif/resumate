const { Schema, model } = require("mongoose");

// Schema to create a course model
const responseSchema = new Schema(
  {
    technicalSkills: {
      type: [String],
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

const Response = model("Response", responseSchema);

module.exports = Response;
