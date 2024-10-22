const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {

    const taskValue = newTaskInput.value.trim();

    if (taskValue === '') {
        alert('Por favor, ingrese una tarea.');
        return;  
    }

    const li = document.createElement('li');
    li.textContent = taskValue;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('deleteBtn');


    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);


    newTaskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);