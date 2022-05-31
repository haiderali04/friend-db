const express = require('express');
const friendRoutes = require("./routes/friendRoutes")
const app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello from server");
  });


  app.use("/friends", friendRoutes);


module.exports = app;

