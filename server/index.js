const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const verifyToken = require("./middleware/verifyToken");
require("dotenv").config();


const app = express();

app.use(cors({
  origin:"http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", require("./routes/userRoutes"));
app.use("/refresh",require("./routes/refreshToken"));
app.use(verifyToken);
app.use("/api/admin", require("./routes/adminRoutes"));


app.listen(process.env.PORT || 4000, () => {

  console.log("listening for requests");

})
