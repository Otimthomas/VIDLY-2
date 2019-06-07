const mongoose = require("mongoose");
const Joi = require("joi");
const { genreSchema } = require("./genres");

const Movie = mongoose.model(
  "Movie",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50
    },
    genre: {
      type: genreSchema,
      required: true
    },
    numberInStock: {
      type: Number,
      required: true,
      min: 0
    },
    dailyRentalRate: {
      type: Number,
      required: true,
      min: 0
    }
  })
);

async function validateMovies(movie) {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(50)
      .required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number()
      .min(0)
      .required(),
    dailyRentalRate: Joi.number()
      .min(0)
      .required()
  };

  return Joi.validate(movie, schema);
}

exports.validate = validateMovies;
exports.Movie = Movie;
