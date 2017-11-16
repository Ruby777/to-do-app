function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');

  const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', event => {
       event.preventDefault();

      //get the text
      let title = newToDoText.value;

      // create a new li
      let newLi = document.createElement('li');

      //create a new input
      let checkbox = document.createElement('input');

      // set the input's type to checkbox
      checkbox.type = "checkbox";

       // set the title
      newLi.textContent = title;

       // attach the chekbox to the li
      newLi.appendChild(checkbox);

      // attach the li to the ul
      toDoList.appendChild(newLi);

      //empty the input
      newToDoText.value = ' ';
  });
  //adding the event listener for clicking the delete button
 document.getElementById('deleteButton').addEventListener('click', function(){

       var collection = document.querySelectorAll("input[type=checkbox]");
       for (var i = 0; i < collection.length; i++) {
         if (collection[i].checked) {
           // remove this li
           toDoList.removeChild(collection[i].parentElement);
         };
       }
});


}

window.onload = function(){
  // alert("The window has loaded!");
  onReady();
};
