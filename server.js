import express, { json, urlencoded } from "express"
import { join, resolve } from "path"
import api from "./server/routes/api.js"

const __dirname = resolve()

const app = express()
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(express.static(join(__dirname, 'dist')))
app.use(express.static(join(__dirname, 'node_modules')))

app.use('/', api)


const PORT = 8081
app.listen(process.env.PORT || PORT, function() {
    console.log(`Weather App server is running on port ${PORT}`);
})