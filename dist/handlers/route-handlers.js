"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = welcome;
exports.getWeather = getWeather;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;
async function getWeather(req, res) {
    const path = req.originalUrl.replace("/current.json/", "");
    const url = `${API_BASE_URL}${path}`;
    const config = {
        method: req.method,
        headers: {
            ...req.headers,
            Authorization: `Bearer ${API_KEY}`,
        },
        data: req.body,
        params: req.query,
    };
    try {
        const response = await (0, axios_1.default)(url, config);
        res.status(response.status).json(response.data);
    }
    catch (error) {
        res.status(error.response?.statusCode || 500).json({
            error: error.message,
        });
    }
}
function welcome(req, res) {
    res.send({ status: 200, message: "Welcome to my node server!" });
}
