var overwriteTo;

var justSave = 2;
function switchView(num, tag1, tag2, tag3){
    //if true, first tag gets displayed
    console.log(tag2);
    if(num === 1){ //true
        tag1.style.display = "block";
        tag2.style.display = "none";
        tag3.style.display = "none"
    }
    else if (num === 2){
        tag1.style.display = "none";
        tag2.style.display = "block";
        tag3.style.display = "none"
    }
    else{
        tag1.style.display = "none";
        tag2.style.display = "none";
        tag3.style.display = "block"
    }
}

function initModal(){    //Taken from w3schools
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var saveAs = document.getElementById("saveAs");
    var saveAs2 = document.getElementById("saveAs2");


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    //Get div and button that contains overwriting a list
    var overwrite = document.getElementById("overwrite");
    var modal1 = document.getElementsByClassName("modal-body")[0];

    //Get div that contains naming the list
    var newList = document.getElementById("newList");
    var modal2 = document.getElementsByClassName("modal-body")[1];
    var modal3 = document.getElementsByClassName("modal-body")[2];




    // When the user clicks on the button, open the modal
    saveAs.onclick = function() {
        justSave = 2;
        if(localStorage.getItem('nextToggle') == 'recipe'){
            saveRecipe();
            document.getElementById("recipeOnly").href = "done.html";
        }
        else {
            modal.style.display = "block";

            //depends on whether you are shopping from a saved list or not
            if(localStorage.getItem("fromList") === ""){
                switchView(2, modal1, modal2, modal3);
                overwrite = -1;
            }
            else{
                switchView(1, modal1, modal2, modal3);
            }
        }
    }

    saveAs2.onclick = function() {
        justSave = 3;
        if(localStorage.getItem('nextToggle') == 'recipe'){
            saveRecipe();
            document.getElementById("recipeOnly2").href = "location.html";
        }
        else {
            modal.style.display = "block";

            //depends on whether you are shopping from a saved list or not
            if(localStorage.getItem("fromList") === ""){
                switchView(3, modal1, modal2, modal3);
                overwrite = -1;
            }
            else{
                switchView(1, modal1, modal2, modal3);
            }
        }
    }

    newList.onclick = function() {
        switchView(justSave, modal1, modal2, modal3);
    }

    overwrite.onclick = function() {
        overwriteTo = parseInt(localStorage.getItem("fromList"));
        switchView(justSave, modal1, modal2, modal3);
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    // Get the input in modal
    var currListName = localStorage.getItem("listName");
    var listName = document.getElementById('listName');
    if(currListName === ""){
        var lengthL = JSON.parse(localStorage.getItem("savedLists")).length
        listName.value = "List " + (lengthL+1);
    }
    else{
        listName.value = currListName;
    }

    // Get the input in modal
    var currListName = localStorage.getItem("listName");
    var listName = document.getElementById('listName2');
    if(currListName === ""){
        var lengthL = JSON.parse(localStorage.getItem("savedLists")).length
        listName.value = "List " + (lengthL+1);
    }
    else{
        listName.value = currListName;
    }
}



//structure of savedLists
//array of arrays, secondary array contains: name, store, items

function saveList(){
    var myList = JSON.parse(localStorage.getItem("myList"));
    var listName;
    if(justSave === 2){
        listName = document.getElementById('listName');
    }
    else{
        listName = document.getElementById('listName2');
    }

    if(myList === []){
        alert("There is nothing on your list please add something to it");
        return;
    }

    var selectedStore = localStorage.getItem("selectedStore");
    var newList = [];
    newList.push(listName.value);
    newList.push(selectedStore);
    newList.push(myList);
    var savedLists = JSON.parse(localStorage.getItem("savedLists"));
    console.log(overwriteTo)
    if(overwriteTo >= 0){
        savedLists[overwriteTo] = newList;

    }
    else{
        savedLists.push(newList);
    }
    console.log(savedLists);
    localStorage.setItem("savedLists", JSON.stringify(savedLists));
}


//name, then ingredients, then steps
function saveRecipe(){
    var newRecipe = [];
    newRecipe.push(localStorage.getItem("recipeName"));
    newRecipe.push(JSON.parse(localStorage.getItem("myList")));
    newRecipe.push(JSON.parse(localStorage.getItem("recipeSteps")));
    var savedRecipe = JSON.parse(localStorage.getItem("savedRecipes"));
    savedRecipe.push(newRecipe);
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipe));
    console.log(savedRecipe);
}

function displaySummary(){
    var completeName = document.getElementById("completeName");
    if(localStorage.getItem('nextToggle') == 'recipe'){
        completeName.innerText+=' recipe?';
    }
    else{
        completeName.innerText+=' list?';
    }


    var summary = document.getElementById("summary");
    // var selectedStore = localStorage.getItem("selectedStore");
    var myList = JSON.parse(localStorage.getItem("myList"));
    var isRecipe = localStorage.getItem('nextToggle') == 'recipe';
    var add = "";
    if(isRecipe){
        add+= '<h3 id="underline">'+localStorage.getItem("recipeName")+'</h3><hr>'
    }
    add +='<div>'
        +  '<div class="panel-body" id="testing">'
    // if(!isRecipe){
    //  add +=   '<b>Store:</b> ' + selectedStore
    // }
    add +=    '<div><br><b>List:</b><ul>';
        for(var j =0; j<myList.length; j++){
            add += '<li>' + myList[j] + '</li>';
        }
        add +=
                '</ul></div>';

        if(isRecipe){
            var steps = JSON.parse(localStorage.getItem("recipeSteps"));
            add+='<br><b></b>Steps:<ul>'; // TODO
            for(var j=0; j<steps.length; j++){
                add+='<li>' + steps[j] + '</li>';
            }
        }
        add+= '</div>'
        +   '</div>'
    console.log(add);
    summary.innerHTML = add;

}

(function(window, document, undefined){

      // code that should be taken care of right away

      window.onload = init;


        function init(){
          // the code to be called when the dom has loaded
          // #document has its nodes
          displaySummary();
          initModal();


        }



  })(window, document, undefined);
