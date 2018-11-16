var check = 0;




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
    } else {
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

function darkClick (elmnt) {
  var selectedStore = "";
  if (check == 0) {
    elmnt.style.color = 'blue';
    check = check + 1;
    selectedStore = elmnt.innerHTML.toUpperCase();
  } else {
    elmnt.style.color = 'black';
    check = check - 1;
  }
  localStorage.setItem('selectedStore', selectedStore);
  saveStore(elmnt);
}

function saveStore (elmnt) {
  // ul = document.getElementById("myUL");
  // li = ul.getElementsByTagName("li");
  //
  // for (i = 0; i < li.length; i++) {
  //   a = li[i].getElementsByTagName("a")[0];
  //   text = a.innerHTML.replace('<br>', '').replace('<b>', '').replace('</b>', '').toUpperCase();
  //   alert(text);
  if(localStorage.getItem("selectedStore") === ""){
    alert("Please select a store!");
    return;
  }

  // }
  if (localStorage.getItem('nextToggle') == "recipe") {
    if(localStorage.getItem("fromList") == ""){
      elmnt.href="recipe.html";

    }
    else{
      console.log("here");
      elmnt.href="storemap.html";
    }
  }

  else {
    elmnt.href="ingredients.html";
  }
  return false;
}
