document.getElementById('add-task-button').addEventListener('click', addTask);
document.getElementById('new-task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Completed';
    completeButton.classList.add('complete-button');
    completeButton.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(completeButton);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
}
