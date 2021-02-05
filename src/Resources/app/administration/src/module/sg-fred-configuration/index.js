const { Module } = Shopware;

import './page/sg-fred-configuration-index';
import './page/sg-fred-configuration-detail';
import './page/sg-fred-configuration-create';
import './extension/sw-product';
import './extension/sw-product-tab-fred-configuration';

Module.register('sg-fred-configuration', {
    type: 'plugin',
    name: 'Configuration',
    title: 'Configuration',
    description: 'Manage Fred configurations',
    color: '#009bd9',

    routes: {
        index: {
            component: 'sg-fred-configuration-index',
            path: 'index'
        },
        detail: {
            component: 'sg-fred-configuration-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'sg-fred-configuration-index'
            }
        },
        create: {
            component: 'sg-fred-configuration-create',
            path: 'create',
            meta: {
                parentPath: 'sg-fred-configuration-index'
            }
        }

    },

    navigation: [{
        id: 'sg-fred-configuration',
        label: 'Fred Configuration',
        color: '#009bd9',
        path: 'sg.fred.configuration.index',
        parent: 'sw-catalogue',
        position: 110
    }],

    routeMiddleware(next, currentRoute){
        if (currentRoute.name === 'sw.product.detail') {
            currentRoute.children.push({
                name: 'sw.product.detail.fredConfiguration',
                path: '/sw/product/detail/:id/fredConfiguration',
                component: 'sw-product-detail-fred-configuration',
                meta: {
                    parentPath: "sw.product.index"
                }
            });
        }
        next(currentRoute);
    }


});

