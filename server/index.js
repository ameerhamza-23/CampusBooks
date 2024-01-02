const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")
require("dotenv").config();

const app = express();

app.use(cors({
  origin:"*",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", require("./routes/userRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/refresh",require("./routes/refreshToken"));

app.listen(process.env.PORT || 4000, () => {

  console.log("listening for requests");

})
