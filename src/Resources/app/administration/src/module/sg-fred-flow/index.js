const { Module } = Shopware;

import './page/sg-fred-flow-index';
import './page/sg-fred-flow-detail';
import './page/sg-fred-flow-create';

Module.register('sg-fred-flow', {
    type: 'plugin',
    name: 'flow',
    title: 'Flow',
    description: 'Manage Fred configuration flows',
    color: '#009bd9',

    routes: {
        index: {
            component: 'sg-fred-flow-index',
            path: 'index'
        },
        detail: {
            component: 'sg-fred-flow-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'sg-fred-flow-index'
            }
        },
        create: {
            component: 'sg-fred-flow-create',
            path: 'create',
            meta: {
                parentPath: 'sg-fred-flow-index'
            }
        }

    },

    navigation: [{
        id: 'sg-fred-flow',
        label: 'Fred Flow',
        color: '#009bd9',
        path: 'sg.fred.flow.index',
        parent: 'sw-catalogue',
        position: 100
    }]

});
