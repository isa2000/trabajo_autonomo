import express from "express";
import ProductoController from "../controllers/producto.controller";

const router = express.Router();

router.post("/crear/Producto",ProductoController.crearProducto);
router.get("/ver/Productos",ProductoController.obtenerProductos);
router.get("/ver/Producto/:id",ProductoController.obtenerProducto);
router.patch("/actualizar/Producto/:id",ProductoController.actualizarProducto);
router.delete("/eliminar/Producto/:id",ProductoController.eliminarProducto);

export default router;