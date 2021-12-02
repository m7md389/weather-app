const express = require("express")
const path = require("path")
const api = require("./server/routes/api.js")
const Mongoose = require("mongoose")
Mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weatherapp", { useNewUrlParser: true })


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)

const PORT = 3451
app.listen(process.env.PORT || PORT, function() {
    console.log(`Weather App server is running on port ${PORT}`);
})