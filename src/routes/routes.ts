import { Router } from "express";
import { getWeather, welcome } from "../handlers/route-handlers";

const weatherRoute = Router();
const welcomeRoute = Router();

weatherRoute.get("/", getWeather);
welcomeRoute.get("/", welcome);

export { weatherRoute, welcomeRoute };
