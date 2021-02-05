import template from './sg-fred-configuration-detail.html.twig';

const { Component, Context } = Shopware;

Component.register('sg-fred-configuration-detail', {
    template,

    inject: [
        'repositoryFactory'
    ],

    data() {
        return {
            isLoading: false,
            isSaveSuccessful: false,
            configuration: null

        }
    },

    computed: {
        configurationRepository() {
            return this.repositoryFactory.create('sg_fred_configuration')
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
            this.configurationRepository.get(
                this.$route.params.id,
                Context.api
            ).then(entity=>{
                this.configuration = entity;
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
          this.$router.push({name: "sg.fred.configuration.index"});
          console.log("Cancel");
        },*/

        onSave() {
            console.log('save that configuration*****************************************************');
            this.isLoading = true;
            this.isSaveSuccessful = false;

            return this.configurationRepository()
                .save(this.configuration, Context.api )
                .then(()=> {
                    this.isLoading = false;
                    this.isSaveSuccessful = true;
                    console.log('CONFIG&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
                })
                .catch((exception) => {
                    console.log('exception', exception);
                })
        }
    }
});
