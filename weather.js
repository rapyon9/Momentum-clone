const weather = document.querySelector(".js-weather");

const API_KEY = '9ae10c66599e281c0a2be3484eb78ffb';
const COORDS = "coords"


function getWeather(lat, lng){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const temp = myJson.main.temp;
    const place = myJson.name;
    const weatherInfo = myJson.weather[0].main;

    weather.innerText = `${weatherInfo}  ${temp}℃ 
    ${place}`;
  });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const coordsObj = {
        lat,
        lng
    };
    saveCoords(coordsObj);
    getWeather(lat, lng);
}

function handleGeoError(){
    console.log('cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
       getWeather(parsedCoords.lat, parsedCoords.lng);
    }
}

function init() {
    loadCoords();
}

init();