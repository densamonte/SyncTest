({
	createMobileComp: function (component, event, helper) {
        
        if( component.find("uiMessage") ) {
            component.find("uiMessage").clear();
        }
        
        var records = component.get("v.records");
        if(records && records.length>0) {
            var mobileCompName = component.get("v.mobileCompName");            
            if(mobileCompName) {
                var records = component.get("v.records");
                var columns = component.get("v.columns");
                var title = component.get("v.title");
                $A.createComponent("c:" + mobileCompName, {records: records, columns: columns, title: title},
                                   function(newComp, status, errorMessage) {
                                       if (status === "SUCCESS" && component.isValid()) {
                                          component.set("v.mobileComp", newComp);
                                       }
                                       else if(status === "ERROR") {
                                           var err = "Error occurred while creating " + mobileCompName 
                                               				+ " component. Detail: " + errorMessage;
                                           console.log("::::" + err);
                                           if( component.find("uiMessage") ) {
                                               component.find("uiMessage").showError(err);
                                           }
                                           else {
                                               alert(err);
                                           }
                                       }
                                   });
            }
        }
        
    },
})