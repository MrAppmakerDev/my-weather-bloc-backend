import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;

const getWeather = async (req: Request, res: Response): Promise<void> => {
  const city = req.query.q as string;

  const url = `${API_BASE_URL}/current.json`;

  try {
    const response = await axios(url, {
      params: {
        key: API_KEY,
        q: city,
      },
    });

    res.status(response.status).json(response.data);
  } catch (error: any) {
    res.status(error.response?.statusCode || 500).json({
      error: error.message,
      status: error.response?.statusCode,
    });
  }
};

function welcome(req: Request, res: Response) {
  res.send({ status: 200, message: "Welcome to my node server!" });
}

export { welcome, getWeather };
