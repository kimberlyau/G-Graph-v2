var listFood = JSON.parse(localStorage.getItem("myList"));

function showIngredientsList() {
    var showIngred = document.getElementById("testing");
    //var ul = document.getElementById("ingredLists");
    showIngred.innerHTML += "<ul>";
    for(var i = 0; i<listFood.length; i++){
        var foodBullets = document.createElement("LI");
        foodBullets.innerHTML = listFood[i];
        showIngred.appendChild(foodBullets);
        console.log(showIngred.innerHTML);

        //var t = document.createTextNode(listFood[i]);
        //foodBullets.appendChild(t);
        //document.body.appendChild(foodBullets);
    }
    showIngred.innerHTML += "</ul>";

}
//console.log(showIngred);
(function(window, document, undefined){

    // code that should be taken care of right away
    
    window.onload = init;
    
      function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        showIngredientsList();

      }
    
    })(window, document, undefined);

function deleteList() {
    var ul = document.getElementById("ingredLists");
    for(var i = 0; i<listFood.length; i++){
        var addToList = '<div>'
        + '<button type="button" class="btn btn-light" disabled>'
        + listFood[i]
        + '</button>'
        + ' <button id="'
        + i
        + '" type="button" class="btn btn-danger right" onclick="deleteItem(this)">'
        + '<i class="fas fa-minus"></i>'
        + '</button>'
        + '</div>';
        ul.innerHTML += addToList;
      }
}

function deleteItem(elem){
    var getItem = $(elem).attr('id');
    var index = myList.indexOf(getItem);
    myList.splice(index, 1);
    show[index]=false;
    displayIngredients();
  }