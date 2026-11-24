-- AlterTable
ALTER TABLE "CountryMemory" ALTER COLUMN "imageURL" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserCountryCity" ADD COLUMN     "notes" VARCHAR(1000),
ADD COLUMN     "visitedAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "CityMemory" (
    "id" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,
    "title" TEXT,
    "description" VARCHAR(500),
    "imageURL" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CityMemory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CityMemory" ADD CONSTRAINT "CityMemory_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "UserCountryCity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
