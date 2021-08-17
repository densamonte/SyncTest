({
	invokeTableRowAction : function(component, tableName, actionName) {
        var tableRow = component.get("v.record");
		var rowActionEvt = component.getEvent("tableRowAction");
        rowActionEvt.setParams({
            tableName: tableName,
            actionName: actionName,
            tableRow: tableRow
        });
        rowActionEvt.fire();
	},
})