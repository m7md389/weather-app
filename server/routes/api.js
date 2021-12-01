import express from "express"
const router = express.Router()
import urllib from "urllib"
import Mongoose from "mongoose"
import City from "../../model/City.js"
Mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weatherapp")

const WEATHER_API_KEY = `f7cbcea3b573bde35d701b2374cf5ac0`

router.get("/city/:cityName", function(req, res) {
    const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${req.params.cityName}&APPID=${WEATHER_API_KEY}`
    urllib.request(WEATHER_API_URL, function(err, data, resault) {
        if (err)
            throw err;

        const jsonData = JSON.parse(data.toString())
        const weatherData = {
            name: jsonData.name,
            temperature: Math.floor(jsonData.main.temp - 273.15),
            condition: jsonData.weather[0].description,
            conditionPic: jsonData.weather[0].icon
        }
        res.send(weatherData)
    })
})

router.get("/cities", async function(req, res) {
    City.find({},function(err, cities){
        res.send(cities)
    })
})

router.post("/city", function(req, res) {
    const city = req.body
    new City({
        name: city.name,
        temperature: city.temperature,
        condition: city.condition,
        conditionPic: city.conditionPic
    }).save()
    res.end()
})

router.delete("/city/:cityName", function(req, res) {
    const cityName = req.params.cityName
    City.findOneAndRemove({name: cityName}, function (err, resault) {
        if (!resault){
            res.status(404).send(`${cityName} was not found`)
        }
        res.status(204).send(`${cityName} deleted successfully`)
    })
})

export default router