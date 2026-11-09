/*
  Warnings:

  - Made the column `isPublicAccount` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userName` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "biography" TEXT,
ALTER COLUMN "isPublicAccount" SET NOT NULL,
ALTER COLUMN "userName" SET NOT NULL;
