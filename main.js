// adding item
const todoInputButton = document.querySelector("#todo-input > button");

const addTodoListItem = () => {
    const content = document.querySelector("#todo-input > input[type=text]").value;

    const newTodoListItem = document.createElement('div');
    newTodoListItem.setAttribute('class', 'todo-list-item');

    const newTodoListItemCheckbox = document.createElement('input');
    newTodoListItemCheckbox.setAttribute('type', 'checkbox');
    newTodoListItemCheckbox.addEventListener('click', checkTodoListItem);

    const newTodoListItemText = document.createElement('input');
    newTodoListItemText.setAttribute('type', 'text');
    newTodoListItemText.setAttribute('value', content);

    const newTodoListItemButton = document.createElement('button');
    newTodoListItemButton.innerText = "-";
    newTodoListItemButton.addEventListener('click', removeTodoListItem);

    newTodoListItem.appendChild(newTodoListItemCheckbox);
    newTodoListItem.appendChild(newTodoListItemText);
    newTodoListItem.appendChild(newTodoListItemButton);

    document.querySelector("#todo-list").appendChild(newTodoListItem);
}

todoInputButton.addEventListener('click', addTodoListItem);


// removing item
const removeTodoListItem = (event) => {
    event.target.parentNode.remove();
}


// chcking item
const checkTodoListItem = (event) => {
    if (event.target.checked) {
        event.target.nextSibling.style.color = 'lightgray';
        event.target.nextSibling.style.textDecoration = 'line-through';
    }
    else {
        event.target.nextSibling.style.color = 'black';
        event.target.nextSibling.style.textDecoration = '';
    }
}