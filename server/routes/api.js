import express from "express"
const router = express.Router()
import urllib from "urllib"
import City from "../../model/City.js"

const _API_KEY = "e74a447aaa4485dd6727f10bbd9fcad3"
    // const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${_API_KEY}`

router.get("/city/:cityName", function(req, res) {
    // This should be the route that makes a call to your external API
})

router.get("/cities", function(req, res) {
    // This route should find all of the city data saved in your DB, and send it to the client

})

router.post("/city", function(req, res) {
    // This route should take some data from the body, and save it as a new City to your DB
})

router.delete("/city/:cityName", function(req, res) {
    // This route should find the city's data in your DB and remove it from your DB
})



export default router