<?php declare(strict_types=1);

namespace Sg\FredConfigurator\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1611321649ProductExtension extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1611321649;
    }

    public function update(Connection $connection): void
    {
        $connection->executeUpdate('
            ALTER TABLE `product`
                    ADD COLUMN `sg_fred_configuration_id` BINARY(16) NULL
                    ');
}

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
