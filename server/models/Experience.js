const { Schema, Types } = require("mongoose");

const experienceSchema = new Schema(
  {
    ExperienceId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    Company: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 3,
    },
    Degree: {
      type: String,
      required: true,
      maxlength: 50,
    },

    StartingDate: {
      type: String,
      required: true,
    },
    EndDate: {
      type: String,
      required: true,
    },
    Role: {
      type: String,
      required: true,
    },
    Responsibilities: {
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
