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
const crearPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_cliente, id_producto, fecha_pedido, estado, total, porcentaje_mantenimiento } = req.body;
        const nuevoPedido = yield server_1.prisma.pedido.create({
            data: {
                id_cliente,
                id_producto,
                fecha_pedido,
                estado,
                total,
                porcentaje_mantenimiento
            },
        });
        res.status(200).json({
            'data': nuevoPedido,
            'message': 'pedido creado con exito'
        });
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "no se pudo crear el pedido" });
    }
});
const obtenerPedidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pedidos = yield server_1.prisma.pedido.findMany({
            where: {
                activo: true
            }
        });
        res.status(200).json(pedidos);
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "no se pudo obtener los pedidos" });
    }
});
const obtenerPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const pedido = yield server_1.prisma.pedido.findUnique({
            where: {
                Id_pedido: Number(id),
                activo: Boolean(true)
            },
        });
        res.status(200).json(pedido);
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "no se pudo obtener el pedido" });
    }
});
const actualizarPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { fecha_pedido, estado, total, porcentaje_mantenimiento } = req.body;
        const actualizarPedido = yield server_1.prisma.pedido.update({
            where: {
                Id_pedido: Number(id),
                activo: Boolean(true)
            },
            data: {
                fecha_pedido,
                estado,
                total,
                porcentaje_mantenimiento
            },
        });
        res.status(200).json({
            'data': actualizarPedido,
            'message': 'pedido actualizado con exito'
        });
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "no se pudo actualizar el pedido" });
    }
});
const eliminarPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const eliminarPedido = yield server_1.prisma.pedido.update({
            where: {
                Id_pedido: Number(id),
                activo: Boolean(true)
            },
            data: {
                activo: false
            }
        });
        res.status(200).json({
            'data': eliminarPedido,
            'message': 'pedido creado con exito'
        });
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "no se pudo eliminar el pedido" });
    }
});
exports.default = {
    crearPedido,
    obtenerPedidos,
    obtenerPedido,
    actualizarPedido,
    eliminarPedido
};
