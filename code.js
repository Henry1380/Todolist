const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');
const counter = document.querySelector('#counter');

// Array med objekt där alla uppgifter sparas
let tasks = [];

function addTask(text) {
    const task = {
        text: text,
        completed: false
    };
    tasks.push(task);

    
    // Skapa <li> med checkbox, text och papperskorg
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox" /> <span>${text}</span> <button title="Delete">🗑️</button>`;
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

    // En papperskorg som tar bort uppgiften från sidan OCH från arrayen
    deleteButton.addEventListener('click', (event) => {
        event.stopPropagation(); 
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);
        listItem.remove();
        updateCounter();
    });
}

// Räknar hur många uppgifter som är klara och visar det
function updateCounter() {
    let count = 0;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed === true) {
            count++;
        }
    }

    counter.textContent = count + ' completed tasks';
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); // hindrar sidan från att laddas om
    const input = document.querySelector('#task-input');
    const text = input.value.trim(); // tar bort extra mellanslag

    // Om fältet är tomt visas ett meddelande
    if (text === '') {
        alert('You have to write something!');
        return;
    }

    addTask(text);
    input.value = '';
});
