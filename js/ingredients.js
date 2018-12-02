let ingredients = ["bacon", "chicken", "eggs", "milk", "apples", "broccoli", "lettuce", "tomato", "green chili",
"refried beans", "salsa", "rice", "tacos", "corn", "tortillias", "baking powder", "baking soda", "sugar",
"brownie mix", "cake mix", "cereal", "baby food", "juice", "almond", "arugala", "artichoke", "bruscetta", "black beans", 
"bagels", "baked beans", "beer", "fish", "bread", "cabbage", "cake", "carrots", "celery", "cheese", "chicken", 
"chips", "chocolate", "clams", "coffee", "garlic", "ginger", "ham", "cheeseburgers", "honey", "ice cream",
"kale", "kabobs", "ketchup", "kiwi", "lobster", "lamb", "pizza", "spinach", "spaghetti", "waffles",
"wine", "walnuts", "yogurt", "zucchini", "butter", "lemon", "beef", "potato", "onion", "steak", "sausage",
"flour", "salt", "pepper", "pumpkin", "hotdog"
];
let show = [];
let myList = [];

ingredients.sort();

for(var i = 0; i<ingredients.length; i++){
  show.push(false);
}

function initResults(){
  //creates search results
  var ul = document.getElementById("myUL");
  for(var i = 0; i<ingredients.length; i++){
    var addToList =
    '<li>'
    + '<a onclick="updateResults(this)">'
    + '<b>'
    + ingredients[i]
    + '</b>'
    + '</a>'
    + '</li>';
    ul.innerHTML += addToList;

    //creates lists that's already loaded
  }
  var getList = JSON.parse(localStorage.getItem("myList"));
    if(getList != myList) myList = getList; //myList is empty currently
    for(var i=0; i<getList.length; i++){
      show[ingredients.indexOf(getList[i])] = true;
    }
   console.log();


}

function putInInput(elem){
  var search = document.getElementById("search");
  var show = $(elem).text();
  search.value = show;
}

function updateResults(elem){
  var search;
  if(elem.tagName === "BUTTON"){
    search = document.getElementById("search").value;
  }
  else{
    search = $(elem).text();
    console.log(search)
  }
  var index = ingredients.indexOf(search)
  if(index > -1){
    if(show[index]!=true){
      myList.push(ingredients[index]);
      show[index] = true;
    }
    document.getElementById("search").value = "";
    displayIngredients();
    filterResults();

  }
}


function displayIngredients(){
  var list = document.getElementById("list");
  list.innerHTML = "";
  for(var i = 0; i<myList.length; i++){
      var addToList = '<div>'
      + '<button type="button" class="btn btn-light" disabled>'
      + myList[i]
      + '</button>'
      + ' <button id="'
      + i
      + '" type="button" class="btn btn-danger right" onclick="deleteItem(this)">'
      + '<i class="fas fa-minus"></i>'
      + '</button>'
      + '</div>';
      list.innerHTML += addToList;
  }
}
function deleteItem(elem){
  var getItem = $(elem).attr('id');
  myList.splice(getItem, 1);
  show[getItem]=false;
  displayIngredients();
}

function filterResults(){
  var input, filter, ul, li, a, i;

  // Text input
  input = document.getElementById("search");
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
        a = li[i].getElementsByTagName("a")[0];
        // Have to remove <br>, bold tags
        if (a.innerHTML.replace('<br>', '').replace('<b>', '').replace('</b>', '').toUpperCase().indexOf(filter) > -1
          && show[i] === false) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
  }

}

function saveMyList(){
  localStorage.setItem('myList', JSON.stringify(myList));
  //alert(localStorage.getItem("myList"))
}

(function(window, document, undefined){

    // code that should be taken care of right away

    window.onload = init;


      function init(){
        // the code to be called when the dom has loaded
        // #document has its nodes
        initResults();
        displayIngredients();




      }



})(window, document, undefined);
