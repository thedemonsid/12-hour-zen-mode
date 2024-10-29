/*
  Warnings:

  - You are about to drop the column `userId` on the `Task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_userId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "userId",
ADD COLUMN     "zenId" INTEGER;

-- CreateTable
CREATE TABLE "Zen" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "preZen" TEXT,
    "postZen" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Zen_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Zen" ADD CONSTRAINT "Zen_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_zenId_fkey" FOREIGN KEY ("zenId") REFERENCES "Zen"("id") ON DELETE SET NULL ON UPDATE CASCADE;
