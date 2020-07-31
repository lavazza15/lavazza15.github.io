var btnAdd = document.getElementById("btnAdd");
var task = document.getElementById("task");
var tasks = document.getElementById("tasks");
btnAdd.addEventListener("click", addToDoItem);


function addToDoItem() {
    if (task.value.length === 0) {
        alert("You must write something!");
    }
    else {
    var todo = document.createElement("li");
    todo.addEventListener("click", toDoDone)
    todo.textContent = task.value;
    tasks.appendChild(todo);
    task.value = '';
    }
}

function toDoDone(e) {
    e.target.style.textDecoration = "line-through";
}