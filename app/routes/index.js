import { Router } from "express";
import rutaMarca from "./routes.marca.js"

const ruta = Router();

ruta.use("/api", rutaMarca);

export default ruta;
