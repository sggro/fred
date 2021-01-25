<?php declare(strict_types=1);

namespace Sg\FredConfigurator\DAL\Configuration;

use Sg\FredConfigurator\DAL\Flow\FlowDefinition;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\CascadeDelete;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\OneToManyAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\OneToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;

class ConfigurationDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'sg_fred_configuration';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new PrimaryKey(), new Required()),
            (new StringField('name', 'name'))->addFlags(new Required()),
            new FkField('sg_fred_flow_id', 'flowId', FlowDefinition::class),
            new OneToOneAssociationField('flow', 'sg_fred_flow_id', 'id', FlowDefinition::class, false),
            (new OneToManyAssociationField('products', ProductDefinition::class, 'sg_fred_configuration_id', 'id'))->addFlags(new CascadeDelete())
        ]);
    }
}
