const {
  addFilm,
  listAllFilms,
  updateFilm,
  removeFilm,
  findMovieByTitle,
  findMovieByDirector,
  findMovieByGenre,
  findMovieByYear,
} = require("../repository/filmRepository");

async function addFilmService(title, director, genre, year) {
  try {
    const movie = await addFilm(title, director, genre, year);
    return movie
  } catch (err) {
    console.log("service layer", err.message);
  }
}

async function listAllFilmsService() {
  try {
    const movie = await listAllFilms();
    return movie
  } catch (err) {
    console.log("service layer", err.message);
  }
}

async function updateFilmService(id, title, director, genre, year) {
  try {
    const movie = await updateFilm(id, title, director, genre, year);
    return movie
  } catch (err) {
    console.log("service layer", err.message);
  }
}

async function removeFilmService(id) {
  try {
    const movie = await removeFilm(id);
    return movie
  } catch (err) {
    console.log("service layer", err.message);
  }
}

async function findMovieByTitleService(title) {
  try {
    const movie =  await findMovieByTitle(title);
    return movie
  } catch (err) {
    console.log("service layer", err.message);
  }
}

async function findMovieByDirectorService(director) {
  try {
    const movie = await findMovieByDirector(director);
    return movie
  } catch (err) {
    console.log("service layer", err.message);
  }
}

async function findMovieByGenreService(genre) {
  try {
    const movie = await findMovieByGenre(genre);
    return movie
  } catch (err) {
    console.log("service layer", err.message);
  }
}

async function findMovieByYearService(year) {
  try {
    const movie = await findMovieByYear(year);
    return movie
  } catch (err) {
    console.log("service layer", err.message);
  }
}

module.exports = {
  addFilmService,
  listAllFilmsService,
  updateFilmService,
  removeFilmService,
  findMovieByTitleService,
  findMovieByDirectorService,
  findMovieByGenreService,
  findMovieByYearService
};
