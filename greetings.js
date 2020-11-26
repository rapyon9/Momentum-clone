const greetingsForm = document.querySelector(".js-form-greetings");
const greetingsInput = greetingsForm.querySelector("input");
const greetings = document.querySelector("h3");

// function hiding(){}
const hidingTopRow = document.querySelector(".top-row"),
    hidingBotRow = document.querySelector(".bottom-row"),
    hidingClock = document.querySelector("h1"),
    hidingToDo = document.querySelector(".js-form-todo");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function hiding() {
    hidingTopRow.style.visibility="hidden";
    hidingBotRow.style.visibility="hidden";
    hidingClock.style.display="none";
    hidingToDo.style.display="none";
}

function unHiding() {
    hidingTopRow.style.visibility="visible";
    hidingBotRow.style.visibility="visible";
    hidingClock.style.display="block";
    hidingToDo.style.display="block";
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = greetingsInput.value;
    greetingsInput.value = "";
    paintGreetings(currentValue);
    saveName(currentValue);
}

function askForName(){
    greetingsForm.classList.add(SHOWING_CN);
    greetingsForm.addEventListener('submit', handleSubmit);
}

function paintGreetings(text){
    unHiding();
    greetingsForm.classList.remove(SHOWING_CN);


    const date = new Date();
    const hours = date.getHours();

    function paintTime(){
        if(hours >= 5 && hours < 12){
            greetings.innerText = `Good morning, ${text}.`;
        } else if(hours >=12 && hours < 18) {
            greetings.innerText = `Good afternoon, ${text}.`;
        } else {
            greetings.innerText = `Good evening, ${text}.`;
        }
    }
    setInterval(paintTime,1000);
}

function loadName(){
    const userName = localStorage.getItem(USER_LS);
    if(userName === null) {
        hiding();
        askForName();
    } else {
        paintGreetings(userName);
    }
}

function init() {
    loadName();
}

init();