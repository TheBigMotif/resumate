const { Schema, model } = require("mongoose");
const educationSchema = require("./Education");
const experienceSchema = require("./Experience");
const skillsSchema = require("./Skills");
const interestSchema = require("./Interest");
// Schema to create a course model
const responseSchema = new Schema(
  {
    technicalSkills: [
      {
        type: String,
        required: true,
      },
    ],
    experience: [experienceSchema],
    education: [educationSchema],
    skills: [skillsSchema],
    interest: [interestSchema],
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
