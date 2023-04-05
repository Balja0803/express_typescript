import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import movieRouter from "./routes/movie-app";
import "./config/mongoDB-config";
import config from "./config/config";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(movieRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.listen(port, () => {
  console.log(`[server]: server is running at http://localhost:${port}`);
});
