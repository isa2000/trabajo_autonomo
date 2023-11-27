import express from "express";
import ClienteController from "../controllers/cliente.controller";

const router = express.Router();

router.post("/crear/cliente",ClienteController.crearCliente);
router.get("/ver/clientes",ClienteController.obtenerClientes);
router.get("/ver/cliente/:id",ClienteController.obtenerCliente);
router.patch("/actualizar/cliente/:id",ClienteController.actualizarCliente);
router.delete("/eliminar/cliente/:id",ClienteController.eliminarCliente);

export default router;