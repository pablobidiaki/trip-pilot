-- AlterTable
ALTER TABLE "User" ADD COLUMN     "countriesWishlist" TEXT[] DEFAULT ARRAY[]::TEXT[];
