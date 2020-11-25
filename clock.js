const clockContainer = document.querySelector(".js-clock");
const clock = clockContainer.querySelector(".clock");

function getTime(){
    const date = new Date();
    const hours = date.getHours(),
        miniutes = date.getMinutes();
        //seconds = date.getSeconds();

    clock.innerText = 
    `${hours < 10 ? `0${hours}` : hours }:${miniutes < 10 ? `0${miniutes}` : miniutes }`;
}


function init() {
    setInterval(getTime,1000);
}

init();