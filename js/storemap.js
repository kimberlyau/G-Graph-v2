function togglePin (elmnt, index) {
  var thisID = $(elmnt).parent().find('label').text();
  var changedColor = "red";

  if (document.getElementById("item" + index).style.color != changedColor) {
    document.getElementById("item" + index).style.color = changedColor;
  } else {
    document.getElementById("item" + index).style.color = "black";
  }
}

(function(window, document, undefined){

    window.onload = init;

      function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        var redirect = document.getElementById("redirect");
        if(localStorage.getItem('nextToggle') == "recipe"
          && localStorage.getItem("fromList") != ""){
          redirect.href = "lists.html";
        }
        else{
          redirect.href = "email.html";
        }

        let ingredients = JSON.parse(localStorage.getItem('myList'));

        var list = document.getElementById("list");
        for(var i = 0; i<ingredients.length; i++){
          var rnum = Math.floor(Math.random() * 20) + 1;
          var multDash = 25;
          var spacer = '-'.repeat(multDash);
          var quant = 'Pound';

          if (ingredients[i] == 'milk' || ingredients[i] == 'bacon') {
            quant = 'Quantity';
          }

          var addToList = '<div class="form-check">'
          + `<input type="checkbox" class="form-check-input" id="materialUnchecked" onchange="togglePin(this, ${i + 1})">`
          + ingredients[i]
          + '   |   $'
          + Math.floor(Math.random() * 5)
          + '.'
          + (Math.floor(Math.random() * 90) + 10)
          + ' Per ' + quant + '<br>'
          + spacer
          + ' <i>Aisle '
          + rnum
          + '</i>'
          + '</div>'
          list.innerHTML += addToList;
        }

      }

    })(window, document, undefined);
