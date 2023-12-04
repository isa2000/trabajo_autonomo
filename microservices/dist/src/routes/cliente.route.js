"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cliente_controller_1 = __importDefault(require("../controllers/cliente.controller"));
const router = express_1.default.Router();
router.post("/crear/cliente", cliente_controller_1.default.crearCliente);
router.get("/ver/clientes", cliente_controller_1.default.obtenerClientes);
router.get("/ver/cliente/:id", cliente_controller_1.default.obtenerCliente);
router.patch("/actualizar/cliente/:id", cliente_controller_1.default.actualizarCliente);
router.delete("/eliminar/cliente/:id", cliente_controller_1.default.eliminarCliente);
exports.default = router;
