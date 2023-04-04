import * as mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  title: String,
});

const Movie = mongoose.model("movie", movieSchema, "movies");

export default Movie;
