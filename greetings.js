const greetingsForm = document.querySelector(".js-form-greetings");
const greetingsInput = greetingsForm.querySelector("input");
const greetings = document.querySelector("h3");

const USER_LS = "currentUser";

function handleSubmit(event){
    event.preventDefault();
    const currentValue = greetingsInput.value;
    greetingsInput.value = "";
    paintGreetings(currentValue);
}

function askForName(){
    greetingsForm.addEventListener('submit', handleSubmit);
}

function paintGreetings(text){
    greetings.innerText = `hello ${text}`;
}

function loadName(){
    const userName = localStorage.getItem(USER_LS);
    if(userName === null) {
        askForName();
    } else {
        paintGreetings(userName);
    }
}

function init() {
    loadName();
}

init();