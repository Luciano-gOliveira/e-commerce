/*
  Warnings:

  - You are about to drop the column `OrderId` on the `OrderProduct` table. All the data in the column will be lost.
  - Added the required column `orderId` to the `OrderProduct` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_OrderId_fkey";

-- AlterTable
ALTER TABLE "OrderProduct" DROP COLUMN "OrderId",
ADD COLUMN     "orderId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
