<?php declare(strict_types=1);

namespace Sg\FredConfigurator\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1611321586 extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1611321586;
    }

    public function update(Connection $connection): void
    {
        // implement update
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
