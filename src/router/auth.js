const express = require("express");
const router = express.Router();
var multer = require("multer");

var fs = require("fs");
var path = require("path");

const Tshirt = require("../models/tshirt");

router.get("/", (req, res) => {
  res.send("this is me from auth");
});

//multer

var storage = multer.diskStorage({
  
  destination: (req, file, cb) => {
    cb(null, "uploads");
    
  },

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = file.originalname
    .replace(ext, " ") 
    .toLocaleLowerCase()
    .split(" ")
    .join(".") + "_" + Date.now(); 
    cb(null, fileName + ext);
    
  },
});

var upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
});

// post data
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

//POST IMAGE OR OBJECTS
router.post("/tshirt", upload.single("img"), async (req, res, next) => {
  console.log(req.file)
  try {
    var obj = {
      name: req.body.name,
      img: {
        data: fs.readFileSync(
          path.join(__dirname + "../../../uploads/" + req.file.filename)
        ),
        contentType: "img/png",
      },
      
      size: req.body.size,
      type: req.body.type,
      desc: req.body.desc,
      path: req.file.path,
    };
    await Tshirt.create(obj, (err, item) => {
      if (err) {
        console.log(err);
      } else {
        // res.status(201).send(item);
        item.save();
        // res.redirect("/tshirt");
        res.send(item);
      }
    });
  } catch (err) {
    console.log(err);
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


module.exports = router;
