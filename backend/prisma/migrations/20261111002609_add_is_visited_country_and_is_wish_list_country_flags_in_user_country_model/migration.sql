/*
  Warnings:

  - You are about to drop the column `countriesVisited` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `countriesWishlist` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "countriesVisited",
DROP COLUMN "countriesWishlist";

-- AlterTable
ALTER TABLE "UserCountry" ADD COLUMN     "isVisitedCountry" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isWishListCountry" BOOLEAN NOT NULL DEFAULT false;
