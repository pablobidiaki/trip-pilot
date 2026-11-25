/*
  Warnings:

  - You are about to drop the column `visitedAt` on the `UserCountry` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `UserCountryCity` table. All the data in the column will be lost.
  - You are about to drop the `CountryMemory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CountryMemory" DROP CONSTRAINT "CountryMemory_userCountryId_fkey";

-- AlterTable
ALTER TABLE "CityMemory" ALTER COLUMN "description" SET DATA TYPE VARCHAR(1000);

-- AlterTable
ALTER TABLE "UserCountry" DROP COLUMN "visitedAt";

-- AlterTable
ALTER TABLE "UserCountryCity" DROP COLUMN "image";

-- DropTable
DROP TABLE "CountryMemory";
