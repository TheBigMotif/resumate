const { Schema, Types } = require("mongoose");

const experienceSchema = new Schema(
  {
    experienceId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    company: {
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
    StartingDate: {
      type: String,
      required: true,
    },
    EndDate: {
      type: String,
      required: true,
    },
    ROLE: {
      type: String,
      required: true,
    },
    Responsabilities: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = experienceSchema;
