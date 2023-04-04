import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;

const db = mongoose
  .connect(`mongodb+srv:${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PATH}`)
  .then((res) => {
    return console.log("sample DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default db;
