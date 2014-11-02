Ext.application({
    name: 'MyGrid',
    launch: function() {
        Ext.define('User', {
            extend: 'Ext.data.Model',
            fields: [ 'name', 'email', 'phone', 'birthDate' ]
        });

        var today = new Date();

        var userStore = Ext.create('Ext.data.Store', {
            model: 'User',
            data: [
                { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224', birthDate: today},
                { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' , birthDate: today},
                { name: 'Homer', email: 'home@simpsons.com', phone: '555-222-1244' , birthDate: today},
                { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' , birthDate: today}
            ]
        });

        Ext.create('Ext.grid.Panel', {
            renderTo: Ext.getBody(),
            store: userStore,
            width: 600,
            height: 200,
            title: 'Application Users',
            columns: [
                {
                    text: 'Name',
                    width: 100,
                    sortable: false,
                    hideable: false,
                    dataIndex: 'name'
                },
                {
                    text: 'Email Address',
                    width: 150,
                    dataIndex: 'email',
                    editor: {
                        allowBlank: false
                    }
                },
                {
                    text: 'Phone Number',
                    flex: 1,
                    dataIndex: 'phone'
                },
                {
                    text: 'Birth Date',
                    dataIndex: 'birthDate',
                    // format the date using a renderer from the Ext.util.Format class
                    renderer: Ext.util.Format.dateRenderer('m/d/Y')
                }

            ]
        });



        console.log("The third user is " + userStore.data.items[2].data.name);
        console.log("Birthdate is " + userStore.data.items[2].data.birthDate);

    }
})




