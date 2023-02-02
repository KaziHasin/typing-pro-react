const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Email can't blank"],
  },

  email: {
    type: String,
    required: [true, "User name can't blank"],
    min: [3, "User name too short"],
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
