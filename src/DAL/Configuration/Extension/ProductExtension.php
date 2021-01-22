<?php declare(strict_types=1);

namespace Sg\FredConfigurator\DAL\Configuration\Extension;


use Sg\FredConfigurator\DAL\Configuration\ConfigurationDefinition;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityExtension;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Inherited;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;

class ProductExtension extends EntityExtension
{
    public function extendFields(FieldCollection $collection): void
    {
        $collection->add(
            (new FkField('sg_fred_configuration_id', 'fredConfigurationId', ConfigurationDefinition::class))->addFlags(new Inherited())
        );

        $collection->add(
        (new ManyToOneAssociationField('fredConfiguration', 'sg_fred_configuration_id', ConfigurationDefinition::class, 'id'))
        );
    }

    public function getDefinitionClass(): string
    {
        return ProductDefinition::class;
    }

}
