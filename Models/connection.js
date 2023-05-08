require("dotenv").config();
const { MONGODB_URL } = process.env;
const mongoose = require("mongoose");

mongoose.connect(MONGODB_URL);

mongoose.connection
    .on("open", () => console.log("You are connected!"))
    .on("close", () => console.log("You are disconected!"))
    .on("error", () => console.log("ERROR"))

module.exports = mongoose;