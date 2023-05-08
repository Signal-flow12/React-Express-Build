require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan")
const peopleController = require("./controllers/people")

//MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use('/people', peopleController)

//ROUTES

app.get('/', (req,res) => {
   res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Listening on port $PORT`)
})