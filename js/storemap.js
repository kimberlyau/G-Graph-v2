(function(window, document, undefined){

    window.onload = init;

      function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        let ingredients = ["bacon", "eggs", "milk","yogurt"];

        var list = document.getElementById("list");
        for(var i = 0; i<ingredients.length; i++){
            var addToList = '<div>'
            + '<div class="form-check">'
            + '<input type="checkbox" class="form-check-input" id="materialUnchecked">'
            + '<label class="form-check-label" for="materialUnchecked">'
            + ingredients[i]
            + '</label>'
            + '</div>'
            + '<button type="button" class="btn btn-light" disabled>'
            + '</div>';
            list.innerHTML += addToList;
        }

      }

    })(window, document, undefined);
