import { Request, Response } from "express";

export function getWeather(req: Request, res: Response) {
  res.send({ status: 200, message: "Welcome to my node server!" });
}
