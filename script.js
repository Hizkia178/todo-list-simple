document.getElementById('addBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const taskCategory = document.getElementById('taskCategory').value;
    const taskReminder = document.getElementById('taskReminder').value;

    if (taskText) {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        taskItem.innerHTML = `
            <span class="task-text">${taskText} <small>(${taskCategory})</small></span>
            <div class="task-actions">
                ${taskReminder ? `<span class="reminder"><i class="fas fa-clock"></i> ${new Date(taskReminder).toLocaleString()}</span>` : ''}
                <button onclick="completeTask(this)"><i class="fas fa-check"></i></button>
                <button onclick="deleteTask(this)"><i class="fas fa-trash"></i></button>
            </div>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';
        document.getElementById('taskCategory').value = '';
        document.getElementById('taskReminder').value = '';
    }
});

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.style.textDecoration = 'line-through';
    taskItem.style.color = 'gray';
    button.parentElement.style.display = 'none'; // hide actions after completion
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
