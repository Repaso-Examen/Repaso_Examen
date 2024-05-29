"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pool = void 0;
var _promise = require("mysql2/promise");
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var Pool = exports.Pool = (0, _promise.createPool)({
  host: process.env.MYSQL_HOST || "localhost",
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "mayorca"
});