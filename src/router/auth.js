const express = require("express");
const router = express.Router();

const Tshirt = require("../models/tshirt");
const Order = require("../models/order");

router.get("/", (req, res) => {
  res.send("this is me from auth");
});

// post data tshirt
router.post("/tshirt", async (req, res) => {
  try {
    const tshirt = new Tshirt(req.body);
    const createTshirtData = await tshirt.save();
    console.log(createTshirtData);
    res.status(201).send(createTshirtData);
  } catch (err) {
    res.status(400).send(err);
  }
});

//GET DATA tshirt

router.get("/tshirt", async (req, res) => {
  try {
    const tshirtData = await Tshirt.find();
    res.send(tshirtData);
  } catch (err) {
    res.send(err);
  }
});

//get individual Tshirt data

router.get("/tshirt/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const individualTshirt = await Tshirt.findById(_id);

    if (!individualTshirt) {
      res.status(404).send();
    } else {
      res.send(individualTshirt);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

//delete

router.delete("/tshirt/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteTshirts = await Tshirt.findByIdAndDelete(_id);
    if (!deleteTshirts) {
      return res.status(400).send();
    }
    res.send(deleteTshirts);
    console.log("deletete", deleteTshirts);
  } catch (err) {
    res.status(500).send(err);
  }
});

//operation for order page
//order post

router.post("/order", async (req, res) => {
  try {
    const order = new Order(req.body);
    const createOrder = await order.save();
    console.log(createOrder);
    res.status(201).send(createOrder);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get orders

router.get("/order", async (req, res) => {
  try {
    const orderTshirt = await Order.find();
    res.send(orderTshirt);
    console.log(orderTshirt);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
