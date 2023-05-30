const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
// Schema to create a user model
const userSchema = new Schema(
  {
    Password: {
      type: String,
      required: true,
    },

    First: {
      type: String,
      required: true,
      max_length: 50,
    },
    Last: {
      type: String,
      required: true,
      max_length: 50,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "You have to use a valid email address"],
    },
    DOB: {
      type: String,
      require: true,
    },
    Phone: {
      type: String,
      require: true,
    },

    City: {
      type: String,
      require: true,
    },
    State: {
      type: String,
      require: true,
    },
    Country: {
      type: String,
      require: true,
    },
    Github: {
      type: String,
      required: true,
      max_length: 50,
    },
    Linkedin: {
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
// hash user password
// userSchema.pre("save", async function (next) {
//   if (this.isNew || this.isModified("password")) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have

const User = model("User", userSchema);

module.exports = User;
