const form = document.querySelector('form');
const taskList = document.querySelector('#task-List');

function addTask(task){
    const listItem = document.createElement('li')
    listItem.innerHTML = '<input type="checkbox" /> <span>${task}</span><button>Delete</button>';
    taskList.appendChild(listItem);

}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const input = document.querySelector('#task-input');
    const task = input.value;
    addTask(task);
    input.value = ''
})