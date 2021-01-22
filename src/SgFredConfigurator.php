<?php declare(strict_types=1);

namespace Sg\FredConfigurator;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;

class SgFredConfigurator extends Plugin
{
    public function uninstall(UninstallContext $context): void
    {
        parent::uninstall($context);

        if ($context->keepUserData()) {
            return;
        }

        $connection = $this->container->get(Connection::class);
        $connection->executeUpdate('DROP TABLE IF EXISTS `sg_fred_configuration`');
        $connection->executeUpdate('DROP TABLE IF EXISTS `sg_fred_flow`');

        $connection->executeUpdate('ALTER TABLE `product` ADD COLUMN `sg_fred_configuration_id`');

    }


}
