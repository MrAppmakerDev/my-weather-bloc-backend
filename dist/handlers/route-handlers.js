"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = void 0;
exports.welcome = welcome;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;
const getWeather = async (req, res) => {
    const city = req.query.q;
    const url = `${API_BASE_URL}/current.json`;
    try {
        const response = await (0, axios_1.default)(url, {
            params: {
                key: API_KEY,
                q: city,
            },
        });
        res.status(response.status).json(response.data);
    }
    catch (error) {
        res.status(error.response?.statusCode || 500).json({
            error: error.message,
            status: error.response?.statusCode,
        });
    }
};
exports.getWeather = getWeather;
function welcome(req, res) {
    res.send({ status: 200, message: "Welcome to my node server!" });
}
