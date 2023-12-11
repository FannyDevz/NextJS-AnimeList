/*
  Warnings:

  - Made the column `images` on table `collection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `collection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `collection` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `collection` MODIFY `images` VARCHAR(191) NOT NULL,
    MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `type` VARCHAR(191) NOT NULL;
