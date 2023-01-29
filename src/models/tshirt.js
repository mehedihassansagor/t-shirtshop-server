const mongoose = require("mongoose");

const tshirtSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  desc: String,
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
});

const Tshirt = new mongoose.model("Tshirt", tshirtSchema);

module.exports = Tshirt;
