require("express-async-errors");
const winston = require("winston");
require("winston-mongodb");
const error = require("./middleware/error");
const config = require("config");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const express = require("express");
const helmet = require("helmet");
const app = express();
const customers = require("./routes/customers");
const genres = require("./routes/genres");
const movies = require("./routes/movies");
const rentals = require("./routes/rentals");
const users = require("./routes/users");
const auth = require("./routes/auth");

process.on("uncaughtException", ex => {
  console.log("WE GOT AN UNCAUGHTEXCEPTION!");
  winston.error(ex.message, ex);
  process.exit(1);
});

process.on("unhandledRejection", ex => {
  console.log("WE GOT AN UNHANDLED REJECTION!");
  winston.error(ex.message, ex);
  process.exit(1);
});

winston.add(new winston.transports.File({ filename: "logfile.log" }));
winston.add(
  new winston.transports.MongoDB({ db: "mongodb://localhost/vidly_2" })
);

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey not defined.");
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost/vidly_2", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("Connected to mongodb"))
  .catch(err => console.log("Failed to connect to db", err));

app.use(express.json());
app.use(helmet());
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/movies", movies);
app.use("/api/rentals", rentals);
app.use("/api/users", users);
app.use("/api/auth", auth);

app.use(error);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The app is running on port ${port}...`);
});
