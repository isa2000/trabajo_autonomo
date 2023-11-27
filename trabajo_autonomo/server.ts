// import http from 'http';
import express, { Request, Response  } from 'express'
import {  PrismaClient} from '@prisma/client'
import PedidoRouter from './src/routes/pedido.route'
import ProductoRouter from './src/routes/producto.route'
import ClienteRouter from './src/routes/cliente.route'

export const prisma = new PrismaClient();



const app = express();
const port = process.env.PORT;

async function main() {
  app.use(express.json());

  // Register API routes
  app.use("/api/v1/",PedidoRouter);
  app.use("/api/v1/",ClienteRouter);
  app.use("/api/v1/",ProductoRouter);

  // Catch unregistered routes
  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Ruta ${req.originalUrl} no encontrada` });
  });

  app.listen(port, () => {
    console.log(`Server escuchando en el puerto ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });