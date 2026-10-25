/*
  Warnings:

  - Added the required column `continent` to the `Destinations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `continent` to the `ReadyGuides` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Destinations" ADD COLUMN     "continent" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ReadyGuides" ADD COLUMN     "continent" TEXT NOT NULL;
