import { Pool } from "../config/db.mysql.js";

export const MostrarMarca = async(req, res) =>{
    let id = req.params['id'];
    try {
        const respuesta = await Pool.query(`CALL sp_MostrarMarca(${id});`);
        res.json({"res":respuesta})
    } catch (error) {
        res.json({"error":error})
    }
}

export const ListarMarca = async(req, res) =>{
    try {
        const respuesta = await Pool.query(`CALL sp_ListarMarca();`);
        res.json({"res":respuesta})
    } catch (error) {
        res.json({"error":error})
    }
}

export const CrearMarca = async(req, res) =>{
    let descripcion = req.body.descripcion;
    try {
        const respuesta = await Pool.query(`CALL sp_CrearMarca('${descripcion}');`);
        if (respuesta[0].affectedRows==1) {
            res.json({"res":"Marca Creada"});
        } else {
            res.json({"err":"No se puede crear"});
        }
    } catch (err) {
        res.json({"error":err})
    }
}

export const ModificarMarca = async(req, res) =>{
    let id = req.body.id;
    let descripcion = req.body.descripcion;
    try {
        const respuesta = await Pool.query(`CALL sp_ModificarMarca(${id},'${descripcion}');`);
        if (respuesta[0].affectedRows==1) {
            res.json({"res":"Marca Modificada"});
        } else {
            res.json({"error":"No se puede modificar"});
        }
    } catch (error) {
        res.json({"error":error})
    }
}

export const EliminarMarca = async(req, res) =>{
    let id = req.body.id;
    try {
        const respuesta = await Pool.query(`CALL sp_EliminarMarca(${id});`);
        if (respuesta[0].affectedRows==1) {
            res.json({"res":"Marca Eliminada"});
        } else {
            res.json({"error":"No se puede eliminar"});
        }
    } catch (error) {
        res.json({"error":error})
    }
}