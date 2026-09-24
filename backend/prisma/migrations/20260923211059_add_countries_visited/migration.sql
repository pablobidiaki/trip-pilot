-- AlterTable
ALTER TABLE "User" ADD COLUMN     "countriesVisited" TEXT[] DEFAULT ARRAY[]::TEXT[];
