const taskInput = document.querySelector('#taskInput');
const button = document.querySelector('#addBtn');
const list = document.querySelector('#list');

if (localStorage.getItem('tasksLS')) {
    list.innerHTML = localStorage.getItem('tasksLS');
}

list.addEventListener('click', function (event){
    let target = event.target;
    if (target.dataset.action == 'complete') {
        completeBtn(target);
    }
    if (target.dataset.action == 'delete') {
        removeTask(target);
    }
})

function addTask(newItem) {
    newItem.classList.add('item');
    newItem.textContent = taskInput.value;
    const itemBtns = document.createElement('div');
    newItem.append(itemBtns);
    itemBtns.className = 'item__btns';

    const doneBtn = document.createElement('i');
    doneBtn.className = 'fa fa-check';
    itemBtns.append(doneBtn);
    doneBtn.setAttribute('data-action', 'complete');

    const deleteButton = document.createElement('i');
    deleteButton.className = 'fa fa-ban';
    itemBtns.append(deleteButton);
    deleteButton.setAttribute('data-action', 'delete');
}

addBtn.addEventListener('click', function () {
    const newItem = document.createElement('li');
    addTask(newItem);
    list.append(newItem);
    taskInput.value = '';
});