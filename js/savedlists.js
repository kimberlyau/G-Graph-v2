var showList= false;

function showSaved(bool) {
    //just returns if doing unnecessary work of adding everything again
    // if(bool == showList){
    //     return;
    // }

    showList = bool;

    var savedLists;
    if(bool){
        savedLists = JSON.parse(localStorage.getItem("savedLists"));
        console.log("here")
    }

    else{
        savedLists = JSON.parse(localStorage.getItem("savedRecipes"));
    }

    console.log(savedLists);


    var accordion = document.getElementById("accordion");
    var add = "";

    if(savedLists.length == 0){
        console.log("here");
        var display;
        if(bool){display = 'create a list';}
        else{
            display = 'save a recipe'; 
        }
        accordion.innerHTML = '<div> There is nothing to display here, please ' + display + ' :) </div>'
    }

    else{
        for(var i = 0; i<savedLists.length; i++){
            var container, body= "";
            if(bool){
                container = '<button type="button" class="btn btn-danger right" id="row' + i + '" onclick="deleteList(this, true)">'
                +        '<i class="fas fa-minus"></i>'
                +      '</button>';

                body = 'Store: ' + savedLists[i][1];
                +    '<ul>';
                for(var j = 0; j<savedLists[i][2].length; j++){
                    body+='<li>' + savedLists[i][2][j] + '</li>';
                }
                body +=
                        '</ul>'
                +        '<a href="storemap.html" class="right" onclick="shopList(this)" id="shop' + i + '"><button type="button" class="btn btn-success">'
                +        '<i class="fas fa-shopping-cart"></i>'
                +      '</button></a>'
    
                + '<a href="location.html" class="right" onclick="shopList(this)" id="shop' + i + '"><button type="button" class="btn btn-primary">'
                +        '<i class="fas fa-edit"></i>'
                +      '</button></a>';
            }
            else{
                container = '<button type="button" class="btn btn-danger right" id="row' + i + '" onclick="deleteList(this, false)">'
                +        '<i class="fas fa-minus"></i>'
                +      '</button>'
                
                body = 'Ingredients: ' + '<ul>';
                for(var j = 0; j<savedLists[i][1].length; j++){
                    body+='<li>' + savedLists[i][1][j] + '</li>';
                }
                body +='</ul>';

                body += 'Steps: ' + '<ol>';
                for(var j = 0; j<savedLists[i][2].length; j++){
                    body+='<li>' + savedLists[i][2][j] + '</li>';
                }
                body +='</ol>'
                +        '<a href="storemap.html" class="right" onclick="shopList(this)" id="shop' + i + '"><button type="button" class="btn btn-success">'
                +        '<i class="fas fa-shopping-cart"></i>'
                +      '</button></a>';

            }




            add +=
            '<div class="card template">'
            + '<div class="card-header" id="headingOne">'
            + '<h5 class="mb-0">'
            +   '<button class="btn btn-link" data-toggle="collapse" data-target="#collapse'
            + i + '" aria-expanded="true"'
            +      'aria-controls="collapseOne">'
            +      savedLists[i][0]
            
            +    '</button>'
            +    container
            +  '</h5>'
            +'</div>'

            +'<div id="collapse' + i + '" class="collapse card-header" aria-labelledby="headingOne" data-parent="#accordion">'
            +  '<div class="panel-body" id="testing">'
            
            + body

            +     '</div>'
            +   '</div>'
            +'</div>';
        }
        accordion.innerHTML = add;
    }

}

function showSavedRecipe()
{

}
function deleteList(elem, bool){
    var getList = $(elem).attr('id');
    var id = parseInt(getList.substr(3, getList.length));
    console.log(id);
    var savedLists;
    if(showList){savedLists = JSON.parse(localStorage.getItem("savedLists"));}
    else{savedLists = JSON.parse(localStorage.getItem("savedRecipes"));}
    
    //savedLists = savedLists.splice(id, 1);
    var newList = [];
    for(var i = 0; i<savedLists.length; i++){
        if(i!=id){ newList.push(savedLists[i]);}
    }
    if(showList){
        localStorage.setItem("savedLists", JSON.stringify(newList));
    }
    else{
        localStorage.setItem("savedRecipes", JSON.stringify(newList));
    }
    
    showSaved(showList);

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


