import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongo = process.env.MONGO_CONNECT as string;

const db = mongoose
  .connect(mongo)
  .then((res) => {
    console.log("sample DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default db;
