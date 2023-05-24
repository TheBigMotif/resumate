const { Schema, model } = require("mongoose");
const { User } = require(".");

const userSchema = new Schema({
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
});

const User = model("User", userSchema);

module.exports = User;
