/*
  Warnings:

  - You are about to drop the column `visitedAt` on the `UserCountryCity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CityMemory" ADD COLUMN     "visitedAt" TEXT;

-- AlterTable
ALTER TABLE "UserCountryCity" DROP COLUMN "visitedAt";
