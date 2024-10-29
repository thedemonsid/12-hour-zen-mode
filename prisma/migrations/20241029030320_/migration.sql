/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Zen` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Zen_userId_key" ON "Zen"("userId");
