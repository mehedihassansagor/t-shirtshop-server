const mongoose = require("mongoose");
const tshirtSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
  },
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
  path:{
    type:String
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

const Tshirt = new mongoose.model("TshirtCollection", tshirtSchema);

module.exports = Tshirt;
