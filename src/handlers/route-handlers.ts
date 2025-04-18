import { Request, Response } from "express";
import axios, { AxiosRequestConfig } from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;

async function getWeather(req: Request, res: Response) {
  const path = req.originalUrl.replace("/current.json/", "");
  const url = `${API_BASE_URL}${path}`;

  const config: AxiosRequestConfig = {
    method: req.method as any,
    headers: {
      ...req.headers,
      Authorization: `Bearer ${API_KEY}`,
    },
    data: req.body,
    params: req.query,
  };

  try {
    const response = await axios(url, config);

    res.status(response.status).json(response.data);
  } catch (error: any) {
    res.status(error.response?.statusCode || 500).json({
      error: error.message,
    });
  }
}

function welcome(req: Request, res: Response) {
  res.send({ status: 200, message: "Welcome to my node server!" });
}

export { welcome, getWeather };
