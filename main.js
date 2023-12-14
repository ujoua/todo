const addTodoListItem = () => {
    const todoInputText = document.querySelector("#todo-input > input[type=text]");

    document.querySelector("#todo-list").innerHTML +=
        `<div class="todo-list-item">
            <input type="checkbox"">
            <input type="text" value=${todoInputText.value}></input>
            <button>-</button>
        </div>`;

    todoInputText.value = "";
}

const todoInputButton = document.querySelector("#todo-input > button");
todoInputButton.addEventListener('click', (event) => {
    event.preventDefault();
    addTodoListItem();
});


const checkTodoListItem = (event) => {
    if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
        const todoListItemTextBox = event.target.nextElementSibling;

        if (event.target.checked) {
            todoListItemTextBox.style.color = 'lightgray';
            todoListItemTextBox.style.textDecoration = 'line-through';
        } else {
            todoListItemTextBox.style.color = 'black';
            todoListItemTextBox.style.textDecoration = '';
        }
    }
}

const removeTodoListItem = (event) => {
    if (event.target.tagName == 'BUTTON') {
        event.target.parentNode.remove();
    }
}

const todoList = document.querySelector("#todo-list");
todoList.addEventListener('click', checkTodoListItem);
todoList.addEventListener('click', removeTodoListItem);
