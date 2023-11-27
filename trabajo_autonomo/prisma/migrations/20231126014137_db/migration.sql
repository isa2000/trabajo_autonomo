-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "activo" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "activo" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "activo" BOOLEAN NOT NULL DEFAULT true;
