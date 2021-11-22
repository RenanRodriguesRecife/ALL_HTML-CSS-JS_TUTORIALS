const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

document.addEventListener('DOMContentLoaded',getLocal);
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

function createTodo(value){
    //create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //checktrash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
}

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    saveLocal(todoInput.value)
    createTodo(todoInput.value)
    
    //Clear todo input value
    todoInput.value = "";

}

function deleteCheck(event){
    const item = event.target;
    //Delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        //remove local
        removeLocal(todo);

        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }

    //check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(event){
    const todos = todoList.childNodes;
    
    todos.forEach(function(todo) {
        switch(event.target.value)
        {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            }
        }
    );
}


function checkLocal(Item){
    //verifica já existe um local
    if(localStorage.getItem(Item) === null){
        return [];
    }else{
        return JSON.parse(localStorage.getItem(Item));
    }
}

function saveLocal(todo){
    //localStorage.clear();
    let todos = checkLocal('todos');
    
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}


function removeLocal(todo){
    let todos = checkLocal('todos');

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getLocal(){
    let todos = checkLocal('todos');

    todos.forEach(function(todo){
        createTodo(todo)
    })
}