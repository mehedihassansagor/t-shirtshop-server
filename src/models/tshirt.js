const mongoose = require("mongoose");

const tshirtSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
  },
  description: String,
  
  imageURL: String,

  size: {
    type: String,
    maxLength: 3,
  },
  type: {
    type: String,
    minLength: 3,
  },
  price:{
    type: Number,
  }
});

const Tshirt = new mongoose.model("TshirtCollection", tshirtSchema);

module.exports = Tshirt;
