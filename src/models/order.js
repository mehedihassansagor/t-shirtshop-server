const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
  },
  address: {
    type: String,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    validat(value) {
      if (!validator.isEmail(value)) {
        throw new Error("this is not a valid email address");
      }
    },
  },
  phone:{
    type: Number,
    maximum:12,
    minimum: 9,
  },
  productName: String,
  productId: String,
  size: String,
  totalPrice: Number,
  
});

const Order = new mongoose.model("OrderColletion", orderSchema);
module.exports = Order;
