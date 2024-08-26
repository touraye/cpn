/*
  Warnings:

  - You are about to drop the column `name` on the `Meter` table. All the data in the column will be lost.
  - Added the required column `meterName` to the `Meter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meter" DROP COLUMN "name",
ADD COLUMN     "meterName" TEXT NOT NULL;
