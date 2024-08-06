document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', taskText);
            if (newTaskText) {
                li.firstChild.textContent = newTaskText;
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        return li;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    }

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
