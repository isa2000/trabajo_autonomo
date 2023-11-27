import express from "express";
import PedidoController from "../controllers/pedido.controller";

const router = express.Router();

router.post("/crear/pedido",PedidoController.crearPedido);
router.get("/ver/pedidos",PedidoController.obtenerPedidos);
router.get("/ver/pedido/:id",PedidoController.obtenerPedido);
router.patch("/actualizar/pedido/:id",PedidoController.actualizarPedido);
router.delete("/eliminar/pedido/:id",PedidoController.eliminarPedido);

export default router;
