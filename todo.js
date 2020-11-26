const toDoForm = document.querySelector(".js-form-todo");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-todo_list");

const TODOS_LS = "toDos"
let toDos = [];

function saveToDos(toDos){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id)
    });
    toDos = cleanToDos;
    saveToDos(toDos);
}

function paintToDos(text) {
    const li = document.createElement("h5");
    const checkBox = document.createElement("INPUT");
    checkBox.setAttribute("type","checkbox");
    const span = document.createElement("span");
    span.innerText = text;
    const delBtn = document.createElement("button");
    delBtn.innerText = "X"
    delBtn.addEventListener("click", deleteToDo);
    const newId =  toDos.length + 1; 

    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos(toDos);
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDos(toDo.text);
        }); 
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    toDoInput.value = "";
    paintToDos(currentValue);
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();