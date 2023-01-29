const express = require("express");
const router = express.Router();

const Tshirt = require("../models/tshirt");

router.get("/", (req, res) => {
  res.send("this is me from auth");
});

//multer
var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });

//post data
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




module.exports = router;