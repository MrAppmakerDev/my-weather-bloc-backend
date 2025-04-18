import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routes/routes";

dotenv.config();

const app: Express = express();

const PORT = process.env.PORT || 8000;
const API_KEY = process.env.API_KEY;

if (!API_KEY)
  throw new Error("API_KEY is not defined in environment variables.");

app.use(cors());
app.use(express.json());

app.use("/api/weather", router);

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
