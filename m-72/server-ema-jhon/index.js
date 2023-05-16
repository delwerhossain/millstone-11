const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

//api
app.get("/", async (req, res) => {
  res.send("ema-jhon is awesome");
});

app.listen(port, () => {
  console.log("port listening on port - ", port);
});
