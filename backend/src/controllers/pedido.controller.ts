import { prisma } from '../../server'
import { Request, Response } from "express";

const crearPedido = async (req: Request, res: Response) => {
    try {
        const { id_cliente, id_producto, fecha_pedido, estado, total, porcentaje_mantenimiento } = req.body;
        const nuevoPedido = await prisma.pedido.create({
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
            'data':nuevoPedido,
            'message':'pedido creado con exito'
        });
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"no se pudo crear el pedido"});
    }
};

const obtenerPedidos = async (req: Request, res: Response) => {
    try {
        const pedidos = await prisma.pedido.findMany({
            where:{
                activo: true
            }
        });
        res.status(200).json(pedidos);
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"no se pudo obtener los pedidos" });
    }
};

const obtenerPedido = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const pedido = await prisma.pedido.findUnique({
            where: {
                Id_pedido: Number(id),
                activo: Boolean(true)
            },
        });
        res.status(200).json(pedido);
    } catch (e) {
        res.status(500).json({'error': e, 'message':"no se pudo obtener el pedido"});
    }
};

const actualizarPedido = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const {  fecha_pedido, estado, total, porcentaje_mantenimiento } = req.body;
        const actualizarPedido = await prisma.pedido.update({
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
            'data':actualizarPedido,
            'message':'pedido actualizado con exito'
        });
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"no se pudo actualizar el pedido" });
    }
};


const eliminarPedido = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const eliminarPedido = await prisma.pedido.update({
        where: {
          Id_pedido: Number(id),
          activo: Boolean(true)
        },
        data: {
            activo: false
        }
      });
      res.status(200).json({
        'data':eliminarPedido,
        'message':'pedido creado con exito'
    });
    } catch (e) {
      res.status(500).json({ 'error': e, 'message':"no se pudo eliminar el pedido" });
    }
  };

export default {
    crearPedido,
    obtenerPedidos,
    obtenerPedido,
    actualizarPedido,
    eliminarPedido
}