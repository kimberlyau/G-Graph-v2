let myList = [];

var recipesHow = [["Chop lettuce, broccoli, lettuce, and tomato together to create a Salad."], 
  ["Cook the bacon until crispy.", "Scrabble the eggs.", " Pour out a cup of milk for a Power Breakfast!"], 
  ["Season the chicken with salt and pepper, then cook until golden brown", "Finally boil the eggs for a 'All Cooped Up' Meal."], 
  ["To create a BLT Mix, fry up some bacon.", " Then dice the tomato.", " Lastly, slice the lettuce into bite size pieces."],
  ["Slice the apple and broccoli.", " Pour out a cup of milk for a snack."],
  ["Chop and blanch the broccoli into boiling water for five minutes.", " Season the chicken with salt and pepper, then cook until golden brown.", " Slice the tomatoes, chicken and lettuce.", " Put everything together to create the perfect chicken salad."],
   ["Mix eggs and milk together, then simmer until boiling for pudding."]];

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
        // recipe = li[0][i].innerHTML;
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.replace('<br>', '').replace('<b>', '').replace('</b>', '').toUpperCase().indexOf(filter) > -1) {
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
  li = document.getElementsByClassName("listEl");

  // Empty Search
  if (localStorage.getItem('emptySearch') == "true") {
    for (i = 0; i < x.length; i++) {
      if (x[i].className.indexOf(c) <= -1) {
        li[i].style.display = "none";
      } else {
        li[i].style.display = "block";
        num = num + 1;
      }
    }

  }

  else {
    num = x.length;
    for (i = 0; i < x.length; i++) {
      // Hide if filtered out
      if (x[i].className.indexOf(c) <= -1) {
        li[i].style.display = "none";
        num = num - 1;
      }
    }
  }

  alert(num + " item(s) found!");
  // toggleH4(num);

}

var check = 0;

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

  var id = parseInt($(elmnt).attr('id'));
  alert(recipesHow[id]);

  localStorage.setItem("recipeName", recipename);
  localStorage.setItem("recipeSteps",  JSON.stringify(recipesHow[id]));
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
