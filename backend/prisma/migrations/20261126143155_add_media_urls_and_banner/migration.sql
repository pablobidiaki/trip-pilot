-- AlterTable
ALTER TABLE "CityMemory" ADD COLUMN     "mediaURLs" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "UserCountryCity" ADD COLUMN     "bannerURL" TEXT;
