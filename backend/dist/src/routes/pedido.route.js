"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pedido_controller_1 = __importDefault(require("../controllers/pedido.controller"));
const router = express_1.default.Router();
router.post("/crear/pedido", pedido_controller_1.default.crearPedido);
router.get("/ver/pedidos", pedido_controller_1.default.obtenerPedidos);
router.get("/ver/pedido/:id", pedido_controller_1.default.obtenerPedido);
router.patch("/actualizar/pedido/:id", pedido_controller_1.default.actualizarPedido);
router.delete("/eliminar/pedido/:id", pedido_controller_1.default.eliminarPedido);
exports.default = router;
