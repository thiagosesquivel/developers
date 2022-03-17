-- DropForeignKey
ALTER TABLE `developer` DROP FOREIGN KEY `developer_team_id_fkey`;

-- AlterTable
ALTER TABLE `developer` MODIFY `team_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `developer` ADD CONSTRAINT `developer_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
