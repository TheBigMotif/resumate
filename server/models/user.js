const { Schema, model } = require("mongoose");

// Schema to create a user model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },    
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "You have to use a valid email address"],
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    linkedin: {
      type: String,
      required: true,
      max_length: 50,
    },
    responses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Response",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model("User", userSchema);

module.exports = User;
