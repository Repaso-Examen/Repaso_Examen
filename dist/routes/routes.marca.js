"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersMarca = require("../controllers/controllers.marca.js");
var rutaMarca = (0, _express.Router)();
rutaMarca.get("/marca/:id", _controllersMarca.MostrarMarca);
rutaMarca.get("/marca", _controllersMarca.ListarMarca);
rutaMarca.post("/marca", _controllersMarca.CrearMarca);
rutaMarca.put("/marca", _controllersMarca.ModificarMarca);
rutaMarca["delete"]("/marca", _controllersMarca.EliminarMarca);
var _default = exports["default"] = rutaMarca;