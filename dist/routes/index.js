"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routesMarca = _interopRequireDefault(require("./routes.marca.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ruta = (0, _express.Router)();
ruta.use("/api", _routesMarca["default"]);
var _default = exports["default"] = ruta;