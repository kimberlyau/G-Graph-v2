

(function(window, document, undefined){

    // code that should be taken care of right away
    
    window.onload = init;
    
      function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        let ingredients = ["bacon", "eggs", "milk"];

        var list = document.getElementById("list");
        for(var i = 0; i<ingredients.length; i++){
            var addToList = '<div>'
            + '<button type="button" class="btn btn-light" disabled>'
            + ingredients[i]
            + '</button>'
            + ' <button type="button" class="btn btn-danger">'
            + '<i class="fas fa-minus"></i>'
            + '</button>'
            + '</div>';
            list.innerHTML += addToList;
        }

      }
    
    })(window, document, undefined);
