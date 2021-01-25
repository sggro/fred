import template from './sg-fred-flow-detail.html.twig';

const { Component, Context } = Shopware;

Component.register('sg-fred-flow-detail', {
    template,

    inject: [
        'repositoryFactory'
    ],

    data() {
        return {
            isLoading: false,
            isSaveSuccessful: false,
            flow: null

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
        }
    }
});
