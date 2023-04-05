import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(`${process.env.MONGO_CONNECT}`)
  .then((res) => {
    return console.log("sample DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
