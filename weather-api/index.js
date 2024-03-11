const form = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const myApi = "3c9c3d8e052451f7249bbdb2bba82c24";

form.addEventListener("submit", async event => {
    card.textContent = "";
    event.preventDefault();
    const city = cityInput.value;
    card.style.display = "flex";
    if(event){
        try{
            const weather = await getWeather(city);
            showCard(weather);
        }catch(ex){
            console.error(`${ex} e eu passei aqui!`);
            displayError("Enter a city!");
        }
    }else{
        displayError("Enter a city!");
    }
})

function showCard(data){

    const {name:city, main: {temp, humidity}, weather: [{description, id}]} = data;

    const name = document.createElement("h1");
    const temperatura = document.createElement("p");
    const hum = document.createElement("p");
    const desc = document.createElement("p");
    const weather = document.createElement("p");

    console.log(data);
    console.log(city);
    console.log(temp);
    console.log(humidity);
    console.log(description);
    console.log(id);
    name.textContent = city;
    temperatura.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    hum.textContent = `Humidity: ${humidity}%`;
    desc.textContent = description;
    weather.textContent = getWeatherEmoji(id);


    name.classList.add("city");
    temperatura.classList.add("temperatureDisplay");
    hum.classList.add("humidity");
    desc.classList.add("descDisplay");
    weather.classList.add("emoji");

    card.appendChild(name);
    card.appendChild(temperatura);
    card.appendChild(hum);
    card.appendChild(desc);
    card.appendChild(weather);

}

async function getWeather(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApi}`;
    const response = await fetch(apiUrl);
   
    if(!response.ok)throw new Error();

    return await response.json();
}

function displayError(message){
    const displayError = document.createElement("p");
    displayError.classList.add("errorDisplay");

    displayError.textContent = message;

    card.appendChild(displayError);
}

function getWeatherEmoji(id){
    switch(true){
        case (id >= 200 && id < 300): 
            return "⛈";
        case (id >= 200 && id < 300): 
            return '🌧';
        case (id >= 500 && id < 600): 
            return "🌧";
        case (id >= 600 && id < 700): 
            return "❄️";
        case (id >= 700 && id < 800): 
            return "☄️🌪"
        case (id === 800): 
            return "☀️";
        case (id > 800 && id < 900): 
            return "☁️";

    }
}