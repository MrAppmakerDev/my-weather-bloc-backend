"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
const API_KEY = process.env.API_KEY;
if (!API_KEY)
    throw new Error("API_KEY is not defined in environment variables.");
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/weather", routes_1.default);
app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
