const {
  addFilmService,
  listAllFilmsService,
  updateFilmService,
  removeFilmService,
  findMovieByTitleService,
  findMovieByDirectorService,
  findMovieByGenreService,
  findMovieByYearService,
} = require("../service/filmService");

async function addFilmHandler(req, res) {
  try {
    const { title, director, genre, year } = req.body;
    const newFilm = await addFilmService(title, director, genre, year);
    return res.status(200).send(newFilm);
  } catch (err) {
    console.log("controller layer", err.message);
  }
}

async function listAllFilmsHandler(req, res) {
  try {
    const movie = await listAllFilmsService();
    return res.status(200).send(movie);
  } catch (err) {
    console.log("controller layer", err.message);
  }
}

async function updateFilmHandler(req, res) {
  try {
    const { id } = req.params;
    const { title, director, genre, year } = req.body;
    const updateMovie = await updateFilmService(id, title, director, genre, year);
    return res.status(200).send(updateMovie);
  } catch (err) {
    console.log("controller layer", err.message);
  }
}

async function removeFilmHandler(req, res) {
  try {
    const { id } = req.params;
    const removeFilm = await removeFilmService(id);

    if (removeFilm) {
      return res.status(200).send("Movie removed");
    }
    return res.status(404).send("Movie not found");
  } catch (err) {
    console.log("controller layer", err.message);
  }
}

async function findMovieHandler(req, res) {
  try {
    const { title, director, genre, year } = req.query;
    if (title) {
      const titleMovie = await findMovieByTitleService(title);
      return res.status(200).send(titleMovie);
    }

    if (director) {
      const directorMovie = await findMovieByDirectorService(director);
      return res.status(200).send(directorMovie);
    }

    if (genre) {
      const genreMovie = await findMovieByGenreService(genre);
      return res.status(200).send(genreMovie);
    }

    if (year) {
      const yearMovie = await findMovieByYearService(year);
      return res.status(200).send(yearMovie);
    }
  } catch (err) {
    console.log("controller layer", err.message);
  }
}

module.exports = {
  addFilmHandler,
  listAllFilmsHandler,
  updateFilmHandler,
  removeFilmHandler,
  findMovieHandler,
};
