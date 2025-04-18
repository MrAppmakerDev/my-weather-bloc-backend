"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = getWeather;
exports.welcome = welcome;
function getWeather(req, res) {
    res.send({ status: 200, message: "Data will be available soon!" });
}
function welcome(req, res) {
    res.send({ status: 200, message: "Welcome to my node server!" });
}
