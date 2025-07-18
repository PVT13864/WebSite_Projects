document.getElementById('addTaskButton').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create a new task item
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteTask">Delete</button>
    `;

    // Add delete functionality
    taskItem.querySelector('.deleteTask').addEventListener('click', function () {
        taskList.removeChild(taskItem);
    });

    // Append the task to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
});
