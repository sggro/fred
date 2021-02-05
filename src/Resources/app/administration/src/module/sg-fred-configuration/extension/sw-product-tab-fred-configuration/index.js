import template from './sw-product-tab-fred-configuration.html.twig';

const { mapGetters, mapState } = Shopware.Component.getComponentHelper();
const { Component } = Shopware;

Component.register('sw-product-detail-fred-configuration',{
    template,

    metaInfo() {
        return {
            title: "Fred Configuration"
        };
    },

    computed: {
        ...mapState('swProductDetail', [
            'product'
        ]),
    }
});
