import { prisma } from '../../server'
import { Request, Response } from "express";

const crearCliente = async (req: Request, res: Response) => {
    try {
        const { cedula, fecha_nacimiento, email, nombres, telefono } = req.body;
        const nuevoCliente = await prisma.cliente.create({
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
    } catch (e) {
        res.status(500).json({
            error: e,
            'message': 'error al crear el cliente, recuerde que la cedula no se puede repetir y que todos los campos sonrequeridos'
        });
    }
};

const obtenerClientes = async (req: Request, res: Response) => {
    try {
        const clientes = await prisma.cliente.findMany({
            where: {
                activo: true
            }
        });
        res.status(200).json(clientes);
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"error al obtener los clientes" });
    }
};

const obtenerCliente = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const cliente = await prisma.cliente.findUnique({
            where: {
                id_cliente: Number(id),
                activo: Boolean(true)
            },
        });
        res.status(200).json(cliente);
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"error al obtener el cliente" });
    }
};

const actualizarCliente = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { cedula, fecha_nacimiento, email, nombres, telefono } = req.body;
        const actualizarCliente = await prisma.cliente.update({
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
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"error al actualizar el cliente" });
    }
};


const eliminarCliente = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const eliminarCliente = await prisma.cliente.update({
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
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"error al eliminar el cliente"});
    }
};

export default {
    crearCliente,
    obtenerClientes,
    obtenerCliente,
    actualizarCliente,
    eliminarCliente
}