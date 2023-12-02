// import http from 'http';
import express, { Request, Response  } from 'express'
import {  PrismaClient} from '@prisma/client'
import PedidoRouter from './src/routes/pedido.route'
import ProductoRouter from './src/routes/producto.route'
import ClienteRouter from './src/routes/cliente.route'
// import path from 'path';

export const prisma = new PrismaClient();
// const exphbs  = require('express-handlebars');


const app = express();
const port = process.env.PORT;

async function main() {
  app.use(express.json());

  // app.set('views', path.join(__dirname, 'views'));
  // app.set('view engine', 'hbs');


  // app.use(express.static(path.join(__dirname, 'public')));

  // Register API routes
  app.use("/api/v1/",PedidoRouter);
  app.use("/api/v1/",ClienteRouter);
  app.use("/api/v1/",ProductoRouter);
  // app.use('/', ServerViews);


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