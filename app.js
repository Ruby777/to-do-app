let id = 0;

  function onReady(){
    const toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');

    function createNewToDo(){
      const newToDoText = document.getElementById('newToDoText');
      if(!newToDoText.value){ return; }

      toDos.push({
        title: newToDoText.value,
        complete: false,
        id: id.value
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


        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);

        const delete = document.createElement('button');
          newLi.appendChild(delete);

          delete.addEventListener('click', function(){
            for(var i=0; i<toDos.children.length; i++){
              console.log(toDos.children.length);
                if(toDos.id == id){
                  toDos.filter(toDos[i]);
              }
             renderTheUI();
            }

        });
    });

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
