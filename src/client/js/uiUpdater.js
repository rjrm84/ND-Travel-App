import { dateCounter } from "./dateCounter";


function uiUpdater(data) {
    // creates a template of html with data from APIs dynamically injected
    const results = document.getElementById('results')

    const destination = document.getElementById('destination');
    const weatherWrapper = document.getElementById('weather');

    destination.innerHTML = `
    <h2> Your Itinerary ${dateCounter(data.date)} </h2>
    
        <ul>
            <li> Destination: <strong> ${data.cityName}, ${data.countryName}</strong></li>
            <li> Schedule: <strong>${data.date} </strong></li>
            
        </ul>
    <img
    src=${data.img}
    alt= "image of ${data.cityName}"
    />
    `
    // weather info, icons
    weatherWrapper.innerHTML = `
    <h3> Current Weather in ${data.cityName}: </h3>
    <ul class= "weather-data" id="weather-data">x
        <li>${data.temp} &deg; C</li>
        <li> ${data.weather} </li>
        <li>
            <img
            src= "https://www.weatherbit.io/static/img/icons/${data.icon}.png" alt='weather-icon'>
        </li>
    </ul>
    `
    results.style.display = 'block'
    results.scrollIntoView({ behavior: "smooth" })
    dateCounter(data.date)
}

export { uiUpdater }
