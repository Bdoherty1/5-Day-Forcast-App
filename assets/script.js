
const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".searchBtn");
const currentweatherDiv = document.querySelector(".current-weather");
const weatherCardDiv = document.querySelector(".weather-cards");
const API_KEY= "2dbe0d3a4e8a024f385b974cb260cef9";

const createWeatherCard = (cityName, weatherItem, index) => {
    if(index === 0) { //html for main weather card//
        return `   <div class="details">
                            <h2>${cityName} (${weatherItem.dt_txt.split("")[0]})</h2>
                            <h4>Temperature:${weatherItem.main.temp}</h4>
                            <h4>Wind: ${weatherItem.wind.speed} mph </h4>
                            <h4>Humidity: ${weatherItem.main.humidity}%</h4>
                    </div>
                    <div class="icon">
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon" alt="weather-icon">
                    <h4>${weatherItem.weather[0].description} </h4>
                    </div>`;
    }
    else{
        return `<li class="card">
                <h3>${weatherItem.dt_txt.split("")[0]}</h3>
                <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt="weather-icon">
                <h4>Temperature:${weatherItem.main.temp}</h4>
                <h4>Wind: ${weatherItem.wind.speed} mph </h4>
                <h4>Humidity: ${weatherItem.main.humidity}%</h4>
            </li>`;
    }
    
}

const getWeatherDetails = (cityName, lat, lon) => {
    const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(WEATHER_API_URL).then(res => res.json()).then(data => {

// filter for forcast and only get one for each day
        const uniqueForcastDays =[];
        const fiveDayForcast = data.list.filter(forcast => {
            const forcastDate = new Date(forcast.dt_txt).getDate();
                if(!uniqueForcastDays.includes(forcastDate)){
                    return uniqueForcastDays.push(forcastDate);
                }
        });

//clear previous data//
            cityInput.value = "";
            currentweatherDiv.innerHTML = "";
            weatherCardDiv.innerHTML = "";


            //creating weather cards and adding them to the DOM//
            fiveDayForcast.forEach((weatherItem, index) => {
                if(index === 0){
                    currentweatherDiv.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem, index));
                }
                else{
                    weatherCardDiv.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem, index));
                }
                
            });


     }) .catch(() => {
            alert("An error occurred while fetching the weather forcast!");
    });
}

const getCityCoodinates = () => {
    const cityName = cityInput.value.trim();
    if (!cityName) return;
    const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit={1}&appid=${API_KEY}`;

    // get entered city coordinates from API responce
    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        if(!data.length) return alert("No coordinates found for ${cityName}");
        const { name, lat, lon } = data[0];
        getWeatherDetails(name, lat, lon);
        })
        .catch(() => {
            alert("An error occurred while fetching the coordinates!");
        });


searchBtn.addEventListener("click", getCityCoodinates);

    }

