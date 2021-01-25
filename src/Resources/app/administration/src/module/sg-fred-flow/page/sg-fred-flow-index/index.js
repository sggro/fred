import template from './sg-fred-flow-index.html.twig';

const { Component, Data, Context } = Shopware;
const { Criteria } = Data;

Component.register('sg-fred-flow-index', {
   template,

    inject: [
        'repositoryFactory'
    ],

    data() {
       return {
           flows: null,
           repository: null
       }
    },

    created() {
       this.createdComponent();
    },

    computed: {
        columns() {
            return [{
                property: 'name',
                dataIndex: 'name',
                label: 'Name',
                routerLink: 'sg.fred.flow.detail',
                inlineEdit: 'string',
                allowResize: true,
                primary: true
            }, {
                property: 'createdAt',
                dataIndex: 'createdAt',
                label: 'Created At',
                allowResize: true
            }];
        }
    },

    methods: {
      createdComponent() {
          this.repository = this.repositoryFactory.create('sg_fred_flow');

          this.repository
              .search(new Criteria(), Context.api)
              .then((result) => {
                  this.flows = result;
              });

      },
    }
});
