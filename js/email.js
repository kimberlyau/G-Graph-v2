//called on email.html
function saveList(){
    var myList = JSON.parse(localStorage.getItem("myList"));
    if(myList === []){ 
        alert("There is nothing on your list please add something to it"); 
        return;
    }

    var selectedStore = localStorage.getItem("selectedStore");
    myList.push(selectedStore);
    var savedLists = JSON.parse(localStorage.getItem("savedLists"));
    savedLists.push(myList);
    localStorage.setItem("savedLists", JSON.stringify(savedLists));
}

function displaySummary(){
    var summary = document.getElementById("summary");
    var selectedStore = localStorage.getItem("selectedStore");
    var myList = JSON.parse(localStorage.getItem("myList"));
    var add ='<div>'
        +  '<div class="panel-body" id="testing">'
        +   '<b>Store:</b> ' + selectedStore 
        +    '<br><div><b>List:</b><ul>';
        for(var j =0; j<myList.length; j++){
            add += '<li>' + myList[j] + '</li>';
        }
        add +=
                '</ul></div>'
        +     '</div>'
        +   '</div>'
    console.log(add);
    summary.innerHTML = add;

}
  
(function(window, document, undefined){
  
      // code that should be taken care of right away
      
      window.onload = init;
  
      
        function init(){
          // the code to be called when the dom has loaded
          // #document has its nodes
          displaySummary();

  
        }
  
        
      
  })(window, document, undefined);