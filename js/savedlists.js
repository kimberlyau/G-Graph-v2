var listFood = JSON.parse(localStorage.getItem("myList"));

function showIngredientsList() {
    var showIngred = document.getElementById("testing");
    showIngred.innerHTML = "";
    showIngred.innerHTML += "<ul>";
    for (var i = 0; i < listFood.length; i++) {
        var foodBullets = document.createElement("li");
        foodBullets.innerHTML = listFood[i];
        showIngred.appendChild(foodBullets);
    }
    showIngred.innerHTML += "</ul>";
}



function accordionIngredients() {
    var showIngred = document.getElementById("dynamicAcc");
    var $template = $(".template");

    var hash = 2;
    $("#dynamicAcc").on("click", function () {
        var $newPanel = $template.clone();
        $newPanel.find(".collapse").removeClass("in");
        $newPanel.find(".accordion-toggle").attr("href", "#" + (++hash))
            .text("Dynamic panel #" + hash);
        $newPanel.find(".panel-collapse").attr("id", hash);
        $("#accordion").append($newPanel.fadeIn());
    });
}

var saveAccordion;
function saveAcc() {
    localStorage.setItem('saveAccordion', saveAccordion);
}






(function (window, document, undefined) {

    // code that should be taken care of right away

    window.onload = init;

    function init() {
        // the code to be called when the dom has loaded
        // #document has its nodes
        showIngredientsList();

    }

})(window, document, undefined);
