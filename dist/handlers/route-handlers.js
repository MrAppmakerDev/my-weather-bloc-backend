"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = getWeather;
function getWeather(req, res) {
    res.send({ status: 200, message: "Welcome to my node server!" });
}
