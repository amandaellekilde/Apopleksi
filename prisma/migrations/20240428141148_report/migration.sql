/*
  Warnings:

  - You are about to drop the column `content` on the `report` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `report` table. All the data in the column will be lost.
  - Added the required column `dia` to the `report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sys` to the `report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "report" DROP COLUMN "content",
DROP COLUMN "title",
ADD COLUMN     "dia" TEXT NOT NULL,
ADD COLUMN     "sys" TEXT NOT NULL;
