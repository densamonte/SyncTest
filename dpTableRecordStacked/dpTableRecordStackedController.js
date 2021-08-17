({
    //for other cases like when columns is given from the user
	onTableRowAction : function(component, event, helper) {
        var tableName = null;
        var actionName = event.getSource().get("v.name");
        helper.invokeTableRowAction(component, tableName, actionName);
	},
    handleMenuSelect : function(component, event, helper) {
        var tableName = null;
        var actionName = event.getParam("value"); //selectedMenuItemValue        
        helper.invokeTableRowAction(component, tableName, actionName);
	},
    
})