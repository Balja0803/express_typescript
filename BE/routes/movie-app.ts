import express from "express";
import Movie from "../model/movie-model";
import * as mongoose from "mongoose";

const movieRouter = express.Router();

movieRouter.get("/movies", async (req, res) => {
  console.log("movies GET request");
  const result = await Movie.find({}).limit(5);
  if (result) {
    res.status(200).send(result);
  } else {
    res.send(400).send({ message: "cannot find" });
  }
});

export default movieRouter;
