const { Schema, model } = require("mongoose");
// const { User } = require(".");

// hola

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "You have to use a valid email address"],
    },
    experience: [
      {
        type: Schema.Types.Object,
        ref: "Expirience",
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
