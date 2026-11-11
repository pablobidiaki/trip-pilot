-- CreateTable
CREATE TABLE "UserCountry" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "countryName" TEXT NOT NULL,
    "visitedAt" TIMESTAMP(3),
    "notes" VARCHAR(500),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserCountry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCountryCity" (
    "id" TEXT NOT NULL,
    "userCountryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UserCountryCity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CountryMemory" (
    "id" TEXT NOT NULL,
    "userCountryId" TEXT NOT NULL,
    "title" TEXT,
    "description" VARCHAR(500),
    "imageURL" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CountryMemory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserCountry_countryCode_idx" ON "UserCountry"("countryCode");

-- CreateIndex
CREATE UNIQUE INDEX "UserCountry_userId_countryCode_key" ON "UserCountry"("userId", "countryCode");

-- CreateIndex
CREATE UNIQUE INDEX "UserCountryCity_userCountryId_name_key" ON "UserCountryCity"("userCountryId", "name");

-- AddForeignKey
ALTER TABLE "UserCountry" ADD CONSTRAINT "UserCountry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCountryCity" ADD CONSTRAINT "UserCountryCity_userCountryId_fkey" FOREIGN KEY ("userCountryId") REFERENCES "UserCountry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CountryMemory" ADD CONSTRAINT "CountryMemory_userCountryId_fkey" FOREIGN KEY ("userCountryId") REFERENCES "UserCountry"("id") ON DELETE CASCADE ON UPDATE CASCADE;
