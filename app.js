 //check if input data is empty func...
 document.querySelector('#push').onclick = function() {
     if (document.querySelector('#newTask input').value.length === 0) {
         alert("please insert what to do");
         //get text-input data func
         //(``) is used to inject html tags directly on jsfile...
     } else {
         document.querySelector("#tasks").innerHTML += `
         <div class="task">
         <span id="taskname">
         ${document.querySelector('#newTask input').value};
         </span>
         <button id="delect"><span class="material-symbols-outlined">
delete
</span></button>
          
         </div>`;
         // add delete btn func...
         var current_task = document.querySelectorAll("#delect");
         for (var i = 0; i < current_task.length; i++) {
             current_task[i].onclick = function() {
                 this.parentNode.remove();
             }
         }
         //add toggle new input data func...
         var tasks = document.querySelectorAll(".task");
         for (var i = 0; i < tasks.length; i++) {
             tasks[i].onclick = function() {
                 this.classList.toggle('completed');
             }
         }
     }
     document.querySelector('#newTask input').value = "";

 }