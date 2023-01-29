const mongoose = require("mongoose");
const validator = require("validator");

const tshirtSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },

  size: {
    type: String,
    maxLength: 3,
  },
  type: {
    type: String,
    minLength: 3,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Tshirt = new mongoose.model("Tshirt", tshirtSchema);

module.exports = Tshirt;
