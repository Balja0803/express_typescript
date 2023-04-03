import express from "express";

const movieRouter = express.Router();

movieRouter.get("/movies", (req, res) => {
  console.log("movies GET request");
  res.status(200).send({ message: "success" });
});

export default movieRouter;
