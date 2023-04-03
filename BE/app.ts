import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import movieRouter from "./routes/movie-app";
import db from "./config/mongoDB-config";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(movieRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.listen(port, () => {
  console.log(`[server]: server is running at http://localhost:${port}`);
});
