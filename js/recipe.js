let myList = [];
let check = 0;

function myFunction() {
  var input, filter, ul, li, a, i;

  // Text input
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();

  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  // Clear if empty
  if (filter.length == 0) {
    for (i = 0; i < li.length; i++) {
          li[i].style.display = "none";
      }
      localStorage.setItem('emptySearch', "true");
    }
  else {
    localStorage.setItem('emptySearch', "false");
    for (i = 0; i < li.length; i++) {
        recipe = li[i].innerHTML;
        if (recipe.toUpperCase().replace('<br>', '').replace('<b>', '').replace('</b>', '').toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "block";
        } else {
          li[i].style.display = "none";
        }
        // // Have to remove <br>, bold tags
        // if (a.innerHTML.replace('<br>', '').replace('<b>', '').replace('</b>', '').toUpperCase().indexOf(filter) > -1) {
        //     li[i].style.display = "block";
        // } else {
        //     li[i].style.display = "none";
        // }
    }

  }
}

// filterSelection("all");
function filterSelection(c) {
  myFunction();
  var x, i;
  let num = 0;
  x = document.getElementsByClassName("filterDiv");

  // Empty Search
  if (localStorage.getItem('emptySearch') == "true") {
    for (i = 0; i < x.length; i++) {
      if (x[i].className.indexOf(c) <= -1) {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "block";
        num = num + 1;
      }
    }

  }

  else {
    num = x.length;
    for (i = 0; i < x.length; i++) {
      // Hide if filtered out
      if (x[i].className.indexOf(c) <= -1) {
        x[i].style.display = "none";
        num = num - 1;
      }
    }
  }

  alert(num + " item(s) found!");
  // toggleH4(num);

}

// function initResults(){
//   //creates search results
//   var ul = document.getElementById("myUL");
//   for(var i = 0; i<ingredients.length; i++){
//     var addToList =
//     '<li>'
//     + '<a onclick="updateResults(this)">'
//     + '<b>'
//     + ingredients[i]
//     + '</b>'
//     + '</a>'
//     + '</li>';
//     ul.innerHTML += addToList;
//
//     //creates lists that's already loaded
//   }
//   var getList = JSON.parse(localStorage.getItem("myList"));
//     if(getList != myList) myList = getList; //myList is empty currently
//     for(var i=0; i<getList.length; i++){
//       show[ingredients.indexOf(getList[i])] = true;
//     }
//    console.log();
//
//
// }
function darkClick (elmnt, lst) {
  myList = lst;
  if (check == 0) {
    elmnt.style.color = 'blue';
    check = check + 1;
    selectedStore = elmnt.innerHTML.toUpperCase();
  } else {
    elmnt.style.color = 'black';
    check = check - 1;
  }

  var idx = elmnt.innerText.indexOf("Ingredients:") 
  var recipename = elmnt.innerText.substr(0, idx);
  
  localStorage.setItem("recipeName", recipename)
  localStorage.setItem('recipeCounter', check);
  localStorage.setItem('myList', JSON.stringify(myList));
}

function saveMyList(elmnt){
  localStorage.setItem('myList', JSON.stringify(myList));
}

// (function(window, document, undefined){
//
//     // code that should be taken care of right away
//
//     window.onload = init;
//
//       function init(){
//         // the code to be called when the dom has loaded
//         // #document has its nodes
//         initResults();
//         displayIngredients();
//
//       }
//
// })(window, document, undefined);
