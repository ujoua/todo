const todoInputButton = document.querySelector("#todo-input > button");

const addTodoListItem = () => {
    const content = document.querySelector("#todo-input > input[type=text]").value;

    const newTodoListItem = document.createElement('div');
    newTodoListItem.setAttribute('class', 'todo-list-item');

    const newTodoListItemCheckbox = document.createElement('input');
    newTodoListItemCheckbox.setAttribute('type', 'checkbox');

    const newTodoListItemText = document.createElement('input');
    newTodoListItemText.setAttribute('type', 'text');
    newTodoListItemText.setAttribute('value', content);

    const newTodoListItemButton = document.createElement('button');
    newTodoListItemButton.innerText = "-";

    newTodoListItem.appendChild(newTodoListItemCheckbox);
    newTodoListItem.appendChild(newTodoListItemText);
    newTodoListItem.appendChild(newTodoListItemButton);

    document.querySelector("#todo-list").appendChild(newTodoListItem);
}

todoInputButton.addEventListener('click', addTodoListItem);
