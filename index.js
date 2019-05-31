const mongoose = require("mongoose");
const express = require("express");
const helmet = require("helmet");
const app = express();
const customers = require("./routes/customers");
const genres = require("./routes/genres");

app.use(express.json());
app.use(helmet());
app.use("/api/genres", genres);
app.use("/api/customers", customers);

mongoose.connect("mongodb://localhost/vidly_2");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The app is running on port ${port}...`);
});
