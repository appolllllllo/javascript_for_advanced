let taskInput = document.querySelector('#task-input');
let addBtn = document.querySelector('#add-btn');
let tasksList = document.querySelector('#tasks');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    tasksList.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];

        let li = document.createElement('li');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.done;
        
        checkbox.addEventListener('change', function() {
            tasks[i].done = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        let span = document.createElement('span');
        span.textContent = task.text;
        if (task.done) {
            span.style.textDecoration = 'line-through';
            span.style.color = 'gray';
        }

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Изменить';
        editBtn.addEventListener('click', function() {
            let newText = prompt('Введите новое название:', task.text);
            if (newText !== null && newText.trim() !== '') {
                tasks[i].text = newText.trim();
                saveTasks();
                renderTasks();
            }
        });

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.addEventListener('click', function() {   //
            tasks.splice(i, 1);
            saveTasks();
            renderTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        tasksList.appendChild(li);
    }
}

addBtn.addEventListener('click', function() {
    let text = taskInput.value.trim();

    if (text !== '') {
        tasks.push({
            text: text,
            done: false
        });

        saveTasks();
        renderTasks();
        taskInput.value = '';
    }
});

renderTasks();