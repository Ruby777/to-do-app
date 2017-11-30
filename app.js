let id = 0;

function onReady(){
   let toDos = [];
   const addToDoForm = document.getElementById('addToDoForm');

    function createNewToDo(){
      const newToDoText = document.getElementById('newToDoText');
      if(!newToDoText.value){ return; }

      toDos.push({
        title: newToDoText.value,
        complete: false,
        id: id
      });

       id++;
       newToDoText.value = '';

      renderTheUI();
    }

    function renderTheUI(){
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = ' ';

       toDos.forEach(function(toDo){
         const newLi = document.createElement('li');
         const checkbox = document.createElement('input');
         checkbox.type = "checkbox";

          newLi.textContent = toDo.title;

          toDoList.appendChild(newLi);
          newLi.appendChild(checkbox);

          const deleteButton = document.createElement('button');
          deleteButton.textContent = "Delete";
          deleteButton.setAttribute('data-todo-id', toDo.id);

          newLi.appendChild(deleteButton);

          let deleteToDo = function(id){
            toDos = toDos.filter(toDo => toDo.id !== id);
            }

          deleteButton.addEventListener('click', function(){

                deleteToDo(toDo.id);
          
              renderTheUI();
            });
         });
       }

    addToDoForm.addEventListener('submit', event =>{
      event.preventDefault();
      createNewToDo();
        });

  renderTheUI();
    }


 window.onload = function(){
  alert("The window has loaded!");
  onReady();
};
