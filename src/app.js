const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");

require("./db/connection");

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(require("./router/auth"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`port is running at ${port}`);
});
