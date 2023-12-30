const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 4000, () => {
  console.log('server is running');
})

