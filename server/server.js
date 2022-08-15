const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const {
  calculateCircumference,
  getPiValue,
  getCircumference,
} = require("./models/circumference");

app.use(cors());

calculateCircumference();

app.get("/api/values", (req, res) => {
  let circumference = getCircumference();
  let piValue = getPiValue();
  res.json({ piValue, circumference });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
