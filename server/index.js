const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/userRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

app.listen(process.env.PORT || 4000, () => {

  console.log("listening for requests");

})
