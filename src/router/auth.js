const express = require("express");
const router = express.Router();

const Tshirt = require("../models/tshirt");

router.get("/", (req, res) => {
  res.send("this is me from auth");
});




// post data
router.post("/tshirt", async (req, res) => {
    try {
      const tshirt = new Tshirt(req.body);
      const createTshirt = await tshirt.save();
      console.log(createTshirt);
      res.status(201).send(createTshirt);
    } catch (err) {
      res.status(400).send(err);
    }
  });




//GET DATA

router.get("/tshirt", async (req, res) => {
  try {
    const tshirtadata = await Tshirt.find();
    res.send(tshirtadata);
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


module.exports = router;
