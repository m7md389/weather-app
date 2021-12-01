import Mongoose from "mongoose"
const Schema = Mongoose.Schema
Mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weatherapp")

const citySchema = new Schema({
    name: String,
    temperature: Number,
    condition: String,
    conditionPic: String
})

const City = Mongoose.model("city", citySchema)

export default City