Ext.application({
    name: 'viewportlayout',
    launch: function() {
        Ext.create('Ext.container.Viewport', {

                id: 'SchoolViewport',

                layout: {
                    type: 'border'
                },
                items: [
                {
                    region: 'north',
                    margins: '0 0 5 0',
                    title:'Header (north region)',
                    height: 100,
                    html:'Header information goes here'
                }, {
                    region: 'west',
                    title: 'Left bar (west region)',
                    width: 150,
                    html:'Navigation goes here'
                }, {
                    region: 'south',
                    title: 'Footer (south region)',
                    html: 'Footer Information goes here',
                    height: 100
                        
                }, {
                    region: 'east',
                    title: 'Right bar (East region)',
                    width: 150,
                    html:'Important information goes here'
                }, {
                    region: 'center',
                    title:'center content area (center region)',
                    html:'Content area'
                }]
            });

    }
});


