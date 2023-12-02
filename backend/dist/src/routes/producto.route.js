"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const producto_controller_1 = __importDefault(require("../controllers/producto.controller"));
const router = express_1.default.Router();
router.post("/crear/Producto", producto_controller_1.default.crearProducto);
router.get("/ver/Productos", producto_controller_1.default.obtenerProductos);
router.get("/ver/Producto/:id", producto_controller_1.default.obtenerProducto);
router.patch("/actualizar/Producto/:id", producto_controller_1.default.actualizarProducto);
router.delete("/eliminar/Producto/:id", producto_controller_1.default.eliminarProducto);
exports.default = router;
