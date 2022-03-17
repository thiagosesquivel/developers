/*
  Warnings:

  - You are about to drop the column `team_id` on the `developer` table. All the data in the column will be lost.
  - You are about to drop the `team` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `developer` DROP FOREIGN KEY `developer_team_id_fkey`;

-- AlterTable
ALTER TABLE `developer` DROP COLUMN `team_id`;

-- DropTable
DROP TABLE `team`;
