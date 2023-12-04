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
const crearCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cedula, fecha_nacimiento, email, nombres, telefono } = req.body;
        const nuevoCliente = yield server_1.prisma.cliente.create({
            data: {
                cedula,
                fecha_nacimiento,
                email,
                nombres,
                telefono
            },
        });
        res.status(200).json({
            'data': nuevoCliente,
            'message': "cliente creado con exito"
        });
    }
    catch (e) {
        res.status(500).json({
            error: e,
            'message': 'error al crear el cliente, recuerde que la cedula no se puede repetir y que todos los campos sonrequeridos'
        });
    }
});
const obtenerClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientes = yield server_1.prisma.cliente.findMany({
            where: {
                activo: true
            }
        });
        res.status(200).json(clientes);
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "error al obtener los clientes" });
    }
});
const obtenerCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const cliente = yield server_1.prisma.cliente.findUnique({
            where: {
                id_cliente: Number(id),
                activo: Boolean(true)
            },
        });
        res.status(200).json(cliente);
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "error al obtener el cliente" });
    }
});
const actualizarCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { cedula, fecha_nacimiento, email, nombres, telefono } = req.body;
        const actualizarCliente = yield server_1.prisma.cliente.update({
            where: {
                id_cliente: Number(id),
                activo: Boolean(true)
            },
            data: {
                cedula,
                fecha_nacimiento,
                email,
                nombres,
                telefono
            },
        });
        res.status(200).json({
            'data': actualizarCliente,
            'message': "cliente actualizado con exito"
        });
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "error al actualizar el cliente" });
    }
});
const eliminarCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const eliminarCliente = yield server_1.prisma.cliente.update({
            where: {
                id_cliente: Number(id),
                activo: Boolean(true)
            },
            data: {
                activo: false
            }
        });
        res.status(200).json({
            'data': eliminarCliente,
            'message': "cliente eliminado con exito"
        });
    }
    catch (e) {
        res.status(500).json({ 'error': e, 'message': "error al eliminar el cliente" });
    }
});
exports.default = {
    crearCliente,
    obtenerClientes,
    obtenerCliente,
    actualizarCliente,
    eliminarCliente
};
