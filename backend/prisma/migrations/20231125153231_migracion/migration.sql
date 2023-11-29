-- CreateTable
CREATE TABLE "Producto" (
    "ID_PRODUCT" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "precio" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("ID_PRODUCT")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "Id_pedido" SERIAL NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "fecha_pedido" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL,
    "total" DECIMAL(5,2) NOT NULL,
    "porcentaje_mantenimiento" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("Id_pedido")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "ID_CLIENTE" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "telefono" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("ID_CLIENTE")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cedula_key" ON "Cliente"("cedula");

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Producto"("ID_PRODUCT") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("ID_CLIENTE") ON DELETE RESTRICT ON UPDATE CASCADE;
