/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "picture" TEXT,
ADD COLUMN     "socialHandles" TEXT[],
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Zen" ADD COLUMN     "elapsedTime" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
