import express from "express";
import Movie from "../model/movie-model";
// import * as mongoose from "mongoose";

const movieRouter = express.Router();

movieRouter.get("/movies", async (req, res) => {
  console.log("movies GET request");
  const result = await Movie.find({ poster: { $exists: true } }).limit(10);
  if (result) {
    res.status(200).send(result);
  } else {
    res.send(400).send({ message: "cannot find" });
  }
});

movieRouter.get("/movies/:id", async (req, res) => {
  console.log("movie get ", req.params.id);

  const result = await Movie.findOne({ _id: req.params.id });

  try {
    res.status(200).send(result);
  } catch (error) {
    console.log({ error: error });
  }
});

movieRouter.get("/movies-ids", async (req, res) => {
  console.log("static path generate");

  try {
    const movie = await Movie.find({}).limit(30).select({
      _id: 1,
    });

    return res.status(200).send(movie);
  } catch (error) {
    console.log(error);
  }
});

export default movieRouter;
