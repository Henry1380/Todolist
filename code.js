const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');
const tasks = [];


function addTask(task){
    const task = {
        text: task,
        completed: false

    };
    tasks.push(task);

const listItem = document.createElement('li');
listItem.innerHTML = `<input type="checkbox" /> <span>${task}</span><button>Delete</button>`;
taskList.appendChild(listItem);

const checkbox = listItem.querySelector('input');
const deleteButton = listItem.querySelector('button');

listItem.addEventListener('click', () => {
    if (task.completed === false) {
        task.completed = true;
        listItem.classList.add('completed');
        checkbox.checked = true;
    } else {
        task.completed = false;
        listItem.classList.remove('completed');
        checkbox.checked = false;
    }
    updateCounter();
    });

    deleteButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const index = tasks.index0f(task);
        tasks.splice(index, 1);
        listItem.remove();
        updateCounter();

    });
}

function updateCounter() {
    let count = 0;
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].completed === true) {
            count++;
        }
    }
    counter.textContent = count + ' completed tasks';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('#task-input');
    const task = input.ariaValueMax.trim();
    
    if(task === '') {
        alert('You have to enter a task!');
        return;

    }

    addTask(task);
    input.value = '';

});



