$(document).ready(function() {

    $('.event-result-table').tableFilter({
    
        //input : "input[type=search]", Default element
        
        trigger : {
        
            event 	: "keyup",
            //element : "button[name=btn-filtro]"
        },

        //timeout: 80,

        sort : true,

        //caseSensitive : false, Default

        callback : function() { /* Callback após o filtro */

        },
        
        notFoundElement : ".not-found"
    });

});