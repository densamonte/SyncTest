({
    doInit : function(component, event, helper) {
        var record = component.get("v.record");
        var column = component.get("v.column");
        if( record==undefined || column==undefined ) {
            return;
        }
        this.setFieldType(component);
        this.setFieldValue(component);
    },
    
    setFieldValue : function(component) {
        var record = component.get("v.record");
        var column = component.get("v.column");
        ///console.log('column>' + JSON.stringify(column));
        ///console.log('record>' + JSON.stringify(record));
        
        var fieldName = column.fieldName;
        var fieldValue = record[fieldName];
        if(component.get("v.isNumber") && component.get("v.defValueWhenBlankForNumber") && (fieldValue==null || fieldValue=='')) {
            fieldValue = component.get("v.defValueWhenBlankForNumber");
        }
        component.set("v.fieldValue", fieldValue);    
        ///console.log('fieldValue>' + fieldValue);
        
        //cross reference column
        if(column.type=='url') {
            var fieldLinkLabel = record[column.typeAttributes.label.fieldName];
            component.set("v.fieldLinkLabel", fieldLinkLabel);
            ///console.log('>fieldValue>' + fieldValue + ', fieldLinkLabel>'+fieldLinkLabel);
        }
    },
    
    setFieldType : function(component) {
        var column = component.get("v.column");
        if(column.type == 'date') {
            component.set("v.isDate", true);
        }
        else if(column.type == 'datetime') {
            component.set("v.isDateTime", true);
        }
        else if(column.type == 'time') {
            component.set("v.isTime", true);
        }
        else if(column.type == 'email') {
            component.set("v.isEmail", true);
        }
        else if(column.type == 'phone') {
            component.set("v.isPhone", true);
        }
        else if(column.type == 'url') {
            component.set("v.isURL", true);
        }
        else if(column.type == 'percent') {
            component.set("v.isPercent", true);
        }
        else if(column.type == 'currency') {
            component.set("v.isCurrency", true);
        }
        else if(column.type == 'double' || column.type == 'integer' 
                || column.type == 'number') {
            component.set("v.isNumber", true);
        }
        else if(column.type == 'boolean') {
            component.set("v.isBoolean", true);
        }
        else if( column.type == 'url' ) {
            component.set("v.isURL", true);
        }
        else if(column.type == 'address') {
            component.set("v.isAddress", true);
        }
        //otherwise, is text
        else {
            component.set("v.isText", true);    
        }
    },
    
})