/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Admin";

-- CreateTable
CREATE TABLE "AdminPannnel" (
    "id" SERIAL NOT NULL,
    "Image" TEXT NOT NULL,
    "Tital" TEXT NOT NULL,
    "About" TEXT,
    "Description" TEXT,
    "Link" TEXT,

    CONSTRAINT "AdminPannnel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminPannnel_Link_key" ON "AdminPannnel"("Link");
