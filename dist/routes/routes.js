"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_handlers_1 = require("../handlers/route-handlers");
const router = (0, express_1.Router)();
router.get("/", route_handlers_1.getWeather);
router.get("/api", route_handlers_1.welcome);
exports.default = router;
