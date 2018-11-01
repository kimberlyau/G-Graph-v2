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
