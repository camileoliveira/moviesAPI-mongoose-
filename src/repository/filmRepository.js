const Film = require("../schema/filmSchema");



// BUSCAR POR: NÃO FUNCIONA DIRETOR E TÍTULO, YEAR E GENRE OK

async function addFilm(title, director, genre, year) {
  try {
    const newFilm = new Film({ title, director, genre, year });
    return await newFilm.save();
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

async function listAllFilms() {
  try {
    return await Film.find();
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

async function updateFilm(id, title, director, genre, year) {
  try {
    const movie = await Film.findByIdAndUpdate(id,
      { title, director, genre, year },
      { new: true, runValidators: true });
    return movie;
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

async function removeFilm(id) {
  try {
    return await Film.findByIdAndDelete(id);
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

async function findMovieByTitle(title) {
  try {
    const movie = await Film.findOne({ title });
    if (movie) {
      return movie;
    } else {
      console.log("Movie not found");
    }
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

async function findMovieByDirector(director) {
  try {
    const movie = await Film.findOne({ director });
    if (movie) {
      return movie;
    } else {
      console.log("Movie not found");
    }
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

async function findMovieByGenre(genre) {
  try {
    const movie = await Film.findOne({ genre });
    if (movie) {
      return movie;
    } else {
      console.log("Movie not found");
    }
  } catch (err) {
    console.log("repository layer", err.message);
  }
}

async function findMovieByYear(year) {
  try {
    const movie = await Film.findOne({ year });
    if (movie) {
      return movie;
    } else {
      console.log("Movie not found");
    }
  } catch (err) {
    console.log("repository layer", err.message);
  }
}
module.exports = {
  addFilm,
  listAllFilms,
  updateFilm,
  removeFilm,
  findMovieByTitle,
  findMovieByDirector,
  findMovieByGenre,
  findMovieByYear
};
