const express = require("express");
const router = express.Router();
var fs = require("fs");
var path = require("path");

const Tshirt = require("../models/tshirt");

router.get("/", (req, res) => {
  res.send("this is me from auth");
});

//multer
var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

//post data
// router.post("/tshirt", async (req, res) => {
//     try {
//       const tshirt = new Tshirt(req.body);
//       const createTshirt = await tshirt.save();
//       console.log(createTshirt);
//       res.status(201).send(createTshirt);
//     } catch (err) {
//       res.status(400).send(err);
//     }
//   });

router.post("/tshirt", upload.single("image"), (req, res, next) => {
 try{
  var obj = {
    name: req.body.name,

    image: {
      data: fs.readFileSync(
        path.join(__dirname + "../../uploads" + req.file.filename)
      ),
      contentType: "image/png",
    },
    size: req.body.size,
    type: req.body.type,
    desc: req.body.desc,
  };
  Tshirt.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      item.save();
      res.redirect("/");
    }
  });
 }catch(err){
  console.log(err)
 }
});

module.exports = router;
