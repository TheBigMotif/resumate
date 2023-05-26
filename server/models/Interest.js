const { Schema, Types } = require("mongoose");

const interestSchema = new Schema({
  interestId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  Interest: [
    {
      type: String,
      // require: true,
    },
  ],
  // HardSkills: [
  //   {
  //     type: String,
  //     // require: true,
  //   },
  // ],
});

// const Skills = ("User", userSchema);

module.exports = interestSchema;
