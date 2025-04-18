import { Request, Response } from "express";

function getWeather(req: Request, res: Response) {
  res.send({ status: 200, message: "Data will be available soon!" });
}

function welcome(req: Request, res: Response) {
  res.send({ status: 200, message: "Welcome to my node server!" });
}

export { welcome, getWeather };