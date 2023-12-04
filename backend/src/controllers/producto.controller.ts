import { prisma } from '../../server'
import { Request, Response } from "express";

const crearProducto = async (req: Request, res: Response) => {
    try {
        const { nombre,precio,descripcion, } = req.body;
        const nuevoProducto = await prisma.producto.create({
            data: {
                nombre,
                precio,
                descripcion,
            },
        });
        res.status(200).json({
            'data':nuevoProducto,
            'message':"producto creado con exito"
        });
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"no se pudo crear el producto" });
    }
};

const obtenerProductos = async (req: Request, res: Response) => {
    try {
        const productos = await prisma.producto.findMany({
            where: {
                activo: true
            }
        });
        res.status(200).json(productos);
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"no se pudo obtener los productos" });
    }
};

const obtenerProducto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const producto = await prisma.producto.findUnique({
            where: {
                id_producto: Number(id),
                activo: Boolean(true)
            },
        });
        res.status(200).json(producto);
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"no se pudo obtener el producto" });
    }
};

const actualizarProducto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nombre, precio, descripcion,} = req.body;
        const actualizarProducto = await prisma.producto.update({
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
            'data':actualizarProducto,
            'message':"producto creado con exito"
        });
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"no se pudo actualizar el producto" });
    }
};


const eliminarProducto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const eliminarProducto = await prisma.producto.update({
            where: {
                id_producto: Number(id),
                activo: Boolean(true)
            },
            data: {
                activo: false
            }
        });
        res.status(200).json({
            'data':eliminarProducto,
            'message':"producto creado con exito"
        });
    } catch (e) {
        res.status(500).json({ 'error': e, 'message':"no se pudo eliminar el producto" });
    }
};

export default {
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    eliminarProducto
}