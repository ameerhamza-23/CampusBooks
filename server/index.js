const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 4000, () => {

  console.log("listening for requests");

})
