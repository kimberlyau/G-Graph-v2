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
    }
  else {
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
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    // x[i].style.display = "none";
    if (x[i].className.indexOf(c) <= -1) {
      // w3AddClass(x[i], "show");
      x[i].style.display = "none";
    }
  }
}
