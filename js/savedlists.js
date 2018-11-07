
function saveList(){
    var myList = JSON.parse(localStorage.getItem("myList"));
    if(myList === []){ 
        alert("There is nothing on your list please add something to it"); 
        return;
    }
    var savedLists = JSON.parse(localStorage.getItem("savedLists"));
    savedLists.push(myList);
    localStorage.setItem("savedLists", JSON.stringify(savedLists));
}

function showSavedList() {

    var savedLists = JSON.parse(localStorage.getItem("savedLists"));
    var accordion = document.getElementById("accordion");
    var add = "";

    if(savedLists.length == 0){
        console.log("here");
        accordion.innerHTML = '<div> There is nothing to display here, please create a list :) </div>';
    }

    else{
        for(var i = 0; i<savedLists.length; i++){
            add +=
            '<div class="card template">'
            + '<div class="card-header" id="headingOne">'
            + '<h5 class="mb-0">'
            +   '<button class="btn btn-link" data-toggle="collapse" data-target="#collapse'
            + i + '" aria-expanded="true"'
            +      'aria-controls="collapseOne">'
            +      "List " + (i+1)
            +      '<button type="button" class="btn btn-danger right" id="row' + i + '" onclick="deleteList(this)">'
            +        '<i class="fas fa-minus"></i>'
            +      '</button>'
            +      '<a href="storemap.html"  onclick="shopList(this)"><button type="button" class="btn btn-success right" id="shop' + i + '">'
            +        '<i class="fas fa-shopping-cart"></i>'
            +      '</button></a>'
            +    '</button>'
            +  '</h5>'
            +'</div>'

            +'<div id="collapse' + i + '" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">'
            +  '<div class="panel-body" id="testing">'
            +    '<ul>';
            for(var j =0; j<savedLists[i].length; j++){
                add+='<li>' + savedLists[i][j] + '</li>';
            }
            add +=
                    '</ul>'
            +     '</div>'
            +   '</div>'
            +'</div>';
        }
        accordion.innerHTML = add;
    }
        // var showIngred = document.getElementById("testing");
        // showIngred.innerHTML = "";
        // showIngred.innerHTML += "<ul>";
        // for (var i = 0; i < listFood.length; i++) {
        //     var foodBullets = document.createElement("li");
        //     foodBullets.innerHTML = listFood[i];
        //     showIngred.appendChild(foodBullets);
        // }
        // showIngred.innerHTML += "</ul>";
    }

function deleteList(elem){
    var getList = $(elem).attr('id');
    var id = parseInt(getList.substr(3, getList.length));
    console.log(id);
    var savedLists = JSON.parse(localStorage.getItem("savedLists"));
    //savedLists = savedLists.splice(id, 1);
    var newList = [];
    for(var i = 0; i<savedLists.length; i++){
        if(i!=id){ newList.push(savedLists[i]);}
    }
    localStorage.setItem("savedLists", JSON.stringify(newList));
    showSavedList();

}

function shopList(elem){
    var getList = $(elem).attr('id');
    var id = parseInt(getList.substr(4, getList.length));
    var savedLists = JSON.parse(localStorage.getItem("savedLists"));
    localStorage.setItem("myList", JSON.stringify(savedLists[id]));
}




// function accordionIngredients() {
//     var showIngred = document.getElementById("dynamicAcc");
//     var $template = $(".template");

//     var hash = 2;
//     $("#dynamicAcc").on("click", function () {
//         var $newPanel = $template.clone();
//         $newPanel.find(".collapse").removeClass("in");
//         $newPanel.find(".accordion-toggle").attr("href", "#" + (++hash))
//             .text("Dynamic panel #" + hash);
//         $newPanel.find(".panel-collapse").attr("id", hash);
//         $("#accordion").append($newPanel.fadeIn());
//     });
// }

var saveAccordion;
function saveAcc() {
    localStorage.setItem('saveAccordion', saveAccordion);
}


