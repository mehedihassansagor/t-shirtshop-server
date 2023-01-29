const express = require("express");
const app = express();
const cors = require("cors");
// var fs = require('fs');
// var path = require('path');
var bodyParser = require('body-parser');

require("./db/connection");

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(require("./route/auth"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine", "ejs");



app.listen(port, () => {
    console.log(`port is running at ${port}`);
  });