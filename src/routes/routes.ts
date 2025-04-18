import { Router } from "express";
import { getWeather } from "../handlers/route-handlers";
const router = Router();

router.get("/", getWeather);

export default router;
