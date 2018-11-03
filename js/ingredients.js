let ingredients = ["bacon", "chicken", "eggs", "milk", "apples", "broccoli", "lettuce" ];
let show = [];

for(var i = 0; i<ingredients.length; i++){
  show.push(false);
}

function initResults(){
  var ul = document.getElementById("myUL");
  for(var i = 0; i<ingredients.length; i++){
    var addToList = 
    '<li>'
    + '<a onclick="putInInput(this)">'
    + '<b>'
    + ingredients[i]
    + '</b>'
    + '</a>'
    + '</li>';
    ul.innerHTML += addToList;
  }
}

function putInInput(elem){
  var search = document.getElementById("search");
  var show = $(elem).text();
  search.value = show;
}

function updateResults(){
  var search = document.getElementById("search");
  var index = ingredients.indexOf(search.value)
  if(index > -1){
    show[index] = true;
    displayIngredients();
  }
  
  
}


function displayIngredients(){
  var list = document.getElementById("list");
  list.innerHTML = "";
  if(show[i]===true){
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
}

function filterResults(){
  var input, filter, ul, li, a, i;

  // Text input
  input = document.getElementById("search");
  filter = input.value.toUpperCase();

  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  // Clear if empty
  if (filter.length == 0) {
    for (i = 0; i < li.length; i++) {
          li[i].style.display = "none";
        }
    } 
  else {
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        // Have to remove <br>, bold tags
        if (a.innerHTML.replace('<br>', '').replace('<b>', '').replace('</b>', '').toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
  }

}

(function(window, document, undefined){

    // code that should be taken care of right away
    
    window.onload = init;

    
      function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        displayIngredients();
        initResults();

        

      }

      
    
})(window, document, undefined);



