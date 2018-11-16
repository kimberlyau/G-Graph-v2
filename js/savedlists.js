


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
            +      savedLists[i][0]
            
            +    '</button>'
            +    '<button type="button" class="btn btn-danger right" id="row' + i + '" onclick="deleteList(this)">'
            +        '<i class="fas fa-minus"></i>'
            +      '</button>'
            +  '</h5>'
            +'</div>'

            +'<div id="collapse' + i + '" class="collapse card-header" aria-labelledby="headingOne" data-parent="#accordion">'
            +  '<div class="panel-body" id="testing">'
            +   'Store: ' + savedLists[i][1];
            +    '<ul>';
            for(var j = 0; j<savedLists[i][2].length; j++){
                add+='<li>' + savedLists[i][2][j] + '</li>';
            }
            add +=
                    '</ul>'
            +        '<a href="storemap.html" class="right" onclick="shopList(this)" id="shop' + i + '"><button type="button" class="btn btn-success">'
            +        '<i class="fas fa-shopping-cart"></i>'
            +      '</button></a>'

            + '<a href="ingredients.html" class="right" onclick="shopList(this)" id="shop' + i + '"><button type="button" class="btn btn-primary">'
            +        '<i class="fas fa-edit"></i>'
            +      '</button></a>'

            +     '</div>'
            +   '</div>'
            +'</div>';
        }
        accordion.innerHTML = add;
    }

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
    localStorage.setItem("myList", JSON.stringify(savedLists[id][2]));
    console.log(savedLists[id][2]);
    localStorage.setItem("selectedStore", savedLists[id][1]);
    console.log(savedLists[id][1]);
    localStorage.setItem("listName", savedLists[id][0]);
    console.log(savedLists[id][0]);
    localStorage.setItem("fromList", id.toString());
    console.log(id.toString());
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


