
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const { response } = require('express');

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = 4000;
const server = app.listen(port, () => console.log(`Running on port: ${port}`));

app.use(express.static('dist'));
app.get('/all', (req, res) => res.sendFile('dist/index.html'));

// app.get('/all', sendData);
// function sendData(req, res) {
//     res.send(projectData);
//     console.log(projectData)
// };

// test route
app.get('/test', async (req, res) => {
    res.json({ msg: 'pass!' })
})

// Post Route

app.post('/destination', async (req, res) => {

    let userInput = req.body
    let projectData = ''
    let geonameData = ''
    let weatherData = ''
    let pixabayData = ''
    // call geonames
    const username = process.env.GN_username;
    const geonameBaseURL = `http://api.geonames.org/search?q=${userInput.city}&maxRows=1&type=json&username=${username}`

    await (fetch(encodeURI(geonameBaseURL))
        // get lat long countryName
        .then(res => res.json())
        .then(data => geonameData = { lng: data.geonames[0].lng, lat: data.geonames[0].lat, countryName: data.geonames[0].countryName, city: data.geonames[0].toponymName })
        .catch(err => {
            console.log(err)
            return err.message
        }))

    // WEATHERBIT API
    const key = process.env.weather_KEY
    const weatherbitURL = 'http://api.weatherbit.io/v2.0/current?'

    const url = `${weatherbitURL}lat=${geonameData.lat}&lon=${geonameData.lng}&key=${key}&units=M`
    // Call API
    await fetch(url)
        // get temperature and weather description
        .then(res => res.json())
        .then(res => weatherData = { temp: res.data[0].temp, weather: res.data[0].weather.description, icon: res.data[0].weather.icon })
        .catch(err => {
            console.log(err)
            return err.message
        })
    // PIXABAY API
    const pixabayKey = process.env.pixabay_KEY
    const pixabayURL = `https://pixabay.com/api/?key=${pixabayKey}&q=${geonameData.city}&category=places&image_type=photo&orientation=horizontal&safesearch=true`
    // Call API

    await (fetch(pixabayURL)
            .then(res =>
                res.json()
            )
            .then(data => {
                pixabayData = { img: data.hits[0].webformatURL }
            })
            .catch(err => {
                console.log(err)
                return err.message
            })
    )

    projectData = { temp: weatherData.temp, weather: weatherData.weather, icon: weatherData.icon, cityName: geonameData.city, countryName: geonameData.countryName, date: userInput.date, img: pixabayData.img }
    res.send(projectData)

})
module.exports = app
