const { Component, Context } = Shopware;

Component.extend('sg-fred-configuration-create', 'sg-fred-configuration-detail', {

    methods: {

        loadEntityData() {
            this.configuration = this.configurationRepository.create(Context.api);
            console.log('configuration', configuration);
        },

        onSave() {
            console.log('save that configuration');
            this.isLoading = true;
            this.isSaveSuccessful = false;

            return this.configurationRepository
                .save(this.configuration, Context.api )
                .then(()=> {
                    this.isLoading = false;
                    this.isSaveSuccessful = true;
                    this.$router.push({ name: 'sg.fred.configuration.detail', params: { id: this.configuration.id } });
                })
                .catch((exception) => {
                    console.log('exception', exception);
                })
        }
    }
});
