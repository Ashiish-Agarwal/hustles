-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "Tital" TEXT NOT NULL,
    "About" TEXT,
    "Description" TEXT NOT NULL,
    "Link" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_Link_key" ON "Admin"("Link");
