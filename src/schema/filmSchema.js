const mongoose = require("mongoose");

const FilmSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  director: {
    type: String,
    require: true,
  },

  genre: {
    type: String,
    require: true,
  },

  year: {
    type: Number,
    require: true,
  },
});

const Film = mongoose.model("film", FilmSchema);

module.exports = Film;