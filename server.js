import express, { json, urlencoded } from "express";
import { join, resolve } from "path";
import api from "./server/routes/api.js";
import Mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://localhost/weatherapp";
Mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});

const __dirname = resolve();

const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "dist")));
app.use(express.static(join(__dirname, "node_modules")));

app.use("/", api);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, function () {
  console.log(`Weather App server is running on port ${PORT}`);
});
