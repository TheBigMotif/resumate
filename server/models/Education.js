const { Schema, Types } = require("mongoose");

const educationSchema = new Schema(
  {
    educationId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    university: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 3,
    },
    degree: {
      type: String,
      required: true,
      maxlength: 50,
    },
    year: {
      type: Number,
      required: true,
      maxlength: 4,
      minlength: 4,
    },
    CompanyName: {
      type: String,
      required: true,
    },
    StartingDate: {
      type: String,
      required: true,
    },
    EndDate: {
      type: String,
      required: true,
    },
    DegreeTitle: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
      maxlength: 4,
      minlength: 4,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = educationSchema;
