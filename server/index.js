const express = require("express");
const app = express();
require("dotenv").config();
const todoRoutes = require("./routes/todo");
const dbConnect = require("./config/database.js");

const port = process.env.PORT || 3000;
app.use(express.json());
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "api running true",
  });
});
app.use("/api/v1", todoRoutes);

app.listen(port, () => console.log(`app listening on ${port}`));
dbConnect();
