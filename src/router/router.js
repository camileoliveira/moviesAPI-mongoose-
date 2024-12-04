const express = require("express");
const router = express.Router();

const {
  addFilmHandler,
  listAllFilmsHandler,
  updateFilmHandler,
  removeFilmHandler,
  findMovieHandler,
} = require("../controller/filmController");

router.post("/movie", addFilmHandler);
router.get("/movie", listAllFilmsHandler);
router.get("/movie/search", findMovieHandler)
router.put("/movie/:id", updateFilmHandler);
router.delete("/movie/:id", removeFilmHandler);


module.exports = router;
