import dotenv from "dotenv";

dotenv.config();

const MONGO_USER = process.env.MONGO_USER || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_CONNECT = process.env.MONGO_CONNECT || "";
const MONGO_PATH = process.env.MONGO_PATH || "";
const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

const config = {
  mongo: {
    url: MONGO_CONNECT,
  },
  server: {
    port: SERVER_PORT,
  },
};

export default config;
