Ext.application({
    name: 'MyGrid',
	requires: ['Ext.window.MessageBox'],
    launch: function() {
	
		Ext.define('Book', {
		extend: 'Ext.data.Model',
		fields: [
		{name: 'book'},
		{name: 'topic', type: 'string'},
		{name: 'version', type: 'string'},
		{name: 'released', type: 'boolean'},
		{name: 'releasedDate', type: 'date'},
		{name: 'value', type: 'number'}
		]
		});

		var bookStore = Ext.create('Ext.data.ArrayStore', {
		model: 'Book',
		data: [
		['Ext JS 4: First Look','Ext JS','4',false,null,0],
		['Learning Ext JS 3.2','Ext JS','3.2',true,'2010/10/01',40.49],
		['Ext JS 3.0 Cookbook','Ext JS','3',true,'2009/10/01',44.99],
		['Learning Ext JS','Ext JS','2.x',true,'2008/11/01',35.99],
		]
		});
		
		Ext.create('Ext.grid.Panel', {
		store: bookStore,
		width: 550,
		title: 'Ext JS Books',
		renderTo: Ext.getBody(),
		selModel: Ext.create('Ext.selection.CheckboxModel'), //1
		columns: [
		Ext.create('Ext.grid.RowNumberer'), //2
		{
		text: 'Book',//3
		flex: 1,
		dataIndex: 'book'
		},{		
		text: 'Category', //4
		xtype:'templatecolumn',
		width: 100,
		tpl: '{topic} {version}'
		},{
		text: 'Already Released?', //5
		xtype: 'booleancolumn',
		width: 100,
		dataIndex: 'released',
		trueText: 'Yes',
		falseText: 'No'
		},{
		text: 'Released Date', //6
		xtype:'datecolumn',
		width: 100,
		dataIndex: 'releasedDate',
		format:'m-Y'
		},{
		text: 'Price', //7
		xtype:'numbercolumn',
		width: 80,
		dataIndex: 'value',
		renderer: Ext.util.Format.usMoney
		},{
		xtype:'actioncolumn', //8
		width:50,
		items: [{
		icon: 'images/edit.png',
		tooltip: 'Edit',
		handler: function(grid, rowIndex, colIndex) {
		var rec = grid.getStore().getAt(rowIndex);
		Ext.MessageBox.alert('Edit',rec.get('book'));
		}
		},{
		icon: 'images/delete.png',
		tooltip: 'Delete',
		handler: function(grid, rowIndex, colIndex) {
		var rec = grid.getStore().getAt(rowIndex);
		Ext.MessageBox.alert('Delete', 'Are you sure you want to delete ' + rec.get('book') +  '?');
		}
		}]
		}]
		});
		
		
		console.log("The third store item is " + bookStore.data.items[2].data.book);
		
		
    }
})




