"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../../server");
const crearProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, precio, descripcion, } = req.body;
        const nuevoProducto = yield server_1.prisma.producto.create({
            data: {
                nombre,
                precio,
                descripcion,
            },
        });
        res.status(200).json({
            'data': nuevoProducto,
            'message': "producto creado con exito"
        });
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "no se pudo crear el producto" });
    }
});
const obtenerProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield server_1.prisma.producto.findMany({
            where: {
                activo: true
            }
        });
        res.status(200).json(productos);
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "no se pudo obtener los productos" });
    }
});
const obtenerProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const producto = yield server_1.prisma.producto.findUnique({
            where: {
                id_producto: Number(id),
                activo: Boolean(true)
            },
        });
        res.status(200).json(producto);
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "no se pudo obtener el producto" });
    }
});
const actualizarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nombre, precio, descripcion, } = req.body;
        const actualizarProducto = yield server_1.prisma.producto.update({
            where: {
                id_producto: Number(id),
                activo: Boolean(true)
            },
            data: {
                nombre,
                precio,
                descripcion,
            },
        });
        res.status(200).json({
            'data': actualizarProducto,
            'message': "producto creado con exito"
        });
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "no se pudo actualizar el producto" });
    }
});
const eliminarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const eliminarProducto = yield server_1.prisma.producto.update({
            where: {
                id_producto: Number(id),
                activo: Boolean(true)
            },
            data: {
                activo: false
            }
        });
        res.status(200).json({
            'data': eliminarProducto,
            'message': "producto creado con exito"
        });
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "no se pudo eliminar el producto" });
    }
});
exports.default = {
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    eliminarProducto
};
