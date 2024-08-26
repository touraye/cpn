/*
  Warnings:

  - You are about to drop the column `meterNumber` on the `Token` table. All the data in the column will be lost.
  - Added the required column `meterId` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_meterNumber_fkey";

-- DropIndex
DROP INDEX "Token_meterNumber_idx";

-- AlterTable
ALTER TABLE "Token" DROP COLUMN "meterNumber",
ADD COLUMN     "meterId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Token_meterId_idx" ON "Token"("meterId");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_meterId_fkey" FOREIGN KEY ("meterId") REFERENCES "Meter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
