/*
  Warnings:

  - Added the required column `name` to the `Meter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meter" ADD COLUMN     "name" TEXT NOT NULL;
