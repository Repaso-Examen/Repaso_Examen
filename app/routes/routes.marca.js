import { Router } from "express";
import { CrearMarca, EliminarMarca, ListarMarca, ModificarMarca, MostrarMarca } from "../controllers/controllers.marca.js";

const rutaMarca = Router();

rutaMarca.get("/marca/:id", MostrarMarca);
rutaMarca.get("/marca", ListarMarca);
rutaMarca.post("/marca", CrearMarca);
rutaMarca.put("/marca", ModificarMarca);
rutaMarca.delete("/marca", EliminarMarca);

export default rutaMarca;