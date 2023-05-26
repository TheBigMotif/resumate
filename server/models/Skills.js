const { Schema, Types } = require("mongoose");

const skillsSchema = new Schema({
  skillId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  SoftSkills: [
    {
      type: String,
      // require: true,
    },
  ],
  HardSkills: [
    {
      type: String,
      // require: true,
    },
  ],
});

// const Skills = ("User", userSchema);

module.exports = skillsSchema;
