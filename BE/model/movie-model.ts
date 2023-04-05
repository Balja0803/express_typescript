import * as mongoose from "mongoose";

type awardsType = {
  wins: number;
  nominations: number;
  text: string;
};
type tomatoesType = {
  viewer: viewerType;
  lastUpdated: Date;
};
type viewerType = {
  rating: number;
  numReviews: number;
  meter: number;
};

interface MovieType {
  plot: string;
  genres: string[];
  runtime: number;
  poster?: string;
  cast: string[];
  num_mflix_comments: number;
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  rated?: string;
  awards: awardsType;
  lastUpdated: string;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: string[];
  type: string;
  tomatoes: tomatoesType;
}

const movieSchema = new mongoose.Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  poster: String,
  num_mflix_comments: Number,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  rated: String,
  awards: Object,
  lastUpdated: String,
  year: Number,
  imdb: Object,
  countries: [String],
  type: String,
  tomatoes: Object,
});

const Movie = mongoose.model("movie", movieSchema, "movies");

export default Movie;
