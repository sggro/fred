<?php declare(strict_types=1);

namespace Sg\FredConfigurator\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1611065185 extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1611065185;
    }

    public function update(Connection $connection): void
    {
        $connection->executeUpdate(
            'CREATE TABLE IF NOT EXISTS `sg_fred_flow` (
                  `id` BINARY(16) NOT NULL,
                  `name` VARCHAR(255) NOT NULL,
                  `created_at` DATETIME(3) NOT NULL,
                  `updated_at` DATETIME(3) NULL,
                  PRIMARY KEY(`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ');

        $connection->executeUpdate('CREATE TABLE IF NOT EXISTS `sg_fred_configuration` (
        `id` BINARY(16) NOT NULL,
        `sg_fred_flow_id` BINARY(16) NULL,
        `name` VARCHAR(255) NOT NULL,
        `created_at` DATETIME(3) NOT NULL,
        `updated_at` DATETIME(3) NULL,
        PRIMARY KEY(`id`),
        CONSTRAINT `fk.sg_fred_configuration.sg_fred_flow_id` FOREIGN KEY (`sg_fred_flow_id`)
        REFERENCES `sg_fred_flow` (`id`)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
          ');
    }

    public function updateDestructive(Connection $connection): void
    {
    }
}
