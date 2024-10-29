/*
  Warnings:

  - You are about to drop the column `elapsedTime` on the `Zen` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Zen" DROP COLUMN "elapsedTime",
ADD COLUMN     "pausedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
