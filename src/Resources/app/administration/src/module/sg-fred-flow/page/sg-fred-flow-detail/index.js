import template from './sg-fred-flow-detail.html.twig';
import FlowChart from 'flowchart-vue';

import './sg-fred-flow-detail.scss';

const { Component, Context } = Shopware;

Component.register('sg-fred-flow-detail', {
    template,

    components: {
        FlowChart
    },

    inject: [
        'repositoryFactory'
    ],

    data() {
        return {
            isLoading: false,
            isSaveSuccessful: false,
            flow: null,
            nodes: [
                // Basic fields
                {id: 1, x: 140, y: 270, name: 'Start', type: 'start'},
                // You can add any generic fields to node, for example: description
                // It will be passed to @save, @editnode
                {id: 2, x: 540, y: 270, name: 'End', type: 'end', description: 'Im here'},
            ],
            connections: [
                {
                    source: {id: 1, position: 'right'},
                    destination: {id: 2, position: 'left'},
                    id: 1,
                    type: 'pass',
                },
            ],

        }
    },

    computed: {
      flowRepository() {
          return this.repositoryFactory.create('sg_fred_flow')
      }
    },

    created() {
      this.loadEntityData();
        console.log("----------------------------------------------------------------------");
    },

    methods: {

        createdComponent() {
            this.loadEntityData();
            console.log("----------------------------------------------------------------------");
        },

        loadEntityData() {
            console.log("----------------------------------------------------------------------");
            this.isLoading = true;
            this.flowRepository.get(
                this.$route.params.id,
                Context.api
            ).then(entity=>{
               this.flow = entity;
               this.isLoading = false;
            }).catch(exception =>{
                this.isLoading = false;
                console.log('exception', exception);
            });
        },

        saveFinish() {
           this.isSaveSuccessful = false;
       },

        /*onCancel() {
          this.$router.push({name: "sg.fred.flow.index"});
          console.log("Cancel");
        },*/

        onSave() {
            //console.log('save that Flow');
            this.isLoading = true;
            this.isSaveSuccessful = false;

            return this.flowRepository()
                .save(this.flow, Context.api )
                .then(()=> {
                    this.isLoading = false;
                    this.isSaveSuccessful = true;
                })
                .catch((exception) => {
                    console.log('exception', exception);
                })
        },

        handleDblClick(position) {
            this.$refs.chart.add({
                id: +new Date(),
                x: position.x,
                y: position.y,
                name: 'New',
                type: 'operation',
                approvers: [],
            });
        },
    }
});
