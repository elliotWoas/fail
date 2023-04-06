const express = require("express");
const app = express();
const cors = require("cors");
const port = 4001;
const auth_router = require("./routes/auth.router");
const mongoose = require("mongoose");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connect
mongoose
  .connect(
    "mongodb+srv://arshiyah53:46646659@cluster0.p7fvwrc.mongodb.net/user?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to db");
  });

//auth router
app.use("/api/auth", auth_router);

app.get("/", (req, res) => {
  res.send("hello arshiya and mehdi");
});

module.exprots = app;
