-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Itinerary" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "departure" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "countryOrigin" TEXT NOT NULL,
    "countryDestination" TEXT NOT NULL,
    "countryOriginFlagURL" TEXT NOT NULL,
    "countryDestinationFlagURL" TEXT NOT NULL,
    "travelType" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "days" INTEGER NOT NULL,
    "travelers" INTEGER NOT NULL,
    "budgetTotal" DOUBLE PRECISION NOT NULL,
    "itinerary" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Itinerary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReadyGuides" (
    "id" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "travelType" TEXT NOT NULL,
    "bestTime" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "currenty" TEXT NOT NULL,
    "overviewResume" TEXT NOT NULL,
    "cities" TEXT[],
    "days" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "overview" JSONB NOT NULL,
    "itinerary" JSONB NOT NULL,
    "accommodations" JSONB NOT NULL,
    "usefulInformation" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReadyGuides_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Destinations" (
    "id" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "bannerURL" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "travelType" TEXT NOT NULL,
    "bestTime" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "currenty" TEXT NOT NULL,
    "weather" TEXT NOT NULL,
    "dayReccomended" INTEGER NOT NULL,
    "usefulInformation" JSONB NOT NULL,
    "whatToDo" JSONB NOT NULL,
    "attractions" JSONB NOT NULL,
    "averageCost" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Destinations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavedDestinations" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SavedDestinations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavedReadyGuides" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "readyGuideId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SavedReadyGuides_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SavedDestinations_userId_destinationId_key" ON "SavedDestinations"("userId", "destinationId");

-- CreateIndex
CREATE UNIQUE INDEX "SavedReadyGuides_userId_readyGuideId_key" ON "SavedReadyGuides"("userId", "readyGuideId");

-- AddForeignKey
ALTER TABLE "Itinerary" ADD CONSTRAINT "Itinerary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedDestinations" ADD CONSTRAINT "SavedDestinations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedDestinations" ADD CONSTRAINT "SavedDestinations_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destinations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedReadyGuides" ADD CONSTRAINT "SavedReadyGuides_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedReadyGuides" ADD CONSTRAINT "SavedReadyGuides_readyGuideId_fkey" FOREIGN KEY ("readyGuideId") REFERENCES "ReadyGuides"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
