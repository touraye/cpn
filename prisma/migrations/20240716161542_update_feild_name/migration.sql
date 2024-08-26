/*
  Warnings:

  - You are about to drop the column `meterId` on the `Token` table. All the data in the column will be lost.
  - Added the required column `meterNumber` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_meterId_fkey";

-- DropIndex
DROP INDEX "Token_meterId_idx";

-- AlterTable
ALTER TABLE "Token" DROP COLUMN "meterId",
ADD COLUMN     "meterNumber" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Token_meterNumber_idx" ON "Token"("meterNumber");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_meterNumber_fkey" FOREIGN KEY ("meterNumber") REFERENCES "Meter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
